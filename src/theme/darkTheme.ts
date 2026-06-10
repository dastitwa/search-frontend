import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',

    primary: {
      main: '#ffffff',
    },

    secondary: {
      main: '#ffffff',
    },

    background: {
      default: '#000000',
      paper: '#111111',
    },

    text: {
      primary: '#ffffff',
      secondary: '#a1a1aa',
    },
  },

  shape: {
    borderRadius: 4 ,
  },

  typography: {
    fontFamily:
      'Inter, sans-serif',
  },
});