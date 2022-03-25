declare module 'use-debounced-effect' {
  import * as React from 'react';

  function useDebouncedEffect(
    callback: () => void | Function,
    config: number | {
      timeout?: number
      ignoreInitialCall?: boolean
    },
    dependencies: any[],
  ): void;

  export default useDebouncedEffect;
}
