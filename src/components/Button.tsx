"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={onClick} className="inline-block">
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
