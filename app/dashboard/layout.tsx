import React, { ReactNode } from "react";
import DashboardNavigation from "../components/dashboard/DashboardNavigation";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="sticky bg-white top-0 flex h-16 items-center justify-between gap-4 border-b">
        <nav className="hidden md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 font-medium">
          <DashboardNavigation />
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="shrink-0 md:hidden"
              variant="outline"
              size="icon"
            >
              <MenuIcon className="h-5 w-5 " />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu bar</SheetTitle>
              <nav className="grid gap-6 text-lg font-medium mt-2">
                <DashboardNavigation />
              </nav>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
}
