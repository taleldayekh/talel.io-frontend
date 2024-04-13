import { useCallback, useRef } from 'react';

export default function useDebounce<F extends (args: any[]) => F>(
  func: F,
  delay: number,
) {
  const functionToDebounce = useRef(func);
  const timeoutTimerId = useRef<ReturnType<typeof setTimeout>>();

  /**
   * Maintain reference to the latest function version and
   * its state, props etc. during component rerenders.
   */
  functionToDebounce.current = func;

  const debouncedFunction = useCallback(
    (...args: Parameters<F>) => {
      if (timeoutTimerId.current) {
        // Cancel pending function execution
        clearTimeout(timeoutTimerId.current);
      }

      timeoutTimerId.current = setTimeout(() => {
        functionToDebounce.current.apply(null, args);
      }, delay);
    },
    [delay],
  ) as F;

  return debouncedFunction;
}
