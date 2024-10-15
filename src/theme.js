import { extendTheme } from '@chakra-ui/react';
import '@fontsource/open-sauce-sans';
import '@fontsource/roboto';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
  },
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
      },
      '::moz-selection': {
        color: 'white',
        background: 'background.selection',
      },
      '::selection': {
        color: 'white',
        background: 'background.selection',
      },
    },
  },
  fonts: {
    heading: `'Open Sauce Sans', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  colors: {
    brand: {
      200: '#9AE6B4',
      300: '#68D391',
      400: '#48BB78',
      500: '#016F55',
      600: '#017e61',
      700: '#01b087',
    },
    background: {
      lightPrimary: '#FCF9E2',
      lightSecondary: '#cef0fd',
      darkPrimary: '#041620',
      darkSecondary: '#05212F',
      selection: '#308280',
    },
    surface: {
      light: '#FFFFFF',
      dark: '#010E13',
    },
    lightListBullet: '#353e43',
    darkListBullet: '#63757E',
  },
  components: {
    Container: {
      baseStyle: (props) => ({
        backgroundColor: mode(
          'background.lightPrimary',
          'background.darkPrimary',
        )(props),
        bg: mode('background.lightPrimary', 'background.darkPrimary')(props),
      }),
    },
    Heading: {
      baseStyle: (props) => ({
        color: mode('brand.500', 'brand.200')(props),
      }),
    },
    Text: {
      baseStyle: (props) => ({
        color: mode('brand.500', 'brand.200')(props),
        fontSize: '16',
        textAlign: 'justify',
      }),
    },
    Button: {
      baseStyle: {
        px: '40px',
        paddingX: '40px',
      },
      variants: {
        solid: (props) => ({
          backgroundColor: mode('brand.500', 'brand.300')(props),
          bg: mode('brand.500', 'brand.300')(props),
          borderRadius: 'full',
          color: mode('white', 'background.darkPrimary')(props),
          textColor: mode('white', 'background.darkPrimary')(props),
          fontWeight: 'normal',
          _hover: {
            bg: mode('brand.600', 'brand.400')(props),
          },
        }),
        cta: (props) => ({
          backgroundColor: mode('brand.500', 'brand.300')(props),
          bg: mode('brand.500', 'brand.300')(props),
          borderRadius: '1px',
          color: mode('white', 'background.darkPrimary')(props),
          textColor: mode('white', 'background.darkPrimary')(props),
          fontWeight: 'normal',
          _hover: {
            bg: mode('brand.600', 'brand.400')(props),
          },
        }),
        special: (props) => ({
          backgroundColor: mode('brand.500', 'brand.300')(props),
          bg: mode('brand.500', 'brand.300')(props),
          bgGradient: mode(
            'linear(90deg, brand.500, transparent)',
            'linear(90deg, brand.300, transparent)',
          )(props),
          borderRadius: 'full',
          color: mode('white', 'background.darkPrimary')(props),
          textColor: mode('white', 'background.darkPrimary')(props),
          fontWeight: 'bold',
          transition: 'background-color 0.5s, transform 0.25s ease',
          _hover: {
            bgGradient: 'linear(90deg, brand.600, transparent)',
            backgroundColor: '#90C42F',
            shadow: 'xl',
            transform: 'scale(1.05)',
            letterSpacing: '0.05em',
          },
          _active: {
            bgGradient: 'linear(90deg, brand.600, #85B52C)',
            transform: 'scale(1)',
          },
        }),
      },
    },
  },
});

export default theme;
