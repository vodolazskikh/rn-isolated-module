import React, { ReactNode } from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


export type ReactQueryProviderProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

const queryClient = new QueryClient()

export function ReactQueryProvider({ children }: ReactQueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
