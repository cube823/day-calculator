import { useMouseOver } from "components/hook/useMouseOver";
import { BColor, ColorType } from "components/ui/atoms/BColor";
import BFlex from "components/ui/atoms/BFlex";
import { BTheme } from "components/ui/atoms/BTheme";
import BTypography from "components/ui/atoms/BTypography";
import { SizeReturnType, SizeType } from "components/ui/atoms/type";
import {
  ChangeEvent,
  MouseEvent,
  KeyboardEvent,
  FocusEvent,
  useMemo,
  useCallback,
  ReactNode,
  memo,
} from "react";

import styled from "styled-components";

type TextInputSizeType = Exclude<SizeType, "xs"> | "dropdown";

const textInputProps: Record<
  TextInputSizeType,
  Pick<SizeReturnType, "fontSize"> & {
    padding: string;
  }
> = {
  sm: {
    padding: `0.6875rem 1rem`,
    fontSize: 14,
  },
  md: {
    padding: `0.75rem 1.125rem`,
    fontSize: 18,
  },
  lg: {
    padding: `0.75rem 1.25rem`,
    fontSize: 20,
  },
  xl: {
    padding: `0.75rem 1.125rem`,
    fontSize: 24,
  },
  dropdown: {
    padding: `1.25rem 1.25rem`,
    fontSize: 14,
  },
};

interface BTextInputProps {
  textInputSizeType: TextInputSizeType;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "password" | "number" | "date";
  height?: number | string;
  backgroundColor?: ColorType;

  width?: number | string;
  isFullTextInputWidth?: boolean;
  placeholder?: string;
  disabled?: boolean;
  borderRadius?: string;
  borderRemove?: boolean;
  borderBottomExisted?: boolean;
  prefixElements?: ReactNode;
  guideText?: string;
  suffixText?: string;
  suffixTextMarginTop?: number;

  onClick?: (
    e?: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => void | Promise<void>;
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void | Promise<void>;
  onFocus?: (e: FocusEvent<HTMLInputElement, Element>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement, Element>) => void;
}

const BTextInput = ({
  onChange,
  backgroundColor,
  textInputSizeType,
  value,
  type,
  placeholder,
  suffixText,
  suffixTextMarginTop,
  onClick,
  onKeyPress,
  width,
  isFullTextInputWidth,
  height,
  disabled,
  borderRadius,
  guideText,
  prefixElements,
  borderRemove,
  borderBottomExisted,
  onFocus: onInputFocus,
  onBlur: onInputBlur,
}: BTextInputProps) => {
  const { mouseOver, onMouseOver, onMouseLeave } = useMouseOver();

  const { padding, fontSize } = useMemo(
    () => textInputProps[textInputSizeType],
    [textInputSizeType]
  );

  const onFocus = useCallback(
    (e: FocusEvent<HTMLInputElement, Element>) => {
      onInputFocus?.(e);
    },
    [onInputFocus]
  );

  const onBlur = useCallback(
    (e: FocusEvent<HTMLInputElement, Element>) => {
      onInputBlur?.(e);
    },
    [onInputBlur]
  );

  return (
    <BFlex width={width} isFull={!width} isColumn gap={4}>
      <BFlex
        position="relative"
        width={width}
        isFull={!width}
        height={height}
        borderRadius={borderRadius ?? "0.5rem"}
        padding={padding}
        onClick={onClick}
        onFocus={onMouseOver}
        onBlur={onMouseLeave}
        backgroundColor={disabled ? "mono05" : backgroundColor || "mono01"}
        border={
          borderRemove
            ? "0"
            : `1px solid ${BColor[mouseOver ? "mono07" : "mono05"]}`
        }
        borderBottomExisted={borderBottomExisted}
        flexWrap
      >
        {prefixElements}
        <TextInputWrapper
          value={value}
          placeholder={placeholder}
          type={type}
          borderRemove={borderRemove}
          onChange={onChange}
          disabled={disabled}
          onKeyDown={onKeyPress}
          onFocus={onFocus}
          onBlur={onBlur}
          fontSize={fontSize}
          isFullTextInputWidth={isFullTextInputWidth}
        />
        {suffixText && value ? (
          <BFlex
            position="absolute"
            left={20 + `${value}`.length * 7}
            top={suffixTextMarginTop ?? 13}
            alignItems="center"
          >
            <BTypography text={suffixText} size={14} color="mono08" fitText />
          </BFlex>
        ) : undefined}
      </BFlex>

      {guideText ? (
        <BFlex padding="0 0.25rem">
          <BTypography text={guideText} color="error08" size={10} />
        </BFlex>
      ) : undefined}
    </BFlex>
  );
};

const TextInputWrapper = styled.input<
  Pick<SizeReturnType, "fontSize"> & {
    disabled?: boolean;
    borderRemove?: boolean;
    isFullTextInputWidth?: boolean;
  }
>`
  display: flex;
  outline: none;
  position: relative;
  width: ${(props) => (props.isFullTextInputWidth ? "100%" : undefined)};
  font-size: ${(props) => props.fontSize / 16}rem;
  line-height: ${(props) => BTheme.lineHeight[props.fontSize]};
  color: ${(props) => (props.disabled ? BColor.mono01 : BColor.mono08)};

  border: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  &::placeholder {
    color: ${(props) => (props.disabled ? BColor.mono01 : BColor.mono05)};
  }
`;

export default memo(BTextInput);
