import Link from "next/link";
import { BarChart3, FileStack, LayoutDashboard, PlusCircle, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/processes", label: "Processos", icon: FileStack },
  { href: "/processes/new", label: "Novo processo", icon: PlusCircle },
  { href: "/reports", label: "Relatorios", icon: BarChart3 },
  { href: "/settings", label: "Configuracoes", icon: Settings }
];

interface SidebarProps {
  pathname: string;
}

export function Sidebar({ pathname }: SidebarProps): JSX.Element {
  return (
    <aside className="hidden w-64 border-r border-border bg-white px-3 py-6 lg:block">
      <p className="px-3 text-xs font-semibold uppercase tracking-wide text-reedocs-gray">Navegacao</p>
      <nav className="mt-4 space-y-1">
        {links.map((link) => {
          const Icon = link.icon;
          const active = pathname.startsWith(link.href);
          return (
            <Link
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                active ? "bg-reedocs-blue text-white" : "text-reedocs-gray hover:bg-muted hover:text-foreground"
              )}
              href={link.href}
              key={link.href}
            >
              <Icon className="h-4 w-4" />
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
