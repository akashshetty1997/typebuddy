"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

interface SmoothButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "default" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  external?: boolean;
}

export const SmoothButton = ({
  children,
  href,
  onClick,
  variant = "default",
  size = "default",
  className,
  external = false,
}: SmoothButtonProps) => {
  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button
        variant={variant}
        size={size}
        onClick={onClick}
        className={cn("relative overflow-hidden", className)}
      >
        <span className="relative z-10">{children}</span>
      </Button>
    </motion.div>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {buttonContent}
        </a>
      );
    }
    return <Link href={href}>{buttonContent}</Link>;
  }

  return buttonContent;
};
