"use client";

import { ThemeProvider } from "@/components/ui/theme-provider";
import { LoadingProvider } from "@/components/ui/loading-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LoadingProvider>{children}</LoadingProvider>
    </ThemeProvider>
  );
}
