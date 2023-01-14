import { FontSizeType, SpaceType } from "components/ui/atoms/BTheme";

export type SizeType = "xs" | "sm" | "md" | "lg" | "xl";

export type SizeReturnType = {
  padding: string | SpaceType;
  fontSize: FontSizeType;
};

export type FontWeightType = 400 | 500 | 600 | 700 | 900;
