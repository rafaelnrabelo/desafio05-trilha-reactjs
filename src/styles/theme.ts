import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    highlight: {
      500: '#FFBA08',
    },
    dark: {
      900: '#000000',
      700: '#47585B',
      500: '#999999',
    },
    light: {
      100: '#FFFFFF',
      500: '#F5F8FA',
      700: '#DADADA'
    }
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
});
