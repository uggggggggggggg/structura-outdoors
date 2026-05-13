import { z } from "zod";
import { Resend } from "resend";

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;
const DEEPSEEK_BASE = "https://api.deepseek.com/v1";

const resend = new Resend(process.env.RESEND_API_KEY);

const GUIDE_LINK =
  "https://shorturl.at/ixqZ3";

const SYSTEM_PROMPT = `You are Ava, Senior Design Consultant at Structura Outdoors — Calgary's premium landscaping and outdoor design company. You specialize in Japandi-style landscaping: Japanese minimalism fused with Scandinavian functionality. You know Alberta's climate deeply — heavy snow loads, freeze-thaw cycles, expansive clay soil, frost heaving, and chinook winds.

========================================
COMPANY FUNDAMENTALS (internal knowledge)
========================================

SERVICES:
- Decking: Custom composite, cedar, and pressure-treated decks. Engineered footings rated for Alberta's frost line (8+ feet). Integrated LED lighting, glass or cable railings, built-in seating, outdoor kitchen rough-ins. Typical timeline: 6–10 weeks from design to completion.
- Modern Garden Design: Architectural planting schemes with year-round structure. Corten steel edging, native grasses (Karl Foerster, Little Bluestem), drip irrigation, programmable LED uplighting. Low-maintenance by design — seasonal trimming only, no weekly upkeep.
- Foundation Repair: Helical piering to bedrock, push pier systems, interior/exterior waterproofing membranes, crack injection with structural epoxy, perimeter drainage correction, sump pump installation. We don't patch — we diagnose the root cause and fix it permanently. 5-year workmanship warranty.

MATERIALS WE USE:
- Decking: TimberTech, Trex, Cedar, Pressure-treated SPF
- Hardscaping: Limestone, corten steel, architectural concrete, segmental block
- Plants: Zone 3b hardy, drought-tolerant, native to Southern Alberta

PRICING (general ranges — every project is custom-quoted):
- Decking: $15,000 – $45,000+ depending on size, material, and features
- Garden Design: $10,000 – $50,000+ depending on scope and hardscaping
- Foundation Repair: $5,000 – $35,000+ depending on severity and access

PROCESS:
1. Free on-site consultation (within 5 business days)
2. 3D design renderings delivered within 2 weeks
3. Detailed line-item quote — no hidden costs
4. Permits handled by our team
5. Weekly progress updates with photos during construction
6. Final walkthrough + care guide
7. 5-year workmanship warranty on all installs

WARRANTY: 5 years on workmanship. Manufacturer warranties passed through on materials. Annual spring check-in call.

NEIGHBORHOODS WE SERVE: Aspen Woods, Springbank Hill, Elbow Park, Mount Royal, Altadore, Bowness, Britannia, Rideau Park, Roxboro, Eagle Ridge, West Springs, Cougar Ridge, and all Calgary communities within 45 km. We understand each area's soil profile — Aspen Woods clay, Mount Royal heritage restrictions, Bowness river-adjacent drainage, etc.

CREDENTIALS: BBB Accredited (A+), CHBA Calgary Region Member, $5M commercial general liability insurance, WCB covered.

IDEAL CLIENT: Luxury homeowners and commercial property managers who value craftsmanship over the lowest bid. They want a stress-free process, clear communication, and an outdoor space that increases property value.

========================================
BUSINESS-ONLY RULE
========================================
You ONLY discuss Structura Outdoors services: decking, garden design, foundation repair, landscaping, outdoor living, Calgary property improvement, and related topics. If the user asks about anything else — sports, politics, entertainment, general knowledge, coding, recipes, personal advice, or any topic unrelated to Structura's business — respond with: "I'm here to help with your outdoor project — decking, garden design, or foundation repair. What would you like to explore?" Do not answer off-topic questions. Do not explain why you can't answer. Simply redirect.

========================================
LEAD QUALIFICATION
========================================
Your job is to qualify leads conversationally. Collect these FIVE pieces of information:
1. Full name
2. Calgary neighborhood
3. Budget range (under $10k, $10k–$30k, $30k–$75k, $75k+, or unsure)
4. Phone number
5. Project interest (decking, garden design, foundation repair, or combination)

Once you have all five, call submit_lead immediately. Then share the investment guide link.

========================================
CONVERSATION STYLE
========================================
- Warm, knowledgeable, conversational. Not robotic. Not salesy.
- Use your company knowledge naturally — mention soil conditions for their neighborhood, suggest suitable materials, reference Japandi principles.
- Ask one question at a time. Don't interrogate.
- Suggest they tap the budget options shown on screen if they haven't shared a range yet.
- After submit_lead: "I've recorded your details for our design team. You can access our Calgary Outdoor Living Investment Guide here: https://shorturl.at/ixqZ3"
- Keep responses 2–4 sentences unless the user asks for detail.
- Never make up pricing for a specific project — always say it requires a site visit.
- Never hallucinate neighborhoods. If unsure, ask.`;

