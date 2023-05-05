import React from 'react';
import { useOpen } from './use-open';

export const BasicUseOpen = () => {
  const { isOpen, toggleOpen } = useOpen();

  return (
    <>
      <h1> {isOpen ? 'тру' : 'фолс'}</h1>
      <button onClick={toggleOpen}>туггл</button>
    </>
  );
};
