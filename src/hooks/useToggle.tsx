import { useCallback, useState } from 'react';

type useToggleOptions = [boolean, () => void, () => void];

export const useToggle = (defaultState: boolean = false): useToggleOptions => {
  const [isVisible, setIsVisible] = useState(defaultState);

  const show = useCallback(() => {
    setIsVisible(true);
  }, [setIsVisible]);

  const hide = useCallback(() => {
    setIsVisible(false);
  }, [setIsVisible]);

  return [isVisible, show, hide];
};
