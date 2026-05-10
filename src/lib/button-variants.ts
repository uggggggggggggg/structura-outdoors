export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg" | "xl";

const baseClasses =
  "inline-flex items-center justify-center font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

export const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-brand-cta text-white hover:bg-brand-cta/90 shadow-sm",
  secondary: "bg-brand-dark text-brand-light hover:bg-brand-dark/90",
  outline:
    "border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-brand-light",
  ghost: "text-brand-dark hover:bg-brand-dark/5",
};

export const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm rounded-md",
  md: "h-11 px-6 text-base rounded-md",
  lg: "h-12 px-8 text-base rounded-md",
  xl: "h-14 px-10 text-lg rounded-md",
};

export function getButtonClasses(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
) {
  return [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");
}
