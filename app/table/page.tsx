"use client";

export default function Page() {
  return (
    <div className="p-10">
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: "auto 1fr" }}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            data-slot="table-container"
            data-table-container="true"
            className="bg-muted flex flex-col rounded-xl py-1"
          >
            <div
              data-slot="table-wrapper"
              className="-mb-px overflow-x-auto pb-px"
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
                  </tr>
                </thead>
                <tbody
                  data-slot="table-body"
                  className="relative isolate before:bg-background before:absolute before:inset-0 before:-z-10 before:mx-1 before:rounded-lg before:ring-1 before:ring-(--color-umbra)/4 dark:before:ring-black/20 before:shadow-[0_1px_2px_0_rgba(25,28,33,0.06),0_0_2px_0_rgba(0,0,0,0.08)] dark:before:shadow-[inset_0_0_1px_1px_rgba(255,255,255,0.01),0_1px_3px_0_rgba(0,0,0,2),0_0_3px_0_rgba(0,0,0,0.2) [&amp;&gt;tr:not(:last-child)&gt;td]:border-border [&amp;&gt;tr:not(:last-child)&gt;td]:border-b"
                >
                  <tr
                    data-slot="table-row"
                    className="group/row transition-colors [clip-path:inset(0_4px)] first:[clip-path:inset(0_4px_0_4px_round_8px_8px_0_0)] last:[clip-path:inset(0_4px_0_4px_round_0_0_8px_8px)] first:last:[clip-path:inset(0_4px_round_8px)] hover:bg-gray-700/4"
                  >
                    <td
                      data-slot="table-cell"
                      className="px-5 py-4 first:pl-6 last:pr-6"
                    >
                      INV-001
                    </td>
                    <td
                      data-slot="table-cell"
                      className="px-5 py-4 first:pl-6 last:pr-6"
                    >
                      Ahmed Khan
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
                    <span>1–8</span>
                    <span>of</span>
                    <span>8</span>
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
                      aria-controls="radix-_r_l_"
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
                      disabled
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
                      disabled
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
                      disabled
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
                      disabled
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
