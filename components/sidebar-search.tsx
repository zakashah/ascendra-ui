"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiSearchLine } from "react-icons/ri";
import { LuX } from "react-icons/lu";
import { cn } from "@/ascendra-ui/shadcn";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupInput,
  InputGroupButton,
} from "@/ascendra-ui";
import { navConfig } from "@/lib/nav-config";

type SearchResult = {
  categoryTitle: string;
  name: string;
  href: string;
};

function getResults(query: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return navConfig.flatMap((category) =>
    category.items
      .filter((item) => item.slug && item.name.toLowerCase().includes(q))
      .map((item) => ({
        categoryTitle: category.title,
        name: item.name,
        href: `/showcase/${item.slug}`,
      })),
  );
}

export function SidebarSearch({
  children,
}: {
  children: React.ReactNode;
}) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();

  const results = getResults(query);
  const isSearching = query.trim().length > 0;

  const handleResultClick = () => {
    setQuery("");
    document
      .getElementById("app-layout")
      ?.setAttribute("data-sidebar", "closed");
  };

  return (
    <>
      {/* Search input */}
      <div className="px-3 pt-3 pb-1">
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>
              <RiSearchLine />
            </InputGroupText>
          </InputGroupAddon>
          <InputGroupInput
            ref={inputRef}
            type="text"
            placeholder="Search menus…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                onClick={() => {
                  setQuery("");
                  inputRef.current?.focus();
                }}
                aria-label="Clear search"
              >
                <LuX />
              </InputGroupButton>
            </InputGroupAddon>
          )}
        </InputGroup>
      </div>

      {/* Results or normal sidebar menu */}
      {isSearching ? (
        <div className="mt-1 px-1.5">
          {results.length === 0 ? (
            <p className="px-3 py-6 text-center text-xs text-muted-foreground">
              No results for &ldquo;{query}&rdquo;
            </p>
          ) : (
            <div className="mt-3 flex flex-col gap-0.5">
              {results.map((result) => {
                const isActive = pathname === result.href;
                return (
                  <Link
                    key={result.href}
                    href={result.href}
                    onClick={handleResultClick}
                    className={cn(
                      "flex h-8 w-full items-center gap-2 rounded-md px-3 text-sm transition-colors",
                      "text-muted-foreground hover:bg-foreground/4 hover:text-foreground",
                      isActive && "bg-foreground/8 text-foreground",
                    )}
                  >
                    <span className="min-w-0 flex-1 truncate">
                      {result.name}
                    </span>
                    <span className="shrink-0 text-[10px] text-muted-foreground/50">
                      {result.categoryTitle}
                    </span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        children
      )}
    </>
  );
}
