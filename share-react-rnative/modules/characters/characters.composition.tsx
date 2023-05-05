import React from 'react';
import { Characters } from './characters';
import { ReactQueryProvider } from '@vodolazskikh/share-react-rnative.query.react-query-provider';

export const BasicCharacters = () => (
  <ReactQueryProvider>
    <Characters />
  </ReactQueryProvider>
);
