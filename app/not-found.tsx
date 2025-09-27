import { SmoothButton } from "@/components/ui/smooth-button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. It might have been moved or
          deleted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <SmoothButton href="/" className="group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Go Back
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
