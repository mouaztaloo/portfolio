import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";

const HeroContent = () => {
  const theme = useTheme();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        position: "relative",
        textAlign: "center",
        px: 3,
        maxWidth: 900,
        zIndex: 1,
        animation: "fadeIn 1.5s ease-in forwards",
        "@keyframes fadeIn": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        fontWeight="bold"
        mb={2}
        color={theme.palette.text.primary}
        sx={{ fontSize: { xs: "2.5rem", md: "4.5rem" } }}
      >
        Hi, I'm{" "}
        <Box component="span" color={theme.palette.primary.main}>
          mouaz
        </Box>
      </Typography>

      <Typography
        variant="h5"
        component="h2"
        fontWeight={300}
        mb={3}
        color={theme.palette.text.secondary}
        sx={{ fontSize: { xs: "1.25rem", md: "1.75rem" } }}
      >
        Frontend Developer
      </Typography>

      <Typography
        variant="body1"
        mb={5}
        color={theme.palette.text.secondary}
        sx={{
          fontSize: { xs: "1rem", md: "1.25rem" },
          maxWidth: 720,
          mx: "auto",
          lineHeight: 1.6,
        }}
      >
        I specialize in building modern, responsive, and user-friendly web
        applications{" "}
        <Box
          component="span"
          color={theme.palette.primary.main}
          fontWeight="600"
        >
          React.js
        </Box>{" "}
        and{" "}
        <Box
          component="span"
          color={theme.palette.secondary.main}
          fontWeight="600"
        >
          Vue.js
        </Box>
        .<br />I turn ideas into elegant digital interfaces, focusing on user
        experience, performance, and simplicity.
      </Typography>

      <Box
        sx={{
          bgcolor: theme.palette.text.primary,
          color: theme.palette.background.paper,
          px: 4,
          py: 2,
          borderRadius: 2,
          mb: 5,
          fontStyle: "italic",
          fontSize: { xs: "1.125rem", md: "1.25rem" },
          maxWidth: 600,
          mx: "auto",
          userSelect: "none",
        }}
      >
        "I build for the user, design for speed, and develop for the future."
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => scrollToSection("about")}
          sx={{
            fontWeight: 600,
            borderRadius: 2,
            textTransform: "none",
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: theme.palette.secondary.main,
              transform: "scale(1.05)",
              boxShadow: theme.shadows[8],
            },
          }}
        >
          Learn More About Me
        </Button>

        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={() => scrollToSection("job")}
          sx={{
            fontWeight: 600,
            borderRadius: 2,
            textTransform: "none",
            borderWidth: 2,
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: theme.palette.primary.main,
              color: theme.palette.common.white,
              transform: "scale(1.05)",
            },
          }}
        >
          View My Experience
        </Button>
      </Box>
    </Box>
  );
};

export default HeroContent;
