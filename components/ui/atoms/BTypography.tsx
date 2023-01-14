import { BColor, ColorType } from "components/ui/atoms/BColor";
import { BTheme, FontSizeType } from "components/ui/atoms/BTheme";
import { useMemo, forwardRef, ReactNode, memo } from "react";

import styled from "styled-components";

interface BTypographyProps {
  text: string | ReactNode;
  size: FontSizeType;
  color: ColorType;
  isBold?: boolean;

  maxWidthForEllipsis?: string | number;
  justNoWrap?: boolean;
  fitText?: boolean;
  onHover?: boolean;
  textAlign?: "start" | "end" | "center" | "justify" | "match-parent";
}

const BTypography = forwardRef<HTMLDivElement, BTypographyProps>(
  function ForwardedTypography(
    {
      text,
      color,
      isBold,
      size,
      maxWidthForEllipsis,
      onHover,
      fitText,
      justNoWrap,
      textAlign,
    },
    ref
  ) {
    const hoverColor: ColorType = useMemo(() => {
      if (onHover && color === "mono08") {
        return "mono09";
      }

      if (onHover && color === "primary08") {
        return "primary09";
      }

      return color;
    }, [color, onHover]);

    const activeColor: ColorType = useMemo(() => {
      if (onHover && color === "mono08") {
        return "mono10";
      }

      if (onHover && color === "primary08") {
        return "primary10";
      }

      return color;
    }, [color, onHover]);

    return (
      <TypographyContainer
        color={color}
        size={size}
        ref={ref}
        textAlign={textAlign}
        maxWidthForEllipsis={maxWidthForEllipsis}
        fitText={fitText}
        justNoWrap={justNoWrap}
        isBold={isBold}
        hoverColor={hoverColor}
        activeColor={activeColor}
      >
        {text}
      </TypographyContainer>
    );
  }
);

const TypographyContainer = styled.span<
  Omit<BTypographyProps, "text"> & {
    hoverColor: ColorType;
    activeColor: ColorType;
  }
>`
  font-family: Pretendard, sans-serif;
  font-size: ${(props) => BTheme.fontSize[props.size]};
  line-height: ${(props) =>
    props.fitText ? "100%" : BTheme.lineHeight[props.size]};

  margin-top: ${(props) => props.fitText && "0.1rem"};

  letter-spacing: ${(props) => BTheme.letterSpacing[props.size]};
  text-align: ${(props) => props.textAlign};

  color: ${(props) => BColor[props.color]};

  max-width: ${(props) =>
    props.maxWidthForEllipsis
      ? typeof props.maxWidthForEllipsis === "string"
        ? props.maxWidthForEllipsis
        : `${props.maxWidthForEllipsis / 16}rem`
      : undefined};

  font-weight: ${(props) => (props.isBold ? 600 : 400)};

  text-overflow: ${(props) => props.maxWidthForEllipsis && "ellipsis"};
  overflow: ${(props) => props.maxWidthForEllipsis && "hidden"};
  white-space: ${(props) =>
    props.justNoWrap || props.maxWidthForEllipsis
      ? "nowrap"
      : props.justNoWrap === false
      ? "break-spaces"
      : undefined};

  &:hover {
    color: ${(props) => BColor[props.hoverColor]};
  }

  &:active {
    color: ${(props) => BColor[props.activeColor]};
  }
`;

export default memo(BTypography);
