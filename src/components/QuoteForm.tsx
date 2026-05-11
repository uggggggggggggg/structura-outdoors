"use client";

import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, Send, Loader2 } from "lucide-react";

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
  { title: "Project Type", fields: ["projectType"] as const },
  { title: "Your Details", fields: ["fullName", "email", "phone"] as const },
  { title: "Project Scope", fields: ["projectDetails", "timeline", "budget"] as const },
  { title: "Review & Submit", fields: [] as const },
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

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

export default function QuoteForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [direction, setDirection] = useState(0);

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

  const goNext = useCallback(async () => {
    const fieldsToValidate = steps[currentStep].fields;
    if (fieldsToValidate.length > 0) {
      const valid = await trigger(fieldsToValidate as unknown as FieldName[]);
      if (!valid) return;
    }
    if (currentStep < steps.length - 1) {
      setDirection(1);
      setCurrentStep((s) => s + 1);
    }
  }, [currentStep, trigger]);

  const goBack = useCallback(() => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep((s) => s - 1);
    }
  }, [currentStep]);

  const onSubmit = async (_data: QuoteFormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(_data),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      // API route handles persistence in production
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        className="mx-auto max-w-lg text-center py-16"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-cta/10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.15 }}
        >
          <Check size={36} className="text-brand-cta" />
        </motion.div>
        <h3 className="mt-6 font-serif text-2xl font-bold text-brand-dark">
          Thank you, {formValues.fullName}!
        </h3>
        <p className="mt-3 text-lg text-brand-dark/60">
          We&apos;ll review your project and get back to you within 24 hours.
          In the meantime, keep an eye on your inbox — we&apos;re sending you
          something useful.
        </p>
      </motion.div>
    );
  }

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-3">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center">
              <motion.div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                  i <= currentStep
                    ? "bg-brand-dark text-white"
                    : "bg-brand-border text-brand-dark/40"
                }`}
                animate={i <= currentStep ? { scale: [1, 1.15, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                {i < currentStep ? <Check size={14} /> : i + 1}
              </motion.div>
              <span
                className={`hidden sm:block ml-2 text-xs font-medium uppercase tracking-wider transition-colors duration-300 ${
                  i <= currentStep ? "text-brand-dark" : "text-brand-dark/30"
                }`}
              >
                {s.title}
              </span>
              {i < steps.length - 1 && (
                <div className="hidden sm:block w-12 md:w-20 h-px mx-3 bg-brand-border overflow-hidden">
                  <motion.div
                    className="h-full bg-brand-dark origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: i < currentStep ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          {currentStep === 0 && (
            <motion.div
              key="step-0"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h3 className="font-serif text-xl font-bold text-brand-dark mb-6">
                What can we help you with?
              </h3>
              <div className="grid gap-4">
                {[
                  { value: "decking", label: "Decking", desc: "Custom composite, cedar, or pressure-treated decks" },
                  { value: "garden-design", label: "Modern Garden Design", desc: "Architectural planting, hardscaping, lighting" },
                  { value: "foundation-repair", label: "Foundation Repair", desc: "Piering, waterproofing, crack injection" },
                ].map(({ value, label, desc }) => (
                  <motion.label
                    key={value}
                    className={`flex items-start gap-4 rounded-lg border p-5 cursor-pointer transition-all duration-200 ${
                      formValues.projectType === value
                        ? "border-brand-dark bg-brand-warm"
                        : "border-brand-border hover:border-brand-accent"
                    }`}
                    whileTap={{ scale: 0.985 }}
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
                  </motion.label>
                ))}
              </div>
              {errors.projectType && (
                <p className="mt-2 text-sm text-red-600">{errors.projectType.message}</p>
              )}
            </motion.div>
          )}

          {currentStep === 1 && (
            <motion.div
              key="step-1"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
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
                    className="w-full rounded-lg border border-brand-border bg-white px-4 py-3 text-brand-dark placeholder:text-brand-dark/30 focus:border-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-dark transition-colors duration-200"
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
                    className="w-full rounded-lg border border-brand-border bg-white px-4 py-3 text-brand-dark placeholder:text-brand-dark/30 focus:border-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-dark transition-colors duration-200"
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
                    className="w-full rounded-lg border border-brand-border bg-white px-4 py-3 text-brand-dark placeholder:text-brand-dark/30 focus:border-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-dark transition-colors duration-200"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step-2"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
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
                    className="w-full rounded-lg border border-brand-border bg-white px-4 py-3 text-brand-dark placeholder:text-brand-dark/30 focus:border-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-dark resize-none transition-colors duration-200"
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
                      <motion.label
                        key={value}
                        className={`flex items-center gap-3 rounded-lg border px-4 py-3 cursor-pointer transition-all duration-200 ${
                          formValues.timeline === value
                            ? "border-brand-dark bg-brand-warm"
                            : "border-brand-border hover:border-brand-accent"
                        }`}
                        whileTap={{ scale: 0.97 }}
                      >
                        <input
                          type="radio"
                          value={value}
                          {...register("timeline")}
                          className="h-4 w-4 accent-brand-dark"
                        />
                        <span className="text-sm font-medium text-brand-dark">{label}</span>
                      </motion.label>
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
                      <motion.label
                        key={value}
                        className={`flex items-center gap-3 rounded-lg border px-4 py-3 cursor-pointer transition-all duration-200 ${
                          formValues.budget === value
                            ? "border-brand-dark bg-brand-warm"
                            : "border-brand-border hover:border-brand-accent"
                        }`}
                        whileTap={{ scale: 0.97 }}
                      >
                        <input
                          type="radio"
                          value={value}
                          {...register("budget")}
                          className="h-4 w-4 accent-brand-dark"
                        />
                        <span className="text-sm font-medium text-brand-dark">{label}</span>
                      </motion.label>
                    ))}
                  </div>
                  {errors.budget && (
                    <p className="mt-1 text-sm text-red-600">{errors.budget.message}</p>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step-3"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h3 className="font-serif text-xl font-bold text-brand-dark mb-6">
                Review your request
              </h3>
              <div className="rounded-lg border border-brand-border bg-brand-warm p-6 space-y-4">
                {[
                  ["Project type", projectLabels[formValues.projectType]],
                  ["Name", formValues.fullName],
                  ["Email", formValues.email],
                  ["Phone", formValues.phone],
                  ["Timeline", timelineLabels[formValues.timeline]],
                  ["Budget", budgetLabels[formValues.budget]],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between">
                    <span className="text-sm text-brand-dark/50">{label}</span>
                    <span className="text-sm font-semibold text-brand-dark">{value}</span>
                  </div>
                ))}
                <div className="border-t border-brand-border pt-4">
                  <span className="text-sm text-brand-dark/50">Details</span>
                  <p className="mt-1 text-sm text-brand-dark">{formValues.projectDetails}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-between">
          {currentStep > 0 ? (
            <motion.button
              type="button"
              onClick={goBack}
              className="flex items-center gap-1.5 text-sm font-medium text-brand-dark/60 hover:text-brand-dark transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={16} /> Back
            </motion.button>
          ) : (
            <div />
          )}

          {currentStep < steps.length - 1 ? (
            <motion.button
              type="button"
              onClick={goNext}
              className="flex items-center gap-1.5 rounded-md bg-brand-dark px-6 py-3 text-sm font-medium text-white transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Continue <ChevronRight size={16} />
            </motion.button>
          ) : (
            <motion.button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 rounded-md bg-brand-cta px-8 py-3 text-sm font-medium text-white transition-colors disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
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
            </motion.button>
          )}
        </div>
      </form>
    </div>
  );
}
