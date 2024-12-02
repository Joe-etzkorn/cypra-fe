import { useRef } from "react";

export function useDebounce<T>(
  delay: number,
  cb: (value: T) => void,
): (value: T) => void {
  const timeoutRef = useRef<number | null>(null);

  return (value: T) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      cb(value);
    }, delay);
  };
}
