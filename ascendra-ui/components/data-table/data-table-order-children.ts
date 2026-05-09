import * as React from 'react';

export function orderChildrenByColumn(
  columns: { key: PropertyKey }[],
  children: React.ReactNode,
): React.ReactElement[] {
  const columnChildMap = new Map<string, React.ReactElement>();
  const nonColumnChildren: React.ReactElement[] = [];

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      const column = (child.props as { column?: string }).column;
      if (column) {
        columnChildMap.set(column, child);
      } else {
        nonColumnChildren.push(child);
      }
    }
  });

  const orderedColumnChildren = columns
    .map((col) => columnChildMap.get(String(col.key)))
    .filter((c): c is React.ReactElement => c !== undefined);

  return [...nonColumnChildren, ...orderedColumnChildren];
}
