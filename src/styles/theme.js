import { createTheme } from '@mui/material/styles';

export const getTheme = (mode = 'light') => {
  const isDark = mode === 'dark';

  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#1976d2', 
      },
      secondary: {
        main: '#90caf9',
      },
      background: {
        default: isDark ? '#121212' : '#f8f9fa',  
        paper: isDark ? '#1e1e1e' : '#ffffff',    
      },
      text: {
        primary: isDark ? '#e0e0e0' : '#0B3B5B',  
        secondary: isDark ? '#9e9e9e' : '#4f4f4f',
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h4: { fontWeight: 700 },
      h6: { fontWeight: 600 },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
    },
  });
};
