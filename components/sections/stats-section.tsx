"use client";

import { StatsData } from "@/types";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { StatCard } from "@/components/ui/stat-card";
import { motion } from "framer-motion";

interface StatsSectionProps {
  data: StatsData;
}

export const StatsSection = ({ data }: StatsSectionProps) => {
  return (
    <SectionWrapper className="py-12 bg-primary/5">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {data.stats.map((stat, index) => (
          <StatCard
            key={stat.id}
            value={stat.value}
            label={stat.label}
            icon={stat.icon}
            delay={index * 0.1}
          />
        ))}
      </motion.div>
    </SectionWrapper>
  );
};
