import React, { ReactNode } from "react";
import DashboardNavigation from "../components/dashboard/DashboardNavigation";

import { Button } from "@/components/ui/button";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="sticky bg-white top-0 flex h-16 items-center justify-between gap-4 border-b">
        <nav className="hidden md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 font-medium">
          <DashboardNavigation />

          <Button>Click me</Button>
        </nav>
      </header>
    </div>
  );
}
