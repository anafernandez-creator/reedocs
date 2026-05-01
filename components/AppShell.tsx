"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps): JSX.Element {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="flex">
        <Sidebar pathname={pathname} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
