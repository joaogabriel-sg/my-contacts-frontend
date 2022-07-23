import { useCallback } from 'react';
import { useIsMounted } from './useIsMounted';

export function useSafeAsyncAction() {
  const isMounted = useIsMounted();

  const runSafeAsyncAction = useCallback((callback) => {
    if (isMounted()) {
      callback();
    }
  }, [isMounted]);

  return runSafeAsyncAction;
}
