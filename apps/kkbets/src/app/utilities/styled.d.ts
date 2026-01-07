import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      md: string;
      sm: string;
    };
    colors: {
      background: {
        dark: string;
        medium: string;
        light: string;
      };
      accent: {
        light: string;
        dark: string;
      };
      worldCup: {
        gold: string;
        blue: string;
        lightBlue: string;
        silver: string;
        bronze: string;
      };
      font: {
        light: string;
        dark: string;
      };
    };
  }
}
