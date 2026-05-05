import * as React from 'react';

export function filterChildrenByColumn(
  columns: { key: PropertyKey; active?: boolean }[],
  children: React.ReactNode,
): React.ReactElement[] {
  const activeKeys = columns
    .filter((col) => col.active !== false)
    .map((col) => String(col.key));
  const childMap = new Map<string, React.ReactElement>();
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      const column = (child.props as { column?: string }).column;
      if (column) childMap.set(column, child);
    }
  });
  return activeKeys
    .map((key) => childMap.get(key))
    .filter((c): c is React.ReactElement => c !== undefined);
}
