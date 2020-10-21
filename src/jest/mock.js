
// jest.mock("react-native-svg", () => {
//     // eslint-disable-next-line @typescript-eslint/no-var-requires
//     const svg = require("./react-native-svg.mock");
  
//     return svg;
//   });
  
  jest.mock('react-i18next', () => ({
    useTranslation: () => ({t: key => key})
  }));