"use client";

import { Card } from "@/components/ui/card";
import { IconWrapper } from "./icon-wrapper";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  details?: string;
  delay?: number;
  className?: string;
}

export const FeatureCard = ({
  icon,
  title,
  description,
  details,
  delay = 0,
  className,
}: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <Card
        className={cn(
          "p-6 h-full border-border hover:shadow-lg transition-all duration-300",
          className
        )}
      >
        <div className="flex flex-col h-full">
          <div className="mb-4 p-3 bg-primary/5 rounded-lg w-fit">
            <IconWrapper icon={icon} className="text-primary" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-2">{description}</p>
          {details && (
            <p className="text-sm text-muted-foreground mt-auto pt-2">
              {details}
            </p>
          )}
        </div>
      </Card>
    </motion.div>
  );
};
