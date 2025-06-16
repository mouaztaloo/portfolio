// styles/theme.js
import { createTheme } from "@mui/material/styles";

export const getTheme = (mode = "light") => {
  const isDark = mode === "dark";

  return createTheme({
    palette: {
      mode,
      primary: {
        main: isDark ? "#90caf9" : "#1976d2",
      },
      secondary: {
        main: "#f50057",
      },
      background: {
        default: isDark ? "#121212" : "#f8f9fa",
        paper: isDark ? "#1e1e1e" : "#ffffff",
      },
      text: {
        primary: isDark ? "#e0e0e0" : "#0B3B5B",
        secondary: isDark ? "#9e9e9e" : "#4f4f4f",
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: { fontWeight: 800 },
      h2: { fontWeight: 700 },
      h3: { fontWeight: 700 },
      h4: { fontWeight: 600 },
      h5: { fontWeight: 600 },
      h6: { fontWeight: 500 },
      body1: { lineHeight: 1.7 },
      body2: { lineHeight: 1.6 },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: "none",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow: isDark
              ? "0 4px 20px rgba(0,0,0,0.5)"
              : "0 4px 12px rgba(0,0,0,0.1)",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 12,
          },
        },
      },
    },
  });
};
