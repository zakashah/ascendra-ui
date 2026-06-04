"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LuMenu, LuSearch, LuX } from "react-icons/lu";
import { navConfig } from "@/lib/nav-config";
import { cn } from "@/ascendra-ui/shadcn";
import { ThemeToggle } from "@/ascendra-ui";

function NavContent({
  query,
  setQuery,
  onNavigate,
}: {
  query: string;
  setQuery: (q: string) => void;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  const isActive = (slug: string) => {
    if (slug === "") return pathname === "/showcase";
    return pathname === `/showcase/${slug}`;
  };

  const q = query.trim().toLowerCase();
  const filtered = q
    ? navConfig
        .map((category) => ({
          ...category,
          items: category.items.filter((item) =>
            item.name.toLowerCase().includes(q),
          ),
        }))
        .filter((category) => category.items.length > 0)
    : navConfig;

  return (
    <>
      {/* Search */}
      <div className="px-3 pt-3 pb-1">
        <div className="group relative">
          <LuSearch className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search components…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-sm border bg-muted/40 py-1.5 pl-8 pr-7 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:text-foreground"
              aria-label="Clear search"
              tabIndex={-1}
            >
              <LuX className="size-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Nav categories */}
      <nav className="flex-1 overflow-y-auto px-3 pt-4 pb-10">
        {filtered.length === 0 ? (
          <p className="px-2 text-xs text-muted-foreground">
            No results for &ldquo;{query}&rdquo;
          </p>
        ) : (
          filtered.map((category) => (
            <div key={category.title} className="mb-5">
              <p className="mb-1 px-2 text-[0.6875rem] font-semibold uppercase tracking-wider text-muted-foreground/70">
                {category.title}
              </p>
              <ul className="space-y-0.5">
                {category.items.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={
                        item.slug === ""
                          ? "/showcase"
                          : `/showcase/${item.slug}`
                      }
                      onClick={onNavigate}
                      className={cn(
                        "flex h-7 items-center rounded-sm px-2 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                        isActive(item.slug)
                          ? "bg-primary/8 font-medium text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground",
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </nav>
    </>
  );
}

export function ShowcaseNav() {
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen w-56 shrink-0 flex-col border-r bg-background lg:flex">
        <div className="flex h-14 shrink-0 items-center justify-between border-b px-4">
          <Link
            href="/showcase"
            className="text-sm font-semibold text-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
          >
            Component Showcase
          </Link>
          <ThemeToggle />
        </div>
        <NavContent query={query} setQuery={setQuery} />
      </aside>

      {/* Mobile menu button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-3 left-3 z-40 flex items-center justify-center rounded-sm border bg-background p-1.5 shadow-sm text-foreground lg:hidden"
        aria-label="Open menu"
      >
        <LuMenu className="size-4" />
      </button>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r bg-background transition-transform duration-200 lg:hidden",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-14 shrink-0 items-center justify-between border-b px-4">
          <Link
            href="/showcase"
            className="text-sm font-semibold text-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
          >
            Component Showcase
          </Link>
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center rounded-sm p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Close menu"
            >
              <LuX className="size-4" />
            </button>
          </div>
        </div>
        <NavContent
          query={query}
          setQuery={setQuery}
          onNavigate={() => setMobileOpen(false)}
        />
      </aside>
    </>
  );
}
