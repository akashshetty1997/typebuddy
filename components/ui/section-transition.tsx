"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
  sectionId?: string;
}

export const SectionTransition = ({
  children,
  className,
  sectionId,
}: SectionTransitionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
    margin: "-100px",
  });

  return (
    <motion.div
      ref={ref}
      id={sectionId}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: isInView ? 1 : 0.3,
        y: isInView ? 0 : 50,
      }}
      transition={{
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={cn(className)}
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{
          scale: isInView ? 1 : 0.95,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
