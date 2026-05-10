'use client';

import * as React from 'react';

export interface DataTableActionContextValue {
  onAction?: (id: string) => void;
}

export const DataTableActionContext = React.createContext<DataTableActionContextValue>({});
