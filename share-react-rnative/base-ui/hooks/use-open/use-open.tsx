import { useState } from 'react';

export function useOpen() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen((v) => !v)

  return {
    isOpen, setIsOpen, toggleOpen
  }
}
