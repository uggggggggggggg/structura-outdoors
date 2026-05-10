import { ShieldCheck, Award, Building2, HardHat, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const badges = [
  { label: "BBB Accredited", icon: Award },
  { label: "CHBA Member", icon: Building2 },
  { label: "Fully Insured", icon: ShieldCheck },
  { label: "WCB Covered", icon: HardHat },
  { label: "5-Year Warranty", icon: Clock },
];

export default function TrustBar() {
  return (
    <section className="border-b border-brand-border bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-6">
            {badges.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-sm font-medium text-brand-dark/60"
              >
                <Icon size={16} className="text-brand-accent" />
                {label}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
