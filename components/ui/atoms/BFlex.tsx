import { BColor, ColorType } from "components/ui/atoms/BColor";
import { BTheme, SpaceType } from "components/ui/atoms/BTheme";
import {
  FocusEvent,
  MouseEvent,
  forwardRef,
  memo,
  ReactNode,
  useMemo,
} from "react";

import styled from "styled-components";
import { getLength, getSpace } from "utils/ui-formatter";

export type AlignType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "stretch";

interface BFlexProps {
  width?: number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
  height?: number | string;
  minHeight?: number | string;
  maxHeight?: number | string;
  padding?: SpaceType | string;
  margin?: SpaceType | string;
  gap?: SpaceType;

  justifyContent?: AlignType;
  alignItems?: AlignType;

  backgroundColor?: ColorType;
  backgroundHoverColor?: ColorType;
  backgroundActiveColor?: ColorType;
  borderColor?: ColorType;
  borderWidth?: number;
  borderStyle?: "solid" | "dashed";
  borderRadius?: SpaceType | string;
  opacity?: number;
  border?: string;
  borderTop?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderRight?: string;
  zIndex?: number;

  borderBottomExisted?: boolean;
  boxShadowExisted?: boolean;
  flexWrap?: boolean;

  position?: "absolute" | "relative" | "fixed";
  noShrink?: boolean;
  isColumn?: boolean;
  isFull?: boolean;
  onClick?: (
    e?: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => void | Promise<void>;
  onFocus?: (
    e?:
      | FocusEvent<HTMLDivElement, Element>
      | MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => void;
  onBlur?: (
    e?:
      | FocusEvent<HTMLDivElement, Element>
      | MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => void;
  onMouseOver?: (e?: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void;
  onMouseLeave?: (
    e?: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => void;
  onMouseDownCapture?: (
    e?: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => void;
  onMouseUpCapture?: (
    e?: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => void;
  children?: ReactNode;
  defaultTransition?: boolean;
  customTransition?: string;

  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
  isOverflow?: boolean;
}

const BFlex = forwardRef<HTMLDivElement, BFlexProps>(function ForwardedFlex(
  {
    width: inputWidth,
    minWidth: inputMinWidth,
    maxWidth: inputMaxWidth,
    height: inputHeight,
    maxHeight: inputMaxHeight,
    minHeight: inputMinHeight,
    padding: inputPadding,
    margin: inputMargin,
    isFull,
    opacity,
    border,
    flexWrap,
    borderTop,
    borderBottom,
    borderLeft,
    borderRight,
    isColumn,
    defaultTransition,
    customTransition,
    borderRadius,
    backgroundColor,
    backgroundHoverColor,
    backgroundActiveColor,
    borderColor,
    position,
    borderWidth,
    borderStyle,
    justifyContent,
    alignItems,
    boxShadowExisted,
    borderBottomExisted,
    zIndex,
    gap,
    noShrink,
    onClick,
    onFocus,
    onBlur,
    onMouseOver,
    onMouseLeave,
    onMouseDownCapture,
    onMouseUpCapture,
    top,
    bottom,
    left,
    right,

    isOverflow,
    children,
  },
  ref
) {
  const width = useMemo(
    () => (inputWidth ? getLength(inputWidth) : inputWidth),
    [inputWidth]
  );

  const minWidth = useMemo(
    () => (inputMinWidth ? getLength(inputMinWidth) : inputMinWidth),
    [inputMinWidth]
  );

  const maxWidth = useMemo(
    () => (inputMaxWidth ? getLength(inputMaxWidth) : inputMaxWidth),
    [inputMaxWidth]
  );

  const height = useMemo(
    () => (inputHeight ? getLength(inputHeight) : inputHeight),
    [inputHeight]
  );

  const minHeight = useMemo(
    () => (inputMinHeight ? getLength(inputMinHeight) : inputMinHeight),
    [inputMinHeight]
  );

  const maxHeight = useMemo(
    () => (inputMaxHeight ? getLength(inputMaxHeight) : inputMaxHeight),
    [inputMaxHeight]
  );

  const padding = useMemo(() => getSpace(inputPadding), [inputPadding]);
  const margin = useMemo(() => getSpace(inputMargin), [inputMargin]);

  return (
    <BFlexContainer
      ref={ref}
      onClick={onClick}
      minHeight={minHeight}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onMouseDownCapture={onMouseDownCapture}
      onMouseUpCapture={onMouseUpCapture}
      onFocus={onFocus}
      onBlur={onBlur}
      isFull={isFull}
      isColumn={isColumn}
      width={width}
      minWidth={minWidth}
      maxWidth={maxWidth}
      height={height}
      maxHeight={maxHeight}
      padding={padding}
      position={position}
      margin={margin}
      opacity={opacity}
      border={border}
      borderTop={borderTop}
      borderBottom={borderBottom}
      borderLeft={borderLeft}
      borderRight={borderRight}
      backgroundColor={backgroundColor}
      backgroundHoverColor={backgroundHoverColor}
      backgroundActiveColor={backgroundActiveColor}
      borderRadius={borderRadius}
      gap={gap}
      isOverflow={isOverflow}
      clickable={Boolean(onClick)}
      noShrink={noShrink}
      borderColor={borderColor}
      borderWidth={borderWidth}
      borderStyle={borderStyle}
      justifyContent={justifyContent}
      alignItems={alignItems}
      boxShadowExisted={boxShadowExisted}
      borderBottomExisted={borderBottomExisted}
      flexWrap={flexWrap}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      defaultTransition={defaultTransition}
      customTransition={customTransition}
      zIndex={zIndex}
    >
      {children}
    </BFlexContainer>
  );
});

const BFlexContainer = styled.div<
  Omit<BFlexProps, "children"> & { clickable: boolean }
>`
  display: flex;
  position: ${(props) => props.position ?? undefined};
  flex-direction: ${(props) => (props.isColumn ? "column" : "row")};
  flex: ${(props) => (props.isFull ? 1 : undefined)};
  flex-shrink: ${(props) => (props.noShrink ? 0 : undefined)};
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};

  padding: ${(props) => props.padding || undefined};
  margin: ${(props) => props.margin || undefined};

  gap: ${(props) => BTheme.space[props.gap ?? 0]};

  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-wrap: ${(props) => (props.flexWrap ? "wrap" : undefined)};

  background-color: ${(props) =>
    props.backgroundColor &&
    !props.backgroundColor.includes("login") &&
    BColor[props.backgroundColor]};
  border-style: ${(props) =>
    props.borderWidth ? props.borderStyle : undefined};
  border-width: ${(props) => props.borderWidth};
  border-color: ${(props) =>
    props.borderColor ? BColor[props.borderColor] : "inherit"};
  border-radius: ${(props) =>
    props.borderRadius
      ? typeof props.borderRadius === "string"
        ? props.borderRadius
        : BTheme.space[props.borderRadius]
      : undefined};

  opacity: ${(props) => props.opacity ?? props.opacity};
  border: ${(props) => props.border};

  border-top: ${(props) => props.borderTop};

  border-bottom: ${(props) =>
    props.borderBottomExisted
      ? `1px solid ${BColor.mono05}`
      : `${props.borderBottom}`};

  border-left: ${(props) => props.borderLeft};
  border-right: ${(props) => props.borderRight};

  background: ${(props) =>
    props.backgroundColor?.includes("login") && BColor[props.backgroundColor]};

  cursor: ${(props) => (props.clickable ? "pointer" : undefined)};
  outline: none;

  z-index: ${(props) => props.zIndex};

  top: ${(props) =>
    props.top
      ? typeof props.top === "string"
        ? props.top
        : `${props.top / 16}rem`
      : undefined};
  bottom: ${(props) =>
    props.bottom
      ? typeof props.bottom === "string"
        ? props.bottom
        : `${props.bottom / 16}rem`
      : undefined};
  left: ${(props) =>
    props.left
      ? typeof props.left === "string"
        ? props.left
        : `${props.left / 16}rem`
      : undefined};
  right: ${(props) =>
    props.right
      ? typeof props.right === "string"
        ? props.right
        : `${props.right / 16}rem`
      : undefined};

  &:hover {
    background-color: ${(props) =>
      props.backgroundHoverColor
        ? BColor[props.backgroundHoverColor]
        : undefined};
  }

  &:active {
    background-color: ${(props) =>
      props.backgroundActiveColor
        ? BColor[props.backgroundActiveColor]
        : undefined};
  }

  box-shadow: ${(props) =>
    props.boxShadowExisted ? "0px 1px 10px rgba(0, 0, 0, 0.1)" : undefined};

  transition: ${(props) =>
    props.defaultTransition ? "all 0.2s ease-out" : props.customTransition};

  overflow: ${(props) => (props.isOverflow ? "auto" : undefined)};
`;

export default memo(BFlex);
