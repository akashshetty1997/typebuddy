"use client";

import { cn } from "@/lib/utils";
import { AnimatedContainer } from "./animated-container";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader = ({
  title,
  subtitle,
  description,
  centered = true,
  className,
}: SectionHeaderProps) => {
  return (
    <AnimatedContainer
      className={cn("mb-12", centered && "text-center", className)}
    >
      {subtitle && (
        <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </AnimatedContainer>
  );
};
