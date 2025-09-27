"use client";

import { motion, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedContainerProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedContainer = ({
  children,
  className,
  delay = 0,
  ...props
}: AnimatedContainerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const FadeIn = ({
  children,
  className,
  delay = 0,
}: AnimatedContainerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

export const SlideIn = ({
  children,
  className,
  delay = 0,
  direction = "left",
}: AnimatedContainerProps & {
  direction?: "left" | "right" | "up" | "down";
}) => {
  const getInitial = () => {
    switch (direction) {
      case "left":
        return { x: -50, opacity: 0 };
      case "right":
        return { x: 50, opacity: 0 };
      case "up":
        return { y: 50, opacity: 0 };
      case "down":
        return { y: -50, opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};
