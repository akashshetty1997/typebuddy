import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}

export const SectionWrapper = ({
  children,
  id,
  className,
  containerClassName,
}: SectionWrapperProps) => {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div
        className={cn("container mx-auto px-4 max-w-7xl", containerClassName)}
      >
        {children}
      </div>
    </section>
  );
};
