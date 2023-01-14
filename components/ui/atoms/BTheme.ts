const transferPxToRem = (px: number) => {
  return `${px / 16}rem`;
};

const addEm = (em: number) => {
  return `${em}em`;
};

export const BTheme = {
  fontSize: {
    10: transferPxToRem(10),
    12: transferPxToRem(12),
    14: transferPxToRem(14),
    16: transferPxToRem(16),
    18: transferPxToRem(18),
    20: transferPxToRem(20),
    24: transferPxToRem(24),
    28: transferPxToRem(28),
    32: transferPxToRem(32),
  },

  lineHeight: {
    10: transferPxToRem(16),
    12: transferPxToRem(20),
    14: transferPxToRem(20),
    16: transferPxToRem(24),
    18: transferPxToRem(28),
    20: transferPxToRem(32),
    24: transferPxToRem(36),
    28: transferPxToRem(36),
    32: transferPxToRem(44),
  },

  letterSpacing: {
    10: addEm(-0.04),
    12: addEm(-0.04),
    14: addEm(-0.04),
    16: addEm(-0.04),
    18: addEm(-0.05),
    20: addEm(-0.05),
    24: addEm(-0.05),
    28: addEm(-0.05),
    32: addEm(-0.05),
  },

  space: {
    0: transferPxToRem(0),
    2: transferPxToRem(2),
    3: transferPxToRem(3),
    4: transferPxToRem(4),
    5: transferPxToRem(5),
    6: transferPxToRem(6),
    7: transferPxToRem(7),
    8: transferPxToRem(8),
    9: transferPxToRem(9),
    10: transferPxToRem(10),
    12: transferPxToRem(12),
    14: transferPxToRem(14),
    16: transferPxToRem(16),
    18: transferPxToRem(18),
    20: transferPxToRem(20),
    24: transferPxToRem(24),
    28: transferPxToRem(28),
    32: transferPxToRem(32),
    36: transferPxToRem(36),
    40: transferPxToRem(40),
    44: transferPxToRem(44),
    48: transferPxToRem(48),
    52: transferPxToRem(52),
    56: transferPxToRem(56),
    60: transferPxToRem(60),
    100: transferPxToRem(100),
  },

  p: {},

  pSquare: {},
} as const;

export type FontSizeType = keyof typeof BTheme.fontSize;
export type SpaceType = keyof typeof BTheme.space;

export const BFonts = BTheme.fontSize as unknown as FontSizeType;
