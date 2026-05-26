"use client";

import React, { createContext, useContext, useState } from "react";

import { cn } from "@/ascendra-ui/shadcn/lib/utils";

type MainSectionContextValue = {
  collapseable: boolean;
  collapsed: boolean;
  onToggle: () => void;
  step?: number;
};

const MainSectionContext = createContext<MainSectionContextValue>({
  collapseable: false,
  collapsed: false,
  onToggle: () => {},
  step: undefined,
});

export function useMainSectionContext() {
  return useContext(MainSectionContext);
}

export function MainSection({
  danger = false,
  collapseable,
  hasError = false,
  step,
  className,
  children,
  ...props
}: React.ComponentProps<"section"> & {
  danger?: boolean;
  collapseable?: "expanded" | "collapsed";
  hasError?: boolean;
  step?: number;
}) {
  const [collapsed, setCollapsed] = useState(collapseable === "collapsed");

  return (
    <MainSectionContext.Provider
      value={{
        collapseable: !!collapseable,
        collapsed,
        onToggle: () => setCollapsed((prev) => !prev),
        step,
      }}
    >
      <section
        data-slot="main-section"
        className={cn(
          "group bg-muted flex flex-col rounded-xl py-1",
          danger && "bg-red-50 dark:bg-(--color-red-1500)",
          hasError &&
            collapsed &&
            "outline-2 -outline-offset-2 outline-destructive",
          className,
        )}
        {...props}
      >
        {children}
      </section>
    </MainSectionContext.Provider>
  );
}
