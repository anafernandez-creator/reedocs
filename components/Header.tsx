import { Bell, Search } from "lucide-react";

export function Header(): JSX.Element {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-white px-6">
      <div className="flex items-center gap-3">
        <img
          src="/reedocs-logo.png"
          alt="Reedocs"
          className="h-12 w-auto object-contain"
        />
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-md border border-border bg-muted px-3 py-2 md:flex">
          <Search className="h-4 w-4 text-reedocs-gray" />
          <span className="text-sm text-reedocs-gray">Buscar processo</span>
        </div>

        <button
          className="rounded-md border border-border p-2 text-reedocs-gray hover:bg-muted"
          type="button"
        >
          <Bell className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}