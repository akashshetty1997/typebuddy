"use client";

import { IconWrapper } from "./icon-wrapper";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  icon: string;
  delay?: number;
  className?: string;
}

export const StatCard = ({
  value,
  label,
  icon,
  delay = 0,
  className,
}: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn("text-center", className)}
    >
      <div className="inline-flex p-3 bg-primary/5 rounded-full mb-4">
        <IconWrapper icon={icon} className="text-primary" size={24} />
      </div>
      <div className="text-3xl md:text-4xl font-bold mb-2">{value}</div>
      <div className="text-muted-foreground">{label}</div>
    </motion.div>
  );
};
