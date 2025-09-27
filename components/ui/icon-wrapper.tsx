"use client";

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";

interface IconWrapperProps {
  icon: string | LucideIcon;
  className?: string;
  size?: number;
}

export const IconWrapper = ({
  icon,
  className,
  size = 24,
}: IconWrapperProps) => {
  // If icon is already a component
  if (typeof icon !== "string") {
    const Icon = icon;
    return <Icon className={cn("", className)} size={size} />;
  }

  // If icon is a string, get it from Icons
  const Icon = Icons[icon as keyof typeof Icons] as LucideIcon;

  if (!Icon) {
    console.warn(`Icon "${icon}" not found`);
    return null;
  }

  return <Icon className={cn("", className)} size={size} />;
};
