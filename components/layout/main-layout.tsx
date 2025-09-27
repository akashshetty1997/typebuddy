"use client";

import { cn } from "@/lib/utils";
import { Sidebar } from "./sidebar";
import { Logo, NavigationItem } from "@/types";

interface MainLayoutProps {
  children: React.ReactNode;
  logo: Logo;
  navigation: NavigationItem[];
}

export const MainLayout = ({ children, logo, navigation }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar logo={logo} navigation={navigation} />

      {/* Main Content Area */}
      <main
        className={cn(
          "transition-all duration-300",
          "lg:ml-64", // Offset for desktop sidebar
          "pt-16 lg:pt-0" // Offset for mobile header
        )}
      >
        {children}
      </main>
    </div>
  );
};
