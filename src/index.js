import React, { useEffect } from 'react';

export function useDebouncedEffect(callback, delay,deps=[]) {

  useEffect(
    () => {
      const handler = setTimeout(() => {
        callback()
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [callback,delay,...deps]
  );
}

export default useDebouncedEffect;