jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: key => key})
}));

jest.mock('react-native-svg', () => 'svg-mock');