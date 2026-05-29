'use client";';

export default function Table1Page() {
  return (
    <section
      className="[--table-border-width:var(--spacing-px)] [--table-padding:--spacing(1)] [--table-cell-bg:var(--color-main)] [--table-cell-bg-hover:var(--color-gray-700)]/4 dark:[--table-cell-bg-hover:var(--color-gray-700)]/7 [--table-body-rounded:var(--radius-xl)] [--table-mask-width:--spacing(15)] [--table-header-px:var(--table-cell-px)] [--table-header-pt:--spacing(3)] [--table-header-pb:calc(var(--table-header-pt)-var(--table-border-width))] [--table-header-leading:--spacing(4)] [--table-head-height:calc(var(--table-header-pt)+var(--table-header-pb)+var(--table-header-leading))] relative isolate flex flex-col overflow-hidden rounded-2xl p-(--table-padding) [--table-bg:var(--color-gray-50)] dark:[--table-bg:var(--color-gray-1500)] [--table-cell-px:--spacing(5)] [--table-cell-py:--spacing(4)] [--table-selection-cell-gap:--spacing(4)] dark:bg-gray-1500 flex min-h-0 flex-col bg-gray-50"
      data-slot="table-card"
    >
      <div
        data-slot="table-card-header-mask"
        className="group/table-card relative isolate order-1 -mt-(--table-padding) flex min-h-0 flex-1 flex-col"
      >
        <div
          data-slot="table-card-body-bg"
          className="after:absolute after:inset-0 after:top-(--table-head-height) after:bg-(--table-cell-bg) after:-z-1 after:rounded-(--table-body-rounded) flex min-h-0 flex-1 flex-col"
        >
          <div
            data-slot="table-card-body-border"
            className="relative flex min-h-0 flex-1 flex-col [--table-scroll-bg:var(--table-cell-bg,var(--color-main))] before:pointer-events-none before:absolute before:inset-0 before:top-(--table-head-height) before:z-1 before:rounded-(--table-body-rounded) before:ring-[calc(var(--table-padding)+(--spacing(0.5)))] before:ring-(--table-bg) after:pointer-events-none after:absolute after:inset-0 after:top-(--table-head-height) after:z-10 after:rounded-(--table-body-rounded) after:ring-umbra/4 after:ring-1 after:dark:ring-black/20 after:shadow-[0_1px_2px_0_rgba(25,28,33,0.06),0_0_2px_0_theme(--color-black/0.08)] dark:after:shadow-[inset_0_0_1px_1px_theme(--color-white/0.01),0_1px_3px_0_theme(--color-black/0.4),0_0_3px_0_theme(--color-black/0.2)]"
          >
            <div
              role="presentation"
              data-slot="table-scroll-area"
              className="peer/scroll-area group/scroll-area relative flex min-h-0 w-full flex-1 items-stretch [--table-scroll-mask-width:var(--table-mask-width,--spacing(15))] [--table-scroll-bg:var(--table-cell-bg,var(--color-main))] has-data-[slot=empty]:@container"
              style={{ position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px" } as React.CSSProperties}
            >
              <div
                role="presentation"
                data-id="base-ui-_r_26i_-viewport"
                tabIndex={-1}
                className="w-full group-data-has-overflow-x/scroll-area:overscroll-x-none before:[--scroll-area-overflow-x-start:inherit] before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:z-2 before:top-(--table-head-height,0px) before:rounded-(--table-body-rounded,0px) before:bg-linear-to-r before:from-(--table-scroll-bg) before:to-transparent before:w-[min(var(--table-scroll-mask-width),var(--scroll-area-overflow-x-start,0px))] after:[--scroll-area-overflow-x-end:inherit] after:pointer-events-none after:absolute after:right-0 after:bottom-0 after:z-2 after:top-(--table-head-height,0px) after:rounded-(--table-body-rounded,0px) after:bg-linear-to-l after:from-(--table-scroll-bg) after:to-transparent after:w-[min(var(--table-scroll-mask-width),var(--scroll-area-overflow-x-end,var(--table-scroll-mask-width)))] [[data-has-overflow-x]_&amp;_tr:last-child_td]:pb-[calc(var(--table-cell-px)+(--spacing(3)))]! base-ui-disable-scrollbar"
                style={{ overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px" } as React.CSSProperties}
              >
                <div
                  data-slot="table-scroll-area-head-mask-start"
                  className="pointer-events-none absolute top-0 left-0 z-2 h-(--table-head-height) w-[min(var(--table-scroll-mask-width),var(--scroll-area-overflow-x-start,0px))] bg-linear-to-r from-(--table-bg) to-transparent [--scroll-area-overflow-x-start:inherit]"
                ></div>
                <div
                  data-slot="table-scroll-area-head-mask-end"
                  className="pointer-events-none absolute top-0 right-0 z-2 h-(--table-head-height) w-[min(var(--table-scroll-mask-width),var(--scroll-area-overflow-x-end,var(--table-scroll-mask-width)))] bg-linear-to-l from-(--table-bg) to-transparent [--scroll-area-overflow-x-end:inherit]"
                ></div>
                <div
                  data-slot="table-scroll-area-body-mask-bottom"
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-2 h-[min(var(--table-scroll-mask-width),var(--scroll-area-overflow-y-end,var(--table-scroll-mask-width)))] rounded-(--table-body-rounded,0px) bg-linear-to-t from-(--table-scroll-bg) to-transparent [--scroll-area-overflow-y-end:inherit]"
                ></div>
                <div
                  role="presentation"
                  data-slot="table-scroll-area-content"
                  className="isolate pb-(--table-card-banner-height,0px)"
                  style={{ minWidth: "fit-content" }}
                >
                  <template></template>
                  <span data-focus-scope-start="true" hidden></span>
                  <table
                    data-slot="table"
                    className="group/table caption-bottom border-separate border-spacing-0 whitespace-nowrap [--table-cell-px:--spacing(5)] [--table-cell-py:--spacing(4)] [--table-selection-cell-gap:--spacing(4)] w-full"
                    data-rac=""
                    aria-label="Organization plans"
                    id="react-aria7271586640-_r_26j_"
                    role="grid"
                    aria-describedby=""
                    data-collection="react-aria7271586640-_r_26k_"
                  >
                    <thead
                      data-slot="table-header"
                      role="rowgroup"
                      className="text-label-3 dark:bg-gray-1500 bg-gray-50 [&amp;&gt;th:first-child:has(label)]:hidden"
                      data-rac=""
                    >
                      <tr role="row">
                        <th
                          data-slot="table-head"
                          data-collection="react-aria7271586640-_r_26k_"
                          data-key="plan"
                          id="react-aria7271586640-_r_26j_-plan"
                          role="columnheader"
                          aria-colindex="1"
                          data-react-aria-pressable="true"
                          className="text-label-3 h-(--table-head-height) px-(--table-header-px) text-left align-middle transition-colors data-focus-visible:outline-focus-[8px_calc(var(--table-header-px)/2)] data-focus-visible:text-primary data-hovered:text-primary [[data-column-type=selection]+&amp;[data-focus-visible]]:outline-focus-[8px_calc(var(--table-header-px)/2)_8px_calc(var(--table-selection-cell-gap)/-2)] [[data-column-type=selection]+&amp;]:pl-0 text-secondary"
                          data-rac=""
                        >
                          Plan
                        </th>
                        <th
                          data-slot="table-head"
                          data-collection="react-aria7271586640-_r_26k_"
                          data-key="seats"
                          id="react-aria7271586640-_r_26j_-seats"
                          role="columnheader"
                          aria-colindex="2"
                          data-react-aria-pressable="true"
                          className="text-label-3 h-(--table-head-height) px-(--table-header-px) text-left align-middle transition-colors data-focus-visible:outline-focus-[8px_calc(var(--table-header-px)/2)] data-focus-visible:text-primary data-hovered:text-primary [[data-column-type=selection]+&amp;[data-focus-visible]]:outline-focus-[8px_calc(var(--table-header-px)/2)_8px_calc(var(--table-selection-cell-gap)/-2)] [[data-column-type=selection]+&amp;]:pl-0 text-secondary"
                          data-rac=""
                        >
                          Seats
                        </th>
                      </tr>
                    </thead>
                    <tbody
                      data-slot="table-body"
                      className="[&amp;&gt;[data-slot=table-row]:last-child:not([data-selected])&gt;[data-slot=table-cell]]:border-0 **:data-[slot=empty]:sticky **:data-[slot=empty]:left-0 **:data-[slot=empty]:max-w-[100cqw]"
                      data-rac=""
                      role="rowgroup"
                    >
                      <tr
                        data-slot="table-row"
                        className="group/table-row transition-colors [&amp;&gt;td]:border-b data-href:cursor-pointer data-focus-visible:outline-focus-[3px] has-[:is(button,label)[data-hovered]]:data-hovered:[&amp;:not([data-selected])]:bg-transparent data-hovered:[&amp;:not([data-selected])]:bg-(--table-cell-bg-hover) data-selected:bg-gray-700/8 dark:data-selected:bg-gray-700/12 h-[calc(var(--table-cell-py)*2+2.25rem)]"
                        data-rac=""
                        role="row"
                        data-collection="react-aria7271586640-_r_26k_"
                        data-key="cplan_39X8AHAKmpjqeiKJXWMjNf0Efsy"
                        data-react-aria-pressable="true"
                        id="react-aria7271586640-_r_26o_"
                        data-href="/apps/app_2wV8ZaNT8i2UTrSQ8tfUejKJYPi/instances/ins_2wV8ZjGGo8M4uVRA5gTo5OaukKG/billing/plans/cplan_39X8AHAKmpjqeiKJXWMjNf0Efsy"
                        aria-labelledby="react-aria7271586640-_r_26j_-cplan_39X8AHAKmpjqeiKJXWMjNf0Efsy-plan"
                        data-level="1"
                        style={{ "--table-row-level": "1" } as React.CSSProperties}
                      >
                        <td
                          data-slot="table-cell"
                          className="data-focus-visible:outline-focus-4 px-(--table-cell-px) py-(--table-cell-py) align-middle first:group-first/table-row:rounded-tl-[inherit] first:group-last/table-row:rounded-bl-[inherit] last:group-first/table-row:rounded-tr-[inherit] last:group-last/table-row:rounded-br-[inherit] [[data-cell-type=selection]+&amp;[data-focus-visible]]:outline-focus-[4px_4px_4px_calc(var(--table-cell-px)/-2)] [[data-cell-type=selection]+&amp;]:pl-0"
                          data-rac=""
                          data-collection="react-aria7271586640-_r_26k_"
                          data-key="cplan_39X8AHAKmpjqeiKJXWMjNf0Efsy:plan"
                          id="react-aria7271586640-_r_26j_-cplan_39X8AHAKmpjqeiKJXWMjNf0Efsy-plan"
                          role="rowheader"
                          data-column-index="0"
                          data-level="1"
                        >
                          <div className="font-book flex flex-col gap-1">
                            <div className="flex flex-row gap-2">Free</div>
                          </div>
                        </td>
                        <td
                          data-slot="table-cell"
                          className="data-focus-visible:outline-focus-4 px-(--table-cell-px) py-(--table-cell-py) align-middle first:group-first/table-row:rounded-tl-[inherit] first:group-last/table-row:rounded-bl-[inherit] last:group-first/table-row:rounded-tr-[inherit] last:group-last/table-row:rounded-br-[inherit] [[data-cell-type=selection]+&amp;[data-focus-visible]]:outline-focus-[4px_4px_4px_calc(var(--table-cell-px)/-2)] [[data-cell-type=selection]+&amp;]:pl-0 text-secondary"
                          data-rac=""
                          data-collection="react-aria7271586640-_r_26k_"
                          data-key="cplan_39X8AHAKmpjqeiKJXWMjNf0Efsy:seats"
                          id="react-aria7271586640-_r_26s_"
                          role="gridcell"
                          data-column-index="1"
                          data-level="1"
                        >
                          <span className="block">–</span>
                        </td>
                      </tr>
                      <tr
                        data-slot="table-row"
                        className="group/table-row transition-colors [&amp;&gt;td]:border-b data-href:cursor-pointer data-focus-visible:outline-focus-[3px] has-[:is(button,label)[data-hovered]]:data-hovered:[&amp;:not([data-selected])]:bg-transparent data-hovered:[&amp;:not([data-selected])]:bg-(--table-cell-bg-hover) data-selected:bg-gray-700/8 dark:data-selected:bg-gray-700/12 h-[calc(var(--table-cell-py)*2+2.25rem)]"
                        data-rac=""
                        role="row"
                        tabIndex={-1}
                        data-collection="react-aria7271586640-_r_26k_"
                        data-key="cplan_3CnqrTEW5AbSD6errd87db2kJBM"
                        data-react-aria-pressable="true"
                        id="react-aria7271586640-_r_26t_"
                        data-href="/apps/app_2wV8ZaNT8i2UTrSQ8tfUejKJYPi/instances/ins_2wV8ZjGGo8M4uVRA5gTo5OaukKG/billing/plans/cplan_3CnqrTEW5AbSD6errd87db2kJBM"
                        aria-labelledby="react-aria7271586640-_r_26j_-cplan_3CnqrTEW5AbSD6errd87db2kJBM-plan"
                        data-level="1"
                        style={{ "--table-row-level": "1" } as React.CSSProperties}
                      >
                        <td
                          data-slot="table-cell"
                          className="data-focus-visible:outline-focus-4 px-(--table-cell-px) py-(--table-cell-py) align-middle first:group-first/table-row:rounded-tl-[inherit] first:group-last/table-row:rounded-bl-[inherit] last:group-first/table-row:rounded-tr-[inherit] last:group-last/table-row:rounded-br-[inherit] [[data-cell-type=selection]+&amp;[data-focus-visible]]:outline-focus-[4px_4px_4px_calc(var(--table-cell-px)/-2)] [[data-cell-type=selection]+&amp;]:pl-0"
                          data-rac=""
                          data-collection="react-aria7271586640-_r_26k_"
                          data-key="cplan_3CnqrTEW5AbSD6errd87db2kJBM:plan"
                          id="react-aria7271586640-_r_26j_-cplan_3CnqrTEW5AbSD6errd87db2kJBM-plan"
                          role="rowheader"
                          data-column-index="0"
                          data-level="1"
                        >
                          <div className="font-book flex flex-col gap-1">
                            <div className="flex flex-row gap-2">nam</div>
                          </div>
                        </td>
                        <td
                          data-slot="table-cell"
                          className="data-focus-visible:outline-focus-4 px-(--table-cell-px) py-(--table-cell-py) align-middle first:group-first/table-row:rounded-tl-[inherit] first:group-last/table-row:rounded-bl-[inherit] last:group-first/table-row:rounded-tr-[inherit] last:group-last/table-row:rounded-br-[inherit] [[data-cell-type=selection]+&amp;[data-focus-visible]]:outline-focus-[4px_4px_4px_calc(var(--table-cell-px)/-2)] [[data-cell-type=selection]+&amp;]:pl-0 text-secondary"
                          data-rac=""
                          data-collection="react-aria7271586640-_r_26k_"
                          data-key="cplan_3CnqrTEW5AbSD6errd87db2kJBM:seats"
                          id="react-aria7271586640-_r_271_"
                          role="gridcell"
                          data-column-index="1"
                          data-level="1"
                        >
                          <span className="block">–</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <span data-focus-scope-end="true" hidden></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
