import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const HeroContent = () => {
  const theme = useTheme();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      sx={{
        position: "relative",
        textAlign: "center",
        px: 3,
        maxWidth: 900,
        zIndex: 1,
      }}
    >
      <Typography
        component={motion.h1}
        variants={itemVariants}
        variant="h2"
        fontWeight="bold"
        mb={2}
        color={theme.palette.text.primary}
        sx={{ fontSize: { xs: "2.5rem", md: "4.5rem" } }}
      >
        Hi, I'm{" "}
        <Box component="span" color={theme.palette.primary.main}>
          Mouaz
        </Box>
      </Typography>

      <Typography
        component={motion.h2}
        variants={itemVariants}
        variant="h5"
        fontWeight={300}
        mb={3}
        color={theme.palette.text.secondary}
      >
        Frontend Developer
      </Typography>

      <Typography
        component={motion.p}
        variants={itemVariants}
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
        applications with{" "}
        <Box component="span" color={theme.palette.primary.main} fontWeight="600">
          React.js
        </Box>{" "}
        and{" "}
        <Box component="span" color={theme.palette.secondary.main} fontWeight="600">
          Vue.js
        </Box>
        .
      </Typography>

      <Box
        component={motion.div}
        variants={itemVariants}
        sx={{
          bgcolor: theme.palette.text.primary,
          color: theme.palette.background.paper,
          px: 4,
          py: 2,
          borderRadius: 2,
          mb: 5,
          fontStyle: "italic",
        }}
      >
        "I build for the user, design for speed, and develop for the future."
      </Box>

      <Box
        component={motion.div}
        variants={itemVariants}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          size="large"
          onClick={() => scrollToSection("about")}
          sx={{
            fontWeight: 600,
            borderRadius: 2,
            textTransform: "none",
          }}
        >
          Learn More About Me
        </Button>

        <Button
          variant="outlined"
          size="large"
          onClick={() => scrollToSection("job")}
          sx={{
            fontWeight: 600,
            borderRadius: 2,
            textTransform: "none",
            borderWidth: 2,
          }}
        >
          View My Experience
        </Button>
      </Box>
    </Box>
  );
};

export default HeroContent;
