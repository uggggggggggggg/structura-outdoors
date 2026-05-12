import { createOpenAI } from "@ai-sdk/openai";
import { streamText, tool } from "ai";
import { z } from "zod";
import { Resend } from "resend";

const deepseek = createOpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY,
  baseURL: "https://api.deepseek.com/v1",
});

const resend = new Resend(process.env.RESEND_API_KEY);

const GUIDE_LINK =
  "https://docs.google.com/document/d/1XB3v4eQ0X4IekUikleqfwYqqRJr44ENamQ0mOZRJrfE/edit?usp=sharing";

const SYSTEM_PROMPT = `You are the Senior Design Consultant for Structura Outdoors, Calgary's premium landscaping and outdoor design company. You specialize in Japandi-style landscaping — a fusion of Japanese minimalism and Scandinavian functionality — and you know the technical demands of Alberta's climate: heavy snow loads, freeze-thaw cycles, expansive clay soil, and frost heaving.

Your job is to qualify leads conversationally. You must collect THREE pieces of information:
1. The person's name
2. Their Calgary neighborhood (e.g., Aspen Woods, Altadore, Elbow Park, Springbank Hill, Mount Royal, Bowness)
3. Their budget range for the project (e.g., under $10k, $10k-$30k, $30k-$75k, $75k+, or unsure)

Guidelines:
- Be warm, knowledgeable, and conversational — not pushy or robotic.
- Weave in your expertise naturally. Mention how certain neighborhoods have specific soil or drainage challenges. Reference Japandi design principles (clean lines, natural materials, intentional restraint) when relevant.
- Ask one question at a time. Don't interrogate.
- Once you have all three pieces of data (name, neighborhood, budget), call the submit_lead tool immediately.
- After calling the tool, tell the user something like: "I've recorded your details for our design team. You can access our Calgary Outdoor Living Investment Guide here: [link]"
- Keep responses concise — 2-4 sentences max unless the user asks for detail.
- Never hallucinate neighborhoods or pricing. If you're unsure, ask.`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = streamText({
      model: deepseek("deepseek-chat"),
      system: SYSTEM_PROMPT,
      messages,
      tools: {
        submit_lead: tool({
          description:
            "Submit a qualified lead to the Structura Outdoors design team. Call this when you have collected the person's name, Calgary neighborhood, and budget range.",
          inputSchema: z.object({
            name: z.string().describe("The person's full name"),
            neighborhood: z
              .string()
              .describe(
                "Their Calgary neighborhood, e.g. Aspen Woods, Altadore, Elbow Park",
              ),
            budget: z
              .string()
              .describe(
                "Their budget range, e.g. under $10k, $10k-$30k, $30k-$75k, $75k+, or unsure",
              ),
            summary: z
              .string()
              .describe(
                "A brief summary of the conversation and what the person is interested in",
              ),
          }),
          outputSchema: z.object({
            guideLink: z.string(),
            message: z.string(),
          }),
          execute: async ({ name, neighborhood, budget, summary }) => {
            try {
              await resend.emails.send({
                from: "onboarding@resend.dev",
                to: "nicoarispe05@gmail.com",
                subject: `New Lead: ${name} — ${neighborhood}`,
                html: `
                  <div style="font-family: Georgia, serif; max-width: 480px; padding: 24px;">
                    <h2 style="color: #1C2820; margin-bottom: 4px;">New Lead Alert</h2>
                    <p style="color: #7A8074; margin-top: 0;">Structura Outdoors — AI Sales Agent</p>
                    <hr style="border: 1px solid #DCE2D6; margin: 20px 0;" />
                    <table style="width: 100%; border-collapse: collapse;">
                      <tr><td style="padding: 8px 0; color: #7A8074; font-size: 13px;">Name</td><td style="padding: 8px 0; color: #1C2820; font-weight: 600;">${name}</td></tr>
                      <tr><td style="padding: 8px 0; color: #7A8074; font-size: 13px;">Neighborhood</td><td style="padding: 8px 0; color: #1C2820; font-weight: 600;">${neighborhood}</td></tr>
                      <tr><td style="padding: 8px 0; color: #7A8074; font-size: 13px;">Budget</td><td style="padding: 8px 0; color: #1C2820; font-weight: 600;">${budget}</td></tr>
                    </table>
                    <hr style="border: 1px solid #DCE2D6; margin: 20px 0;" />
                    <p style="color: #3D4A38; font-size: 14px; line-height: 1.6;"><strong>Conversation summary:</strong><br/>${summary}</p>
                    <p style="color: #A0B09A; font-size: 11px; margin-top: 24px;">Sent via Structura Outdoors AI Sales Agent</p>
                  </div>
                `,
              });
            } catch (emailError) {
              console.error("Resend email failed:", emailError);
            }

            return {
              guideLink: GUIDE_LINK,
              message:
                "Lead submitted successfully. Share the investment guide with the user.",
            };
          },
        }),
      },
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response("An error occurred", { status: 500 });
  }
}
