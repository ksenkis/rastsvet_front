import { useEffect, useRef, useCallback, useState } from 'react';

export const useTimeout = (callback: any, delay: any) => {
  // save id in a ref
  const timeoutId = useRef('');

  // save callback as a ref so we can update the timeout callback without resetting the clock
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // clear the timeout and start a new one, updating the timeoutId ref
  const reset = useCallback(() => {
    clearTimeout(timeoutId.current as any);

    const id = setTimeout(savedCallback.current as any, delay);
    timeoutId.current = id as any;
  }, [delay]);

  useEffect(() => {
    if (delay !== null) {
      reset();

      return () => clearTimeout(timeoutId.current as any);
    }
  }, [delay, reset]);

  return { reset };
};

export const useDelayNextChildren = (children: any, delay: any) => {
  const [finalChildren, setFinalChildren] = useState(null);

  const { reset } = useTimeout(() => {
    setFinalChildren(children);
  }, delay);

  useEffect(() => {
    reset();
  }, [reset, children]);

  return finalChildren || null;
};
