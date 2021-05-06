declare module 'use-debounced-effect' {
  import * as React from 'react';

  function useDebouncedEffect(
    effectFn: () => void,
    timeout: number,
    dependencies: any[],
  ): void;

  export default useDebouncedEffect;
}
