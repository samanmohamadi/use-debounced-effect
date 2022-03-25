import { useEffect, useRef } from 'react';

const DEFAULT_CONFIG = {
  delay: 0,
  ignoreInitialCall: true,
};
export function useDebouncedEffect(callback, config, deps = []) {
  let currentConfig;
  if (typeof config === 'object') {
    currentConfig = {
      ...DEFAULT_CONFIG,
      ...config,
    };
  } else {
    currentConfig = {
      ...DEFAULT_CONFIG,
      delay: config,
    };
  }
  const { delay, ignoreInitialCall } = currentConfig;
  const data = useRef({ firstTime: true });
  useEffect(() => {
    const { firstTime, clearFunc } = data.current;

    if (firstTime && ignoreInitialCall) {
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
  }, [delay, ...deps]);
}

export default useDebouncedEffect;
