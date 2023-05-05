import React from 'react';
import { useIsReactNative } from './use-is-react-native';

export const BasicUseIsReactNative = () => {
  const isReactNative = useIsReactNative();

  return (
    <>
      <h1>{isReactNative ? "Я в нейтиве" : 'Я в вебе'}</h1>
    </>
  );
};
