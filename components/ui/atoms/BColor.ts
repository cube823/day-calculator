export const BColor = {
  primary01: '#E4EEFF',
  primary02: '#D9E6FF',
  primary03: '#CEDFFF',
  primary04: '#BCD2FB',
  primary05: '#A7C4FA',
  primary06: '#87AFF8',
  primary07: '#5C91F2',
  primary08: '#3478F6',
  primary09: '#2362D8',
  primary10: '#003FB4',

  error01: '#FFF3F3',
  error02: '#FFEBEB',
  error03: '#FFDADA',
  error04: '#FFCACA',
  error05: '#F9B3B3',
  error06: '#FFA4A4',
  error07: '#F27B7B',
  error08: '#F63434',
  error09: '#D82323',
  error10: '#B40000',

  warning01: '#FFFBEF',
  warning02: '#FFF9E4',
  warning03: '#FFF5D0',
  warning04: '#FFF1BD',
  warning05: '#FFEAA1',
  warning06: '#F5E196',
  warning07: '#F3D774',
  warning08: '#F6CB34',
  warning09: '#E3BB2D',
  warning10: '#C29803',

  successMain: '#23C109',
  successDark: '#20BB06',
  successDarker: '#149000',
  successLight: '#84E274',
  successLighter: '#E2FFDD',

  mono01: '#FCFCFC',
  mono02: '#F1F1F1',
  mono03: '#E9E9E9',
  mono04: '#CFCFCF',
  mono05: '#DCDCDC',
  mono06: '#B8B8B8',
  mono07: '#919191',
  mono08: '#474747',
  mono09: '#323232',
  mono10: '#222222',

  transparent: 'transparent',

  loginDefault:
    'linear-gradient(107.56deg, #000000 0%, rgba(9, 46, 116, 0.75) 100%)',

  loginSetting:
    'linear-gradient(107.56deg, #000000 0%, rgba(9, 46, 116, 0.75) 100%)',

  loginFinding:
    'linear-gradient(107.56deg, #000000 0%, rgba(9, 46, 116, 0.75) 100%)',

  backgroundColor: '#E5E5E5',
} as const;

export type ColorType = keyof typeof BColor;
