import * as React from 'react';

export function orderChildrenByColumn(
  columns: { key: PropertyKey }[],
  children: React.ReactNode,
): React.ReactElement[] {
  const childMap = new Map<string, React.ReactElement>();
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      const column = (child.props as { column?: string }).column;
      if (column) childMap.set(column, child);
    }
  });
  return columns
    .map((col) => childMap.get(String(col.key)))
    .filter((c): c is React.ReactElement => c !== undefined);
}
