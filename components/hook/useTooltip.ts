import { useEffect, useState } from 'react';

export default function useTooltip(
  timeOut?: number,
  stopAutoClosing?: boolean,
) {
  const [tooltipVisible, tooltipControl] = useState<boolean>(false);

  const openTooltip = () => {
    tooltipControl(true);
  };

  const closeTooltip = () => {
    tooltipControl(false);
  };

  useEffect(() => {
    if (tooltipVisible && !stopAutoClosing) {
      setTimeout(() => closeTooltip(), timeOut ?? 1000);
    }
  }, [stopAutoClosing, timeOut, tooltipVisible]);

  return { tooltipVisible, openTooltip, closeTooltip };
}
