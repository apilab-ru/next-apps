import { useCallback, useEffect, useRef, useState } from 'react';

export function useDebouncedValue<T>(
  value: T,
  delay: number,
): [T, () => void] {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const shouldDebounce = useRef(false);

  const debounceNextUpdates = useCallback(() => {
    shouldDebounce.current = true;
  }, []);

  useEffect(() => {
    if (!shouldDebounce.current) {
      setDebouncedValue(value);
      return;
    }

    const timer = setTimeout(() => {
      setDebouncedValue(value);
      shouldDebounce.current = false;
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, value]);

  return [debouncedValue, debounceNextUpdates];
}
