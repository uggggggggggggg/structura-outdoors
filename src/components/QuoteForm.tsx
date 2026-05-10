"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, ChevronLeft, ChevronRight, Send, Loader2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const quoteSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Phone number is required"),
  projectType: z.enum(["decking", "garden-design", "foundation-repair"], {
    error: "Please select a project type",
  }),
  projectDetails: z
    .string()
    .min(10, "Please share a few details about your project"),
  timeline: z.enum(["asap", "1-3-months", "3-6-months", "researching"], {
    error: "Please select a timeline",
  }),
  budget: z.enum(["under-10k", "10k-30k", "30k-75k", "75k-plus", "unsure"], {
    error: "Please select a budget range",
  }),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const steps = [
  {
    title: "Project Type",
    fields: ["projectType"] as const,
  },
  {
    title: "Your Details",
    fields: ["fullName", "email", "phone"] as const,
  },
  {
    title: "Project Scope",
    fields: ["projectDetails", "timeline", "budget"] as const,
  },
  {
    title: "Review & Submit",
    fields: [] as const,
  },
];

type FieldName = keyof QuoteFormData;

const projectLabels: Record<string, string> = {
  decking: "Decking",
  "garden-design": "Modern Garden Design",
  "foundation-repair": "Foundation Repair",
};

const timelineLabels: Record<string, string> = {
  asap: "ASAP — ready to start",
  "1-3-months": "Within 1–3 months",
  "3-6-months": "Within 3–6 months",
  researching: "Just researching — no rush",
};

const budgetLabels: Record<string, string> = {
  "under-10k": "Under $10,000",
  "10k-30k": "$10,000 – $30,000",
  "30k-75k": "$30,000 – $75,000",
  "75k-plus": "$75,000+",
  unsure: "Not sure yet",
};

