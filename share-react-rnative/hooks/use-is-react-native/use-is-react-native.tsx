import React, { useState } from 'react';

export function useIsReactNative() {
  return typeof navigator !== 'undefined' && navigator.product === 'ReactNative'
}
