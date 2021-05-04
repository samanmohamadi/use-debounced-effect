import { useEffect, useRef } from 'react';

export function useDebouncedEffect(callback, delay, deps = []) {
  const data = useRef({ firstTime : true });
  useEffect(() => {
    const { firstTime, clearFunc } = data.current;

    if (firstTime) {
      data.current.firstTime = false;
      return;
    }

    const handler = setTimeout(() => {
      if (clearFunc && typeof clearFunc === 'function') {
        clearFunc();
      }
      data.current.clearFunc = callback();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  },
    [delay, ...deps],
  );
}

export default useDebouncedEffect;