export default function QuoteForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      projectType: undefined as unknown as QuoteFormData["projectType"],
      timeline: undefined as unknown as QuoteFormData["timeline"],
      budget: undefined as unknown as QuoteFormData["budget"],
    },
  });

  const formValues = watch();

  const goNext = async () => {
    const fieldsToValidate = steps[currentStep].fields;
    if (fieldsToValidate.length > 0) {
      const valid = await trigger(fieldsToValidate as unknown as FieldName[]);
      if (!valid) return;
    }
    if (currentStep < steps.length - 1) {
      setCurrentStep((s) => s + 1);
    }
  };

  const goBack = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  };

  const onSubmit = async (_data: QuoteFormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(_data),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // Silently handle — the form will show success state in production, API route handles persistence
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-lg text-center py-16">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-cta/10">
          <Check size={36} className="text-brand-cta" />
        </div>
        <h3 className="mt-6 font-serif text-2xl font-bold text-brand-dark">
          Thank you, {formValues.fullName}!
        </h3>
        <p className="mt-3 text-lg text-brand-dark/60">
          We&apos;ll review your project and get back to you within 24 hours.
          In the meantime, keep an eye on your inbox — we&apos;re sending you
          something useful.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-3">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                  i <= currentStep
                    ? "bg-brand-dark text-white"
                    : "bg-brand-border text-brand-dark/40"
                }`}
              >
                {i < currentStep ? (
                  <Check size={14} />
                ) : (
                  i + 1
                )}
              </div>
              <span
                className={`hidden sm:block ml-2 text-xs font-medium uppercase tracking-wider ${
                  i <= currentStep ? "text-brand-dark" : "text-brand-dark/30"
                }`}
              >
                {s.title}
              </span>
              {i < steps.length - 1 && (
                <div
                  className={`hidden sm:block w-12 md:w-20 h-px mx-3 ${
                    i < currentStep ? "bg-brand-dark" : "bg-brand-border"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto">
        {currentStep === 0 && (
          <ScrollReveal>
            <div>
              <h3 className="font-serif text-xl font-bold text-brand-dark mb-6">
                What can we help you with?
              </h3>
              <div className="grid gap-4">
                {[
                  { value: "decking", label: "Decking", desc: "Custom composite, cedar, or pressure-treated decks" },
                  { value: "garden-design", label: "Modern Garden Design", desc: "Architectural planting, hardscaping, lighting" },
                  { value: "foundation-repair", label: "Foundation Repair", desc: "Piering, waterproofing, crack injection" },
                ].map(({ value, label, desc }) => (
                  <label
                    key={value}
                    className={`flex items-start gap-4 rounded-lg border p-5 cursor-pointer transition-all ${
                      formValues.projectType === value
                        ? "border-brand-dark bg-brand-warm"
                        : "border-brand-border hover:border-brand-accent"
                    }`}
                  >
                    <input
                      type="radio"
                      value={value}
                      {...register("projectType")}
                      className="mt-0.5 h-4 w-4 accent-brand-dark"
                    />
                    <div>
                      <span className="font-semibold text-brand-dark">{label}</span>
                      <p className="text-sm text-brand-dark/50 mt-0.5">{desc}</p>
                    </div>
                  </label>
                ))}
              </div>
              {errors.projectType && (
                <p className="mt-2 text-sm text-red-600">{errors.projectType.message}</p>
              )}
            </div>
          </ScrollReveal>
        )}

        {currentStep === 1 && (
          <ScrollReveal>
            <div>
              <h3 className="font-serif text-xl font-bold text-brand-dark mb-6">
                How can we reach you?
              </h3>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-medium text-brand-dark/70 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    {...register("fullName")}
                    placeholder="David Mitchell"
                    className="w-full rounded-lg border border-brand-border bg-white px-4 py-3 text-brand-dark placeholder:text-brand-dark/30 focus:border-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-dark"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-dark/70 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="david@example.com"
                    className="w-full rounded-lg border border-brand-border bg-white px-4 py-3 text-brand-dark placeholder:text-brand-dark/30 focus:border-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-dark"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-dark/70 mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    {...register("phone")}
                    placeholder="(403) 555-1234"
                    className="w-full rounded-lg border border-brand-border bg-white px-4 py-3 text-brand-dark placeholder:text-brand-dark/30 focus:border-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-dark"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {currentStep === 2 && (
          <ScrollReveal>
            <div>
              <h3 className="font-serif text-xl font-bold text-brand-dark mb-6">
                Tell us about your project
              </h3>
              <div className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-medium text-brand-dark/70 mb-1.5">
                    Project details
                  </label>
                  <textarea
                    {...register("projectDetails")}
                    rows={4}
                    placeholder="Tell us about your property, your vision, and what you're hoping to accomplish..."
                    className="w-full rounded-lg border border-brand-border bg-white px-4 py-3 text-brand-dark placeholder:text-brand-dark/30 focus:border-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-dark resize-none"
                  />
                  {errors.projectDetails && (
                    <p className="mt-1 text-sm text-red-600">{errors.projectDetails.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-dark/70 mb-2">
                    Timeline
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(timelineLabels).map(([value, label]) => (
                      <label
                        key={value}
                        className={`flex items-center gap-3 rounded-lg border px-4 py-3 cursor-pointer transition-all ${
                          formValues.timeline === value
                            ? "border-brand-dark bg-brand-warm"
                            : "border-brand-border hover:border-brand-accent"
                        }`}
                      >
                        <input
                          type="radio"
                          value={value}
                          {...register("timeline")}
                          className="h-4 w-4 accent-brand-dark"
                        />
                        <span className="text-sm font-medium text-brand-dark">{label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.timeline && (
                    <p className="mt-1 text-sm text-red-600">{errors.timeline.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-dark/70 mb-2">
                    Budget range
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {Object.entries(budgetLabels).map(([value, label]) => (
                      <label
                        key={value}
                        className={`flex items-center gap-3 rounded-lg border px-4 py-3 cursor-pointer transition-all ${
                          formValues.budget === value
                            ? "border-brand-dark bg-brand-warm"
                            : "border-brand-border hover:border-brand-accent"
                        }`}
                      >
                        <input
                          type="radio"
                          value={value}
                          {...register("budget")}
                          className="h-4 w-4 accent-brand-dark"
                        />
                        <span className="text-sm font-medium text-brand-dark">{label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.budget && (
                    <p className="mt-1 text-sm text-red-600">{errors.budget.message}</p>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {currentStep === 3 && (
          <ScrollReveal>
            <div>
              <h3 className="font-serif text-xl font-bold text-brand-dark mb-6">
                Review your request
              </h3>
              <div className="rounded-lg border border-brand-border bg-brand-warm p-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-brand-dark/50">Project type</span>
                  <span className="text-sm font-semibold text-brand-dark">
                    {projectLabels[formValues.projectType]}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-brand-dark/50">Name</span>
                  <span className="text-sm font-semibold text-brand-dark">{formValues.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-brand-dark/50">Email</span>
                  <span className="text-sm font-semibold text-brand-dark">{formValues.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-brand-dark/50">Phone</span>
                  <span className="text-sm font-semibold text-brand-dark">{formValues.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-brand-dark/50">Timeline</span>
                  <span className="text-sm font-semibold text-brand-dark">
                    {timelineLabels[formValues.timeline]}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-brand-dark/50">Budget</span>
                  <span className="text-sm font-semibold text-brand-dark">
                    {budgetLabels[formValues.budget]}
                  </span>
                </div>
                <div className="border-t border-brand-border pt-4">
                  <span className="text-sm text-brand-dark/50">Details</span>
                  <p className="mt-1 text-sm text-brand-dark">{formValues.projectDetails}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Navigation buttons */}
        <div className="mt-8 flex items-center justify-between">
          {currentStep > 0 ? (
            <button
              type="button"
              onClick={goBack}
              className="flex items-center gap-1.5 text-sm font-medium text-brand-dark/60 hover:text-brand-dark transition-colors"
            >
              <ChevronLeft size={16} /> Back
            </button>
          ) : (
            <div />
          )}

          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              onClick={goNext}
              className="flex items-center gap-1.5 rounded-md bg-brand-dark px-6 py-3 text-sm font-medium text-white hover:bg-brand-dark/90 transition-colors"
            >
              Continue <ChevronRight size={16} />
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 rounded-md bg-brand-cta px-8 py-3 text-sm font-medium text-white hover:bg-brand-cta/90 transition-colors disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Submitting...
                </>
              ) : (
                <>
                  <Send size={16} /> Submit Request
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
