import { cn } from "@/ascendra-ui/shadcn/lib/utils";

export default function Page() {
  return (
    <div className="p-10">
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: "1fr" }}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            data-slot="table-container"
            data-table-container="true"
            className="bg-muted flex flex-col rounded-xl py-1"
          >
            <div
              data-slot="table-wrapper"
              className="-mb-px overflow-x-auto pb-px overflow-y-auto"
              style={{ maxHeight: "200px" }}
            >
              <table
                data-slot="table"
                className="w-full border-separate border-spacing-0"
              >
                <thead data-slot="table-header" className="">
                  <tr
                    data-slot="table-header-row"
                    className="text-secondary-foreground text-left text-xs"
                  >
                    <th
                      data-slot="table-head"
                      className="py-3 pl-5 first:pl-6 w-10"
                    >
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked="false"
                        data-state="unchecked"
                        value="on"
                        data-slot="checkbox"
                        className="relative top-0.5 inline-flex size-3.5 shrink-0 items-center justify-center rounded-[.25rem] transition text-white bg-white shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_rgba(25,28,33,.2),0_4px_4px_-2px_rgba(0,0,0,0.06)] dark:bg-gray-900 dark:shadow-[0_-1px_1px_rgba(255,255,255,0.12),0_0_0_1px_#525260,0_0_0_2px_rgba(0,0,0,0.16)] before:pointer-events-none before:absolute before:inset-0 before:size-full before:rounded-[inherit] before:bg-linear-to-b before:to-black/2 before:transition-opacity after:pointer-events-none after:absolute after:inset-0 after:size-full after:rounded-[inherit] after:bg-linear-to-b after:from-white/20 dark:after:from-white/6 after:transition-opacity hover:bg-gray-100 hover:shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_rgba(25,28,33,.28),0_4px_4px_-2px_rgba(0,0,0,0.07)] hover:before:opacity-0 hover:after:opacity-0 dark:hover:bg-(--color-gray-1100) dark:hover:shadow-[0_-1px_1px_rgba(255,255,255,0.2),0_0_0_1px_rgba(61,61,74,0.88),0_0_0_2px_rgba(0,0,0,0.2)] data-[state=checked]:bg-primary! data-[state=checked]:before:hidden data-[state=checked]:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24),0_0_0_1px_#6c47ff]! dark:data-[state=checked]:bg-primary! dark:data-[state=checked]:shadow-[inset_0_1px_1px_rgba(255,255,255,0),0_-1px_0_rgba(255,255,255,0.32),0_0_0_1px_#775cff,0_0_0_2px_rgba(0,0,0,0.16)]! data-[state=checked]:hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24),0_0_0_1px_#6038ff]! dark:data-[state=checked]:hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0),0_-1px_0_rgba(255,255,255,0.2),0_0_0_1px_#775cff,0_0_0_2px_rgba(0,0,0,0.16)]! data-[state=indeterminate]:bg-primary! data-[state=indeterminate]:before:hidden data-[state=indeterminate]:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24),0_0_0_1px_#6c47ff]! dark:data-[state=indeterminate]:bg-primary! dark:data-[state=indeterminate]:shadow-[inset_0_1px_1px_rgba(255,255,255,0),0_-1px_0_rgba(255,255,255,0.32),0_0_0_1px_#775cff,0_0_0_2px_rgba(0,0,0,0.16)]! data-[state=indeterminate]:hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24),0_0_0_1px_#6038ff]! dark:data-[state=indeterminate]:hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0),0_-1px_0_rgba(255,255,255,0.2),0_0_0_1px_#775cff,0_0_0_2px_rgba(0,0,0,0.16)]! aria-invalid:bg-red-100! aria-invalid:shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_#e02e2e,0_4px_4px_-2px_rgba(0,0,0,0.06)]! dark:aria-invalid:bg-(--color-red-1100)! dark:aria-invalid:shadow-[0_-1px_1px_rgba(255,255,255,0.12),0_0_0_1px_#f73d3d,0_0_0_2px_rgba(0,0,0,0.16)]! aria-invalid:hover:bg-red-200! dark:aria-invalid:hover:bg-(--color-red-1000)! disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-primary focus-visible:outline-2 focus-visible:outline-offset-3"
                      ></button>
                    </th>
                    <th
                      data-slot="table-head"
                      className="py-3 pr-5 pl-5 first:pl-6 group/sort cursor-pointer select-none"
                    >
                      <div className="flex items-center gap-1.5">
                        Invoice #
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="text-muted-foreground size-3 shrink-0 opacity-0 transition-opacity group-hover/sort:opacity-100"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m5 12 7-7 7 7"></path>
                          <path d="M12 19V5"></path>
                        </svg>
                      </div>
                    </th>
                    <th
                      data-slot="table-head"
                      className="py-3 pr-5 pl-5 first:pl-6 group/sort cursor-pointer select-none"
                    >
                      <div className="flex items-center gap-1.5">
                        Client
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="text-muted-foreground size-3 shrink-0 opacity-0 transition-opacity group-hover/sort:opacity-100"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m5 12 7-7 7 7"></path>
                          <path d="M12 19V5"></path>
                        </svg>
                      </div>
                    </th>
                    <th
                      data-slot="table-head"
                      className="py-3 pr-5 pl-5 first:pl-6 group/sort cursor-pointer select-none"
                    >
                      <div className="flex items-center gap-1.5">
                        Amount
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="text-muted-foreground size-3 shrink-0 opacity-0 transition-opacity group-hover/sort:opacity-100"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m5 12 7-7 7 7"></path>
                          <path d="M12 19V5"></path>
                        </svg>
                      </div>
                    </th>
                    <th
                      data-slot="table-head"
                      className="py-3 pr-5 pl-5 first:pl-6"
                    >
                      <div className="flex items-center gap-1.5">Status</div>
                    </th>
                    <th
                      data-slot="table-head"
                      className="py-3 pr-5 pl-5 first:pl-6 group/sort cursor-pointer select-none"
                    >
                      <div className="flex items-center gap-1.5">
                        Due Date
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="text-muted-foreground size-3 shrink-0 opacity-0 transition-opacity group-hover/sort:opacity-100"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m5 12 7-7 7 7"></path>
                          <path d="M12 19V5"></path>
                        </svg>
                      </div>
                    </th>
                    <th data-slot="table-head" className="py-3 pr-6 pl-5 w-12">
                      <div className="flex justify-end">
                        <button
                          type="button"
                          data-slot="dropdown-menu-trigger"
                          className="focus-visible:outline-primary flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border-0 bg-transparent transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 hover:bg-background hover:border data-[state=open]:bg-background data-[state=open]:border group-hover/row:opacity-100 focus-visible:opacity-100 data-[state=open]:opacity-100"
                          id="radix-_r_3n_"
                          aria-haspopup="menu"
                          aria-expanded="false"
                          data-state="closed"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            className="size-3.5"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                          </svg>
                        </button>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody data-slot="table-body" className={cn("")}>
                  <tr
                    data-slot="table-row"
                    className="group/row transition-colors [clip-path:inset(0_4px)] first:[clip-path:inset(0_4px_0_4px_round_8px_8px_0_0)] last:[clip-path:inset(0_4px_0_4px_round_0_0_8px_8px)] first:last:[clip-path:inset(0_4px_round_8px)] hover:bg-gray-700/4"
                  >
                    <td
                      data-slot="table-cell"
                      className="py-4 pl-5 first:pl-6 w-10"
                    >
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked="false"
                        data-state="unchecked"
                        value="on"
                        data-slot="checkbox"
                        className="relative top-0.5 inline-flex size-3.5 shrink-0 items-center justify-center rounded-[.25rem] transition text-white bg-white shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_rgba(25,28,33,.2),0_4px_4px_-2px_rgba(0,0,0,0.06)] dark:bg-gray-900 dark:shadow-[0_-1px_1px_rgba(255,255,255,0.12),0_0_0_1px_#525260,0_0_0_2px_rgba(0,0,0,0.16)] before:pointer-events-none before:absolute before:inset-0 before:size-full before:rounded-[inherit] before:bg-linear-to-b before:to-black/2 before:transition-opacity after:pointer-events-none after:absolute after:inset-0 after:size-full after:rounded-[inherit] after:bg-linear-to-b after:from-white/20 dark:after:from-white/6 after:transition-opacity hover:bg-gray-100 hover:shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_rgba(25,28,33,.28),0_4px_4px_-2px_rgba(0,0,0,0.07)] hover:before:opacity-0 hover:after:opacity-0 dark:hover:bg-(--color-gray-1100) dark:hover:shadow-[0_-1px_1px_rgba(255,255,255,0.2),0_0_0_1px_rgba(61,61,74,0.88),0_0_0_2px_rgba(0,0,0,0.2)] data-[state=checked]:bg-primary! data-[state=checked]:before:hidden data-[state=checked]:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24),0_0_0_1px_#6c47ff]! dark:data-[state=checked]:bg-primary! dark:data-[state=checked]:shadow-[inset_0_1px_1px_rgba(255,255,255,0),0_-1px_0_rgba(255,255,255,0.32),0_0_0_1px_#775cff,0_0_0_2px_rgba(0,0,0,0.16)]! data-[state=checked]:hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24),0_0_0_1px_#6038ff]! dark:data-[state=checked]:hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0),0_-1px_0_rgba(255,255,255,0.2),0_0_0_1px_#775cff,0_0_0_2px_rgba(0,0,0,0.16)]! data-[state=indeterminate]:bg-primary! data-[state=indeterminate]:before:hidden data-[state=indeterminate]:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24),0_0_0_1px_#6c47ff]! dark:data-[state=indeterminate]:bg-primary! dark:data-[state=indeterminate]:shadow-[inset_0_1px_1px_rgba(255,255,255,0),0_-1px_0_rgba(255,255,255,0.32),0_0_0_1px_#775cff,0_0_0_2px_rgba(0,0,0,0.16)]! data-[state=indeterminate]:hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24),0_0_0_1px_#6038ff]! dark:data-[state=indeterminate]:hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0),0_-1px_0_rgba(255,255,255,0.2),0_0_0_1px_#775cff,0_0_0_2px_rgba(0,0,0,0.16)]! aria-invalid:bg-red-100! aria-invalid:shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_#e02e2e,0_4px_4px_-2px_rgba(0,0,0,0.06)]! dark:aria-invalid:bg-(--color-red-1100)! dark:aria-invalid:shadow-[0_-1px_1px_rgba(255,255,255,0.12),0_0_0_1px_#f73d3d,0_0_0_2px_rgba(0,0,0,0.16)]! aria-invalid:hover:bg-red-200! dark:aria-invalid:hover:bg-(--color-red-1000)! disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-primary focus-visible:outline-2 focus-visible:outline-offset-3"
                      ></button>
                    </td>
                    <td
                      data-slot="table-cell"
                      className="px-5 py-4 first:pl-6 last:pr-6"
                    >
                      <div>
                        INV-002
                        <div className="text-muted-foreground text-xs">
                          Registration Fee
                        </div>
                      </div>
                    </td>
                    <td
                      data-slot="table-cell"
                      className="px-5 py-4 first:pl-6 last:pr-6"
                    >
                      Sara Ali
                    </td>
                    <td
                      data-slot="table-cell"
                      className="px-5 py-4 first:pl-6 last:pr-6"
                    >
                      Rs&nbsp;8,500
                    </td>
                    <td
                      data-slot="table-cell"
                      className="px-5 py-4 first:pl-6 last:pr-6"
                    >
                      <span
                        data-slot="simple-badge"
                        data-variant="amber"
                        data-size="default"
                        className="relative inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-[4px] px-1 py-0.5 font-medium transition-all text-[0.6875rem] leading-[0.875rem] tracking-[0.015em] ring-1 ring-inset overflow-hidden text-[var(--color-amber-700)] dark:text-[var(--color-amber-400)] from-black/[.02] bg-[var(--color-amber-700)]/4 ring-[var(--color-amber-700)]/16 dark:bg-[var(--color-amber-700)]/24"
                      >
                        <span className="flex items-center gap-1 px-0.5">
                          Pending
                        </span>
                      </span>
                    </td>
                    <td
                      data-slot="table-cell"
                      className="px-5 py-4 first:pl-6 last:pr-6"
                    >
                      20 Feb 2024
                    </td>
                    <td
                      data-slot="table-cell"
                      className="px-5 py-4 last:pr-6 w-12"
                    >
                      <div className="flex justify-end">
                        <button
                          type="button"
                          data-slot="dropdown-menu-trigger"
                          className="focus-visible:outline-primary flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border-0 bg-transparent transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 hover:bg-background hover:border data-[state=open]:bg-background data-[state=open]:border group-hover/row:opacity-100 focus-visible:opacity-100 data-[state=open]:opacity-100"
                          id="radix-_r_3q_"
                          aria-haspopup="menu"
                          aria-expanded="false"
                          data-state="closed"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            className="size-3.5"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr
                    data-slot="table-row"
                    className="group/row transition-colors [clip-path:inset(0_4px)] first:[clip-path:inset(0_4px_0_4px_round_8px_8px_0_0)] last:[clip-path:inset(0_4px_0_4px_round_0_0_8px_8px)] first:last:[clip-path:inset(0_4px_round_8px)] hover:bg-gray-700/4"
                  >
                    <td
                      data-slot="table-cell"
                      className="py-4 pl-5 first:pl-6 w-10"
                    >
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked="false"
                        data-state="unchecked"
                        value="on"
                        data-slot="checkbox"
                        className="relative top-0.5 inline-flex size-3.5 shrink-0 items-center justify-center rounded-[.25rem] transition text-white bg-white shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_rgba(25,28,33,.2),0_4px_4px_-2px_rgba(0,0,0,0.06)] dark:bg-gray-900 dark:shadow-[0_-1px_1px_rgba(255,255,255,0.12),0_0_0_1px_#525260,0_0_0_2px_rgba(0,0,0,0.16)] before:pointer-events-none before:absolute before:inset-0 before:size-full before:rounded-[inherit] before:bg-linear-to-b before:to-black/2 before:transition-opacity after:pointer-events-none after:absolute after:inset-0 after:size-full after:rounded-[inherit] after:bg-linear-to-b after:from-white/20 dark:after:from-white/6 after:transition-opacity hover:bg-gray-100 hover:shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_rgba(25,28,33,.28),0_4px_4px_-2px_rgba(0,0,0,0.07)] hover:before:opacity-0 hover:after:opacity-0 dark:hover:bg-(--color-gray-1100) dark:hover:shadow-[0_-1px_1px_rgba(255,255,255,0.2),0_0_0_1px_rgba(61,61,74,0.88),0_0_0_2px_rgba(0,0,0,0.2)] data-[state=checked]:bg-primary! data-[state=checked]:before:hidden data-[state=checked]:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24),0_0_0_1px_#6c47ff]! dark:data-[state=checked]:bg-primary! dark:data-[state=checked]:shadow-[inset_0_1px_1px_rgba(255,255,255,0),0_-1px_0_rgba(255,255,255,0.32),0_0_0_1px_#775cff,0_0_0_2px_rgba(0,0,0,0.16)]! data-[state=checked]:hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24),0_0_0_1px_#6038ff]! dark:data-[state=checked]:hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0),0_-1px_0_rgba(255,255,255,0.2),0_0_0_1px_#775cff,0_0_0_2px_rgba(0,0,0,0.16)]! data-[state=indeterminate]:bg-primary! data-[state=indeterminate]:before:hidden data-[state=indeterminate]:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24),0_0_0_1px_#6c47ff]! dark:data-[state=indeterminate]:bg-primary! dark:data-[state=indeterminate]:shadow-[inset_0_1px_1px_rgba(255,255,255,0),0_-1px_0_rgba(255,255,255,0.32),0_0_0_1px_#775cff,0_0_0_2px_rgba(0,0,0,0.16)]! data-[state=indeterminate]:hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24),0_0_0_1px_#6038ff]! dark:data-[state=indeterminate]:hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0),0_-1px_0_rgba(255,255,255,0.2),0_0_0_1px_#775cff,0_0_0_2px_rgba(0,0,0,0.16)]! aria-invalid:bg-red-100! aria-invalid:shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_#e02e2e,0_4px_4px_-2px_rgba(0,0,0,0.06)]! dark:aria-invalid:bg-(--color-red-1100)! dark:aria-invalid:shadow-[0_-1px_1px_rgba(255,255,255,0.12),0_0_0_1px_#f73d3d,0_0_0_2px_rgba(0,0,0,0.16)]! aria-invalid:hover:bg-red-200! dark:aria-invalid:hover:bg-(--color-red-1000)! disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-primary focus-visible:outline-2 focus-visible:outline-offset-3"
                      ></button>
                    </td>
                    <td
                      data-slot="table-cell"
                      className="px-5 py-4 first:pl-6 last:pr-6"
                    >
                      <div>
                        INV-003
                        <div className="text-muted-foreground text-xs">
                          Tuition Fee — Term 1
                        </div>
                      </div>
                    </td>
                    <td
                      data-slot="table-cell"
                      className="px-5 py-4 first:pl-6 last:pr-6"
                    >
                      Usman Raza
                    </td>
                    <td
                      data-slot="table-cell"
                      className="px-5 py-4 first:pl-6 last:pr-6"
                    >
                      Rs&nbsp;15,000
                    </td>
                    <td
                      data-slot="table-cell"
                      className="px-5 py-4 first:pl-6 last:pr-6"
                    >
                      <span
                        data-slot="simple-badge"
                        data-variant="red"
                        data-size="default"
                        className="relative inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-[4px] px-1 py-0.5 font-medium transition-all text-[0.6875rem] leading-[0.875rem] tracking-[0.015em] ring-1 ring-inset overflow-hidden text-negative dark:text-[var(--color-red-450)] from-black/[.02] bg-[var(--color-red-700)]/4 ring-[var(--color-red-700)]/16 dark:bg-[var(--color-red-700)]/24"
                      >
                        <span className="flex items-center gap-1 px-0.5">
                          Overdue
                        </span>
                      </span>
                    </td>
                    <td
                      data-slot="table-cell"
                      className="px-5 py-4 first:pl-6 last:pr-6"
                    >
                      30 Jan 2024
                    </td>
                    <td
                      data-slot="table-cell"
                      className="px-5 py-4 last:pr-6 w-12"
                    >
                      <div className="flex justify-end">
                        <button
                          type="button"
                          data-slot="dropdown-menu-trigger"
                          className="focus-visible:outline-primary flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border-0 bg-transparent transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 hover:bg-background hover:border data-[state=open]:bg-background data-[state=open]:border group-hover/row:opacity-100 focus-visible:opacity-100 data-[state=open]:opacity-100"
                          id="radix-_r_3s_"
                          aria-haspopup="menu"
                          aria-expanded="false"
                          data-state="closed"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            className="size-3.5"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr
                    data-slot="table-row"
                    className="group/row transition-colors [clip-path:inset(0_4px)] first:[clip-path:inset(0_4px_0_4px_round_8px_8px_0_0)] last:[clip-path:inset(0_4px_0_4px_round_0_0_8px_8px)] first:last:[clip-path:inset(0_4px_round_8px)] hover:bg-gray-700/4"
                  >
                    <td
                      data-slot="table-cell"
                      className="py-4 pl-5 first:pl-6 w-10"
                    >
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked="false"
                        data-state="unchecked"
                        value="on"
                        data-slot="checkbox"
                        className="relative top-0.5 inline-flex size-3.5 shrink-0 items-center justify-center rounded-[.25rem] transition text-white bg-white shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_rgba(25,28,33,.2),0_4px_4px_-2px_rgba(0,0,0,0.06)] dark:bg-gray-900 dark:shadow-[0_-1px_1px_rgba(255,255,255,0.12),0_0_0_1px_#525260,0_0_0_2px_rgba(0,0,0,0.16)] before:pointer-events-none before:absolute before:inset-0 before:size-full before:rounded-[inherit] before:bg-linear-to-b before:to-black/2 before:transition-opacity after:pointer-events-none after:absolute after:inset-0 after:size-full after:rounded-[inherit] after:bg-linear-to-b after:from-white/20 dark:after:from-white/6 after:transition-opacity hover:bg-gray-100 hover:shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_rgba(25,28,33,.28),0_4px_4px_-2px_rgba(0,0,0,0.07)] hover:before:opacity-0 hover:after:opacity-0 dark:hover:bg-(--color-gray-1100) dark:hover:shadow-[0_-1px_1px_rgba(255,255,255,0.2),0_0_0_1px_rgba(61,61,74,0.88),0_0_0_2px_rgba(0,0,0,0.2)] data-[state=checked]:bg-primary! data-[state=checked]:before:hidden data-[state=checked]:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24),0_0_0_1px_#6c47ff]! dark:data-[state=checked]:bg-primary! dark:data-[state=checked]:shadow-[inset_0_1px_1px_rgba(255,255,255,0),0_-1px_0_rgba(255,255,255,0.32),0_0_0_1px_#775cff,0_0_0_2px_rgba(0,0,0,0.16)]! data-[state=checked]:hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24),0_0_0_1px_#6038ff]! dark:data-[state=checked]:hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0),0_-1px_0_rgba(255,255,255,0.2),0_0_0_1px_#775cff,0_0_0_2px_rgba(0,0,0,0.16)]! data-[state=indeterminate]:bg-primary! data-[state=indeterminate]:before:hidden data-[state=indeterminate]:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24),0_0_0_1px_#6c47ff]! dark:data-[state=indeterminate]:bg-primary! dark:data-[state=indeterminate]:shadow-[inset_0_1px_1px_rgba(255,255,255,0),0_-1px_0_rgba(255,255,255,0.32),0_0_0_1px_#775cff,0_0_0_2px_rgba(0,0,0,0.16)]! data-[state=indeterminate]:hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24),0_0_0_1px_#6038ff]! dark:data-[state=indeterminate]:hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0),0_-1px_0_rgba(255,255,255,0.2),0_0_0_1px_#775cff,0_0_0_2px_rgba(0,0,0,0.16)]! aria-invalid:bg-red-100! aria-invalid:shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_#e02e2e,0_4px_4px_-2px_rgba(0,0,0,0.06)]! dark:aria-invalid:bg-(--color-red-1100)! dark:aria-invalid:shadow-[0_-1px_1px_rgba(255,255,255,0.12),0_0_0_1px_#f73d3d,0_0_0_2px_rgba(0,0,0,0.16)]! aria-invalid:hover:bg-red-200! dark:aria-invalid:hover:bg-(--color-red-1000)! disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-primary focus-visible:outline-2 focus-visible:outline-offset-3"
                      ></button>
                    </td>
                    <td
                      data-slot="table-cell"
                      className="px-5 py-4 first:pl-6 last:pr-6"
                    >
                      <div>
                        INV-006
                        <div className="text-muted-foreground text-xs">
                          Uniform &amp; Books
                        </div>
                      </div>
                    </td>
                    <td
                      data-slot="table-cell"
                      className="px-5 py-4 first:pl-6 last:pr-6"
                    >
                      Ayesha Noor
                    </td>
                    <td
                      data-slot="table-cell"
                      className="px-5 py-4 first:pl-6 last:pr-6"
                    >
                      Rs&nbsp;5,500
                    </td>
                    <td
                      data-slot="table-cell"
                      className="px-5 py-4 first:pl-6 last:pr-6"
                    >
                      <span
                        data-slot="simple-badge"
                        data-variant="amber"
                        data-size="default"
                        className="relative inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-[4px] px-1 py-0.5 font-medium transition-all text-[0.6875rem] leading-[0.875rem] tracking-[0.015em] ring-1 ring-inset overflow-hidden text-[var(--color-amber-700)] dark:text-[var(--color-amber-400)] from-black/[.02] bg-[var(--color-amber-700)]/4 ring-[var(--color-amber-700)]/16 dark:bg-[var(--color-amber-700)]/24"
                      >
                        <span className="flex items-center gap-1 px-0.5">
                          Pending
                        </span>
                      </span>
                    </td>
                    <td
                      data-slot="table-cell"
                      className="px-5 py-4 first:pl-6 last:pr-6"
                    >
                      01 Mar 2024
                    </td>
                    <td
                      data-slot="table-cell"
                      className="px-5 py-4 last:pr-6 w-12"
                    >
                      <div className="flex justify-end">
                        <button
                          type="button"
                          data-slot="dropdown-menu-trigger"
                          className="focus-visible:outline-primary flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border-0 bg-transparent transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 hover:bg-background hover:border data-[state=open]:bg-background data-[state=open]:border group-hover/row:opacity-100 focus-visible:opacity-100 data-[state=open]:opacity-100"
                          id="radix-_r_3u_"
                          aria-haspopup="menu"
                          aria-expanded="false"
                          data-state="closed"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            className="size-3.5"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr
                    data-slot="table-row"
                    className="group/row transition-colors [clip-path:inset(0_4px)] first:[clip-path:inset(0_4px_0_4px_round_8px_8px_0_0)] last:[clip-path:inset(0_4px_0_4px_round_0_0_8px_8px)] first:last:[clip-path:inset(0_4px_round_8px)] hover:bg-gray-700/4"
                  >
                    <td
                      data-slot="table-cell"
                      className="py-4 pl-5 first:pl-6 w-10"
                    >
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked="false"
                        data-state="unchecked"
                        value="on"
                        data-slot="checkbox"
                        className="relative top-0.5 inline-flex size-3.5 shrink-0 items-center justify-center rounded-[.25rem] transition text-white bg-white shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_rgba(25,28,33,.2),0_4px_4px_-2px_rgba(0,0,0,0.06)] dark:bg-gray-900 dark:shadow-[0_-1px_1px_rgba(255,255,255,0.12),0_0_0_1px_#525260,0_0_0_2px_rgba(0,0,0,0.16)] before:pointer-events-none before:absolute before:inset-0 before:size-full before:rounded-[inherit] before:bg-linear-to-b before:to-black/2 before:transition-opacity after:pointer-events-none after:absolute after:inset-0 after:size-full after:rounded-[inherit] after:bg-linear-to-b after:from-white/20 dark:after:from-white/6 after:transition-opacity hover:bg-gray-100 hover:shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_rgba(25,28,33,.28),0_4px_4px_-2px_rgba(0,0,0,0.07)] hover:before:opacity-0 hover:after:opacity-0 dark:hover:bg-(--color-gray-1100) dark:hover:shadow-[0_-1px_1px_rgba(255,255,255,0.2),0_0_0_1px_rgba(61,61,74,0.88),0_0_0_2px_rgba(0,0,0,0.2)] data-[state=checked]:bg-primary! data-[state=checked]:before:hidden data-[state=checked]:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24),0_0_0_1px_#6c47ff]! dark:data-[state=checked]:bg-primary! dark:data-[state=checked]:shadow-[inset_0_1px_1px_rgba(255,255,255,0),0_-1px_0_rgba(255,255,255,0.32),0_0_0_1px_#775cff,0_0_0_2px_rgba(0,0,0,0.16)]! data-[state=checked]:hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24),0_0_0_1px_#6038ff]! dark:data-[state=checked]:hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0),0_-1px_0_rgba(255,255,255,0.2),0_0_0_1px_#775cff,0_0_0_2px_rgba(0,0,0,0.16)]! data-[state=indeterminate]:bg-primary! data-[state=indeterminate]:before:hidden data-[state=indeterminate]:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24),0_0_0_1px_#6c47ff]! dark:data-[state=indeterminate]:bg-primary! dark:data-[state=indeterminate]:shadow-[inset_0_1px_1px_rgba(255,255,255,0),0_-1px_0_rgba(255,255,255,0.32),0_0_0_1px_#775cff,0_0_0_2px_rgba(0,0,0,0.16)]! data-[state=indeterminate]:hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24),0_0_0_1px_#6038ff]! dark:data-[state=indeterminate]:hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0),0_-1px_0_rgba(255,255,255,0.2),0_0_0_1px_#775cff,0_0_0_2px_rgba(0,0,0,0.16)]! aria-invalid:bg-red-100! aria-invalid:shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_#e02e2e,0_4px_4px_-2px_rgba(0,0,0,0.06)]! dark:aria-invalid:bg-(--color-red-1100)! dark:aria-invalid:shadow-[0_-1px_1px_rgba(255,255,255,0.12),0_0_0_1px_#f73d3d,0_0_0_2px_rgba(0,0,0,0.16)]! aria-invalid:hover:bg-red-200! dark:aria-invalid:hover:bg-(--color-red-1000)! disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-primary focus-visible:outline-2 focus-visible:outline-offset-3"
                      ></button>
                    </td>
                    <td
                      data-slot="table-cell"
                      className="px-5 py-4 first:pl-6 last:pr-6"
                    >
                      <div>
                        INV-007
                        <div className="text-muted-foreground text-xs">
                          Tuition Fee — Term 2
                        </div>
                      </div>
                    </td>
                    <td
                      data-slot="table-cell"
                      className="px-5 py-4 first:pl-6 last:pr-6"
                    >
                      Hassan Tariq
                    </td>
                    <td
                      data-slot="table-cell"
                      className="px-5 py-4 first:pl-6 last:pr-6"
                    >
                      Rs&nbsp;18,500
                    </td>
                    <td
                      data-slot="table-cell"
                      className="px-5 py-4 first:pl-6 last:pr-6"
                    >
                      <span
                        data-slot="simple-badge"
                        data-variant="red"
                        data-size="default"
                        className="relative inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-[4px] px-1 py-0.5 font-medium transition-all text-[0.6875rem] leading-[0.875rem] tracking-[0.015em] ring-1 ring-inset overflow-hidden text-negative dark:text-[var(--color-red-450)] from-black/[.02] bg-[var(--color-red-700)]/4 ring-[var(--color-red-700)]/16 dark:bg-[var(--color-red-700)]/24"
                      >
                        <span className="flex items-center gap-1 px-0.5">
                          Overdue
                        </span>
                      </span>
                    </td>
                    <td
                      data-slot="table-cell"
                      className="px-5 py-4 first:pl-6 last:pr-6"
                    >
                      25 Jan 2024
                    </td>
                    <td
                      data-slot="table-cell"
                      className="px-5 py-4 last:pr-6 w-12"
                    >
                      <div className="flex justify-end">
                        <button
                          type="button"
                          data-slot="dropdown-menu-trigger"
                          className="focus-visible:outline-primary flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border-0 bg-transparent transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 hover:bg-background hover:border data-[state=open]:bg-background data-[state=open]:border group-hover/row:opacity-100 focus-visible:opacity-100 data-[state=open]:opacity-100"
                          id="radix-_r_40_"
                          aria-haspopup="menu"
                          aria-expanded="false"
                          data-state="closed"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            className="size-3.5"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr
                    data-slot="table-row"
                    className="group/row transition-colors [clip-path:inset(0_4px)] first:[clip-path:inset(0_4px_0_4px_round_8px_8px_0_0)] last:[clip-path:inset(0_4px_0_4px_round_0_0_8px_8px)] first:last:[clip-path:inset(0_4px_round_8px)] hover:bg-gray-700/4"
                  >
                    <td
                      data-slot="table-cell"
                      className="py-4 pl-5 first:pl-6 w-10"
                    >
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked="false"
                        data-state="unchecked"
                        value="on"
                        data-slot="checkbox"
                        className="relative top-0.5 inline-flex size-3.5 shrink-0 items-center justify-center rounded-[.25rem] transition text-white bg-white shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_rgba(25,28,33,.2),0_4px_4px_-2px_rgba(0,0,0,0.06)] dark:bg-gray-900 dark:shadow-[0_-1px_1px_rgba(255,255,255,0.12),0_0_0_1px_#525260,0_0_0_2px_rgba(0,0,0,0.16)] before:pointer-events-none before:absolute before:inset-0 before:size-full before:rounded-[inherit] before:bg-linear-to-b before:to-black/2 before:transition-opacity after:pointer-events-none after:absolute after:inset-0 after:size-full after:rounded-[inherit] after:bg-linear-to-b after:from-white/20 dark:after:from-white/6 after:transition-opacity hover:bg-gray-100 hover:shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_rgba(25,28,33,.28),0_4px_4px_-2px_rgba(0,0,0,0.07)] hover:before:opacity-0 hover:after:opacity-0 dark:hover:bg-(--color-gray-1100) dark:hover:shadow-[0_-1px_1px_rgba(255,255,255,0.2),0_0_0_1px_rgba(61,61,74,0.88),0_0_0_2px_rgba(0,0,0,0.2)] data-[state=checked]:bg-primary! data-[state=checked]:before:hidden data-[state=checked]:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24),0_0_0_1px_#6c47ff]! dark:data-[state=checked]:bg-primary! dark:data-[state=checked]:shadow-[inset_0_1px_1px_rgba(255,255,255,0),0_-1px_0_rgba(255,255,255,0.32),0_0_0_1px_#775cff,0_0_0_2px_rgba(0,0,0,0.16)]! data-[state=checked]:hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24),0_0_0_1px_#6038ff]! dark:data-[state=checked]:hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0),0_-1px_0_rgba(255,255,255,0.2),0_0_0_1px_#775cff,0_0_0_2px_rgba(0,0,0,0.16)]! data-[state=indeterminate]:bg-primary! data-[state=indeterminate]:before:hidden data-[state=indeterminate]:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24),0_0_0_1px_#6c47ff]! dark:data-[state=indeterminate]:bg-primary! dark:data-[state=indeterminate]:shadow-[inset_0_1px_1px_rgba(255,255,255,0),0_-1px_0_rgba(255,255,255,0.32),0_0_0_1px_#775cff,0_0_0_2px_rgba(0,0,0,0.16)]! data-[state=indeterminate]:hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24),0_0_0_1px_#6038ff]! dark:data-[state=indeterminate]:hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0),0_-1px_0_rgba(255,255,255,0.2),0_0_0_1px_#775cff,0_0_0_2px_rgba(0,0,0,0.16)]! aria-invalid:bg-red-100! aria-invalid:shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_#e02e2e,0_4px_4px_-2px_rgba(0,0,0,0.06)]! dark:aria-invalid:bg-(--color-red-1100)! dark:aria-invalid:shadow-[0_-1px_1px_rgba(255,255,255,0.12),0_0_0_1px_#f73d3d,0_0_0_2px_rgba(0,0,0,0.16)]! aria-invalid:hover:bg-red-200! dark:aria-invalid:hover:bg-(--color-red-1000)! disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-primary focus-visible:outline-2 focus-visible:outline-offset-3"
                      ></button>
                    </td>
                    <td
                      data-slot="table-cell"
                      className="px-5 py-4 first:pl-6 last:pr-6"
                    >
                      <div>
                        INV-010
                        <div className="text-muted-foreground text-xs">
                          Lab Fee — Class 10
                        </div>
                      </div>
                    </td>
                    <td
                      data-slot="table-cell"
                      className="px-5 py-4 first:pl-6 last:pr-6"
                    >
                      Nadia Hussain
                    </td>
                    <td
                      data-slot="table-cell"
                      className="px-5 py-4 first:pl-6 last:pr-6"
                    >
                      Rs&nbsp;4,800
                    </td>
                    <td
                      data-slot="table-cell"
                      className="px-5 py-4 first:pl-6 last:pr-6"
                    >
                      <span
                        data-slot="simple-badge"
                        data-variant="amber"
                        data-size="default"
                        className="relative inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-[4px] px-1 py-0.5 font-medium transition-all text-[0.6875rem] leading-[0.875rem] tracking-[0.015em] ring-1 ring-inset overflow-hidden text-[var(--color-amber-700)] dark:text-[var(--color-amber-400)] from-black/[.02] bg-[var(--color-amber-700)]/4 ring-[var(--color-amber-700)]/16 dark:bg-[var(--color-amber-700)]/24"
                      >
                        <span className="flex items-center gap-1 px-0.5">
                          Pending
                        </span>
                      </span>
                    </td>
                    <td
                      data-slot="table-cell"
                      className="px-5 py-4 first:pl-6 last:pr-6"
                    >
                      20 Mar 2024
                    </td>
                    <td
                      data-slot="table-cell"
                      className="px-5 py-4 last:pr-6 w-12"
                    >
                      <div className="flex justify-end">
                        <button
                          type="button"
                          data-slot="dropdown-menu-trigger"
                          className="focus-visible:outline-primary flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border-0 bg-transparent transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 hover:bg-background hover:border data-[state=open]:bg-background data-[state=open]:border group-hover/row:opacity-100 focus-visible:opacity-100 data-[state=open]:opacity-100"
                          id="radix-_r_42_"
                          aria-haspopup="menu"
                          aria-expanded="false"
                          data-state="closed"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            className="size-3.5"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <footer
              data-slot="table-foot"
              className="text-muted-foreground flex flex-col text-xs sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="mx-1 px-5 py-3 sm:py-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    <span>1–5</span>
                    <span>of</span>
                    <span>5</span>
                  </div>
                  <div className="flex items-center">
                    <div
                      data-orientation="vertical"
                      role="none"
                      data-slot="separator"
                      className="bg-border shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch mx-3 hidden sm:block"
                    ></div>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        data-slot="pagination-button"
                        className="focus-visible:outline-primary border-border flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 border-0 bg-transparent disabled:opacity-40"
                      >
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m15 18-6-6 6-6"></path>
                        </svg>
                      </button>
                      <span>1 / 2</span>
                      <button
                        type="button"
                        data-slot="pagination-button"
                        className="focus-visible:outline-primary border-border flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 border-0 bg-transparent disabled:opacity-40"
                      >
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div
                      data-orientation="vertical"
                      role="none"
                      data-slot="separator"
                      className="bg-border shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch mx-3 hidden sm:block"
                    ></div>
                    <span className="sm:hidden">Show</span>
                    <span className="hidden sm:block">Results per page</span>
                    <button
                      type="button"
                      role="combobox"
                      aria-controls="radix-_r_3p_"
                      aria-expanded="false"
                      aria-autocomplete="none"
                      dir="ltr"
                      data-state="closed"
                      data-slot="select-trigger"
                      data-size="sm"
                      className="py-0.75 group relative inline-flex items-center px-1 min-w-fit overflow-hidden rounded-[0.25rem] text-foreground text-sm font-medium data-placeholder:text-muted-foreground data-placeholder:font-normal transition-all disabled:cursor-not-allowed disabled:opacity-40 aria-invalid:outline-destructive aria-invalid:outline-2 aria-invalid:outline-offset-1 h-5 bg-secondary shadow-[inset_0_1px_0.5px_0_rgba(255,255,255,0.05),0_2px_2px_-1px_rgba(0,0,0,0.06),0_4px_4px_-2px_rgba(0,0,0,0.04),0_0_0_1px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_0.5px_0_rgba(255,255,255,0.05),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24),0_0_0_1px_rgba(0,0,0,0.1)] before:pointer-events-none before:absolute before:inset-0 before:bg-linear-to-b before:from-black/0 before:to-black/2 before:from-30% before:transition-opacity dark:before:to-black/12 cursor-pointer hover:before:opacity-0 hover:bg-gray-50 dark:hover:bg-secondary focus-visible:outline-primary! focus-visible:outline-2! focus-visible:outline-offset-1! ml-2"
                    >
                      <div className="flex w-full items-center justify-between">
                        <span className="px-1.25">
                          <span
                            data-slot="select-value"
                            style={{ pointerEvents: "none" }}
                          >
                            10
                          </span>
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-chevron-down text-muted-foreground pointer-events-none size-4 transition-transform duration-150 group-data-[state=open]:rotate-180"
                          aria-hidden="true"
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="border-border mx-1 border-t px-5 py-3 sm:border-0 sm:py-4">
                <div className="flex items-center justify-between gap-3 sm:justify-normal">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      data-slot="pagination-button"
                      className="focus-visible:outline-primary border-border flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 border-0 bg-transparent disabled:opacity-40"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m17 18-6-6 6-6"></path>
                        <path d="M7 6v12"></path>
                      </svg>
                    </button>
                    <button
                      type="button"
                      data-slot="pagination-button"
                      className="bg-background focus-visible:outline-primary border-border flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 disabled:opacity-40"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m15 18-6-6 6-6"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">1/1</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      data-slot="pagination-button"
                      className="bg-background focus-visible:outline-primary border-border flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 disabled:opacity-40"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </button>
                    <button
                      type="button"
                      data-slot="pagination-button"
                      className="focus-visible:outline-primary border-border flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 border-0 bg-transparent disabled:opacity-40"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m7 18 6-6-6-6"></path>
                        <path d="M17 6v12"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
