import { useCallback, useState } from 'react';

export const useMouseOver = () => {
  const [mouseOver, setMouseOver] = useState<boolean>(false);
  const onMouseOver = useCallback(() => {
    setMouseOver(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setMouseOver(false);
  }, []);

  return {
    mouseOver,
    onMouseOver,
    onMouseLeave,
  };
};
