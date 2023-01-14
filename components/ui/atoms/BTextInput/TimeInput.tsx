import { BColor } from "components/ui/atoms/BColor";
import BFlex from "components/ui/atoms/BFlex";
import { ChangeEvent, KeyboardEvent, memo, useCallback } from "react";

import styled from "styled-components";

interface TimeInputProps {
  value: number;
  onChange: (time: number) => void;
  disabled?: boolean;
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void | Promise<void>;

  padding: string;
  timeLimit?: number;
}

const TimeInput = ({
  value,
  onChange,
  disabled,
  padding,
  timeLimit,
  onKeyPress,
}: TimeInputProps) => {
  const onTimeChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const numerable = parseInt(e.currentTarget.value, 10);
      if (!Number.isNaN(numerable) && numerable <= (timeLimit ?? 60)) {
        onChange(numerable);
        return;
      }

      onChange(0);
    },
    [onChange, timeLimit]
  );

  return (
    <BFlex
      gap={4}
      isFull
      borderRadius={8}
      border={`1px solid ${BColor.mono07}`}
      backgroundColor={disabled ? "mono05" : "mono01"}
      padding={padding}
      alignItems="center"
      justifyContent="center"
      width={52}
    >
      <BFlex isFull alignItems="center" justifyContent="center">
        <TextInputWrapper
          type="text"
          pattern="[0-9]+"
          min={0}
          max={60}
          onChange={onTimeChange}
          value={`${value || `0${value}`}`}
          onKeyPress={onKeyPress}
          size={2}
        />
      </BFlex>
    </BFlex>
  );
};

const TextInputWrapper = styled.input`
  display: flex;
  outline: none;
  font-size: 0.875rem;
  font-weight: 600;
  text-align: center;
  letter-spacing: -0.04em;

  color: ${BColor.mono08};

  overflow: hidden;
  align-items: center;
  justify-content: center;
  border: 0;
  background-color: ${BColor.mono01};

  &:focus {
    color: ${BColor.mono08};
  }
`;

export default memo(TimeInput);
