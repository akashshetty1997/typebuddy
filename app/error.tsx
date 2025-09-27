"use client";

import { useEffect } from "react";
import { SmoothButton } from "@/components/ui/smooth-button";
import { AlertCircle, RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20">
      <div className="text-center px-4">
        <div className="inline-flex p-4 bg-destructive/10 rounded-full mb-6">
          <AlertCircle className="w-12 h-12 text-destructive" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Something went wrong!
        </h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          We encountered an unexpected error. Please try again or return to the
          home page.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <SmoothButton onClick={reset} className="group">
            <RefreshCw className="mr-2 h-4 w-4 transition-transform group-hover:rotate-180" />
            Try Again
          </SmoothButton>
          <SmoothButton href="/" variant="outline">
            <Home className="mr-2 h-4 w-4" />
            Home Page
          </SmoothButton>
        </div>
      </div>
    </div>
  );
}
