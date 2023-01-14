import { SpaceType, BTheme } from "components/ui/atoms/BTheme";

export const getLength = (length?: number | string) => {
  if (!length) {
    return 0;
  }

  if (typeof length === "number") {
    return `${length / 16}rem`;
  }

  return length;
};

export const getSpace = (space?: SpaceType | string) => {
  if (!space) {
    return "";
  }

  if (typeof space === "string") {
    return space;
  }

  return BTheme.space[space];
};