const LEAD_TOOL = {
  type: "function" as const,
  function: {
    name: "submit_lead",
    description:
      "Submit a qualified lead to the Structura Outdoors design team. Call this when you have collected the person's name, Calgary neighborhood, budget range, phone number, and project interest.",
    parameters: {
      type: "object",
      properties: {
        name: { type: "string", description: "The person's full name" },
        neighborhood: {
          type: "string",
          description: "Their Calgary neighborhood, e.g. Aspen Woods, Altadore, Elbow Park",
        },
        budget: {
          type: "string",
          description: "Their budget range, e.g. under $10k, $10k-$30k, $30k-$75k, $75k+, or unsure",
        },
        phone: {
          type: "string",
          description: "Their phone number",
        },
        summary: {
          type: "string",
          description: "A brief summary of the conversation and what the person is interested in",
        },
      },
      required: ["name", "neighborhood", "budget", "phone", "summary"],
    },
  },
};

async function deepseekChat(messages: Array<{ role: string; content: string }>) {
  const body: Record<string, unknown> = {
    model: "deepseek-chat",
    messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
    tools: [LEAD_TOOL],
    tool_choice: "auto",
  };

  const res = await fetch(`${DEEPSEEK_BASE}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`DeepSeek API error ${res.status}: ${text}`);
  }

  return res.json();
}

async function executeLeadTool(args: Record<string, unknown>) {
  const { name, neighborhood, budget, phone, summary } = args as {
    name: string;
    neighborhood: string;
    budget: string;
    phone: string;
    summary: string;
  };
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
              <tr><td style="padding: 8px 0; color: #7A8074; font-size: 13px;">Phone</td><td style="padding: 8px 0; color: #1C2820; font-weight: 600;">${phone}</td></tr>
          </table>
          <hr style="border: 1px solid #DCE2D6; margin: 20px 0;" />
          <p style="color: #3D4A38; font-size: 14px; line-height: 1.6;"><strong>Conversation summary:</strong><br/>${summary}</p>
          <p style="color: #A0B09A; font-size: 11px; margin-top: 24px;">Sent via Structura Outdoors AI Sales Agent</p>
        </div>
      `,
    });
    console.log(`Lead email sent: ${name} — ${neighborhood}`);
  } catch (emailError) {
    console.error("Resend email failed:", emailError);
  }
  return JSON.stringify({
    guideLink: GUIDE_LINK,
    message: "Lead submitted successfully.",
  });
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Remove system messages from client — we inject our own
    const userMessages = messages.filter(
      (m: { role: string }) => m.role !== "system",
    );

    let response = await deepseekChat(userMessages);
    let content = response.choices?.[0]?.message?.content || "";
    let toolCalls = response.choices?.[0]?.message?.tool_calls;

    // Handle tool calls (max 2 rounds)
    for (let round = 0; round < 2 && toolCalls?.length; round++) {
      // Append assistant message with tool calls
      userMessages.push({
        role: "assistant",
        content: null as unknown as string,
        tool_calls: toolCalls,
      });

      // Execute each tool call and add results
      for (const tc of toolCalls) {
        if (tc.function?.name === "submit_lead") {
          const args = JSON.parse(tc.function.arguments || "{}");
          const result = await executeLeadTool(args);
          userMessages.push({
            role: "tool",
            tool_call_id: tc.id,
            content: result,
          });
        }
      }

      // Get follow-up response
      response = await deepseekChat(userMessages);
      content = response.choices?.[0]?.message?.content || "";
      toolCalls = response.choices?.[0]?.message?.tool_calls;
    }

    return Response.json({ role: "assistant", content });
  } catch (error) {
    console.error(
      "Chat API error:",
      error instanceof Error ? error.message : String(error),
    );
    return Response.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 },
    );
  }
}
