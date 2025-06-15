import React from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";

export default function Footer() {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();
  const logoSrc = "/logo192.png";
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.background.paper,
        py: 4,
        color: theme.palette.text.primary,
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <img
          src={logoSrc}
          alt="Mouaz Logo"
          style={{
            height: 50,
            marginBottom: 16,
            transition: "opacity 0.3s ease",
          }}
        />

        <Typography variant="body2" color={theme.palette.text.secondary}>
          © {currentYear} – mouaz | All rights reserved
        </Typography>

        <Typography
          variant="caption"
          color={theme.palette.text.secondary}
          sx={{ mt: 1, display: "block" }}
        >
          Built with React.js and MUI (Material-UI) – with love and attention to
          detail 💙
        </Typography>
      </Container>
    </Box>
  );
}
