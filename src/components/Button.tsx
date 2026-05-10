import Link from "next/link";
import type { ButtonSize, ButtonVariant } from "@/lib/button-variants";
import { getButtonClasses } from "@/lib/button-variants";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  type = "button",
  className = "",
  onClick,
  disabled = false,
}: ButtonProps) {
  const classes = getButtonClasses(variant, size, className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
