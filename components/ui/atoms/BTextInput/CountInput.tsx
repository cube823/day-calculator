import { BColor } from "components/ui/atoms/BColor";
import BFlex from "components/ui/atoms/BFlex";
import { BTheme, FontSizeType } from "components/ui/atoms/BTheme";
import BTypography from "components/ui/atoms/BTypography";
import { ChangeEvent, KeyboardEvent, FocusEvent, useMemo, memo } from "react";

import styled from "styled-components";

type CountInputType = "sm" | "lg";

interface CountInputProps {
  // optional
  prefix?: string;
  unitName?: string;
  countInputType?: CountInputType;

  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void | Promise<void>;
  onFocus?: (e: FocusEvent<HTMLInputElement, Element>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement, Element>) => void;
  onMinus?: () => void;
  onPlus?: () => void;
  padding: string;
}

const CountInput = ({
  prefix,
  unitName,
  countInputType = "lg",
  value,
  onChange,
  disabled,
  padding,
  onKeyPress,
  onMinus,
  onPlus,
  onFocus: onInputFocus,
  onBlur: onInputBlur,
}: CountInputProps) => {
  const size = useMemo(() => {
    if (Math.log10(value) < 0) {
      return 1;
    }

    return Math.floor(Math.log10(value)) + 1;
  }, [value]);

  const { iconSize, fontSize }: { iconSize: number; fontSize: FontSizeType } =
    useMemo(() => {
      if (countInputType === "sm") {
        return { iconSize: 20, fontSize: 14 };
      }

      return { iconSize: 36, fontSize: 24 };
    }, [countInputType]);

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
    >
      <BFlex isFull alignItems="center" justifyContent="space-between">
        <BFlex isFull></BFlex>
        <BFlex alignItems="center">
          {prefix ? (
            <BFlex>
              <BTypography
                text={prefix}
                size={fontSize}
                color="mono08"
                isBold
                fitText
              />
            </BFlex>
          ) : undefined}
          <TextInputWrapper
            type="text"
            pattern="[0-9]+"
            min={0}
            fontSize={fontSize}
            max={1000}
            onChange={onChange}
            value={value}
            onKeyPress={onKeyPress}
            size={size}
            contentLength={size}
            countInputType={countInputType}
          />
          <BFlex margin="0 0 0 -0.25rem">
            <BTypography
              text={unitName ?? "분"}
              size={fontSize}
              color="mono08"
              fitText
              isBold
            />
          </BFlex>
        </BFlex>
      </BFlex>
    </BFlex>
  );
};

const TextInputWrapper = styled.input<{
  fontSize: number;
  contentLength: number;
  countInputType: CountInputType;
}>`
  display: flex;
  outline: none;
  font-size: ${(props) => props.fontSize / 16}rem;
  line-height: ${(props) => BTheme.lineHeight[props.fontSize as FontSizeType]};
  font-weight: 600;
  width: ${(props) =>
    0.5 +
    props.contentLength * (props.countInputType === "sm" ? 0.5 : 0.75)}rem;
  color: ${BColor.mono08};
  text-decoration: underline;
  background-color: transparent;

  align-items: center;
  justify-content: center;
  border: 0;
`;

export default memo(CountInput);
