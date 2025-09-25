import React from "react";
import { Box, Typography, Grid, useTheme, Paper } from "@mui/material";

const About = () => {
  const theme = useTheme();

  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: 10,
        bgcolor: theme.palette.background.paper,
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          px: 3,
        }}  
      >
        <Typography
          variant="h3"
          component="h2"
          fontWeight="bold"
          color={theme.palette.text.primary}
          textAlign="center"
          mb={8}
          sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}
        >
          About{" "}
          <Box component="span" color={theme.palette.primary.main}>
            Me
          </Box>
        </Typography>

        <Grid
          container
          spacing={6}
          alignItems="stretch"
          sx={{
            flexWrap: { xs: "wrap", md: "nowrap" },
          }}
        >
          <Grid
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: { md: 300 },
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Typography
                variant="h5"
                fontWeight={600}
                color={theme.palette.text.primary}
              >
                Mouaz Taloo AL-Olabi
              </Typography>

              <Typography
                variant="body1"
                color={theme.palette.text.secondary}
                sx={{ lineHeight: 1.6 }}
              >
                I'm a passionate frontend developer with extensive experience
                crafting responsive and accessible user interfaces. My journey
                began with a fascination for design and web aesthetics, which
                naturally evolved into building professional, scalable frontend
                architectures.
              </Typography>

              <Typography
                variant="body1"
                color={theme.palette.text.secondary}
                sx={{ lineHeight: 1.6 }}
              >
                Throughout my career, I've contributed to startups, freelance
                job, and full-scale production apps, always focusing on creating
                exceptional user experiences that combine beautiful design with
                robust functionality.
              </Typography>

              <Typography
                variant="body1"
                color={theme.palette.text.secondary}
                sx={{ lineHeight: 1.6 }}
              >
                I'm constantly learning and keeping up with the latest frontend
                trends to stay ahead in this fast-moving tech world, ensuring
                that every project I work on leverages the best modern
                technologies and practices.
              </Typography>
            </Box>
          </Grid>

          <Grid
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: { md: 300 },
            }}
          >
            <Box
              sx={{
                bgcolor: `linear-gradient(135deg, ${theme.palette.primary.light}22, ${theme.palette.secondary.light}22)`,
                p: 4,
                borderRadius: 4,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h6"
                fontWeight={600}
                color={theme.palette.text.primary}
                mb={3}
              >
                Core Technologies
              </Typography>

              <Grid container spacing={2} alignItems="stretch">
                {[
                  {
                    name: "React.js",
                    desc: "Frontend Framework",
                    color: theme.palette.primary.main,
                  },
                  {
                    name: "Vue.js",
                    desc: "Progressive Framework",
                    color: "#42b883",
                  },
                  {
                    name: "TypeScript",
                    desc: "Type Safety",
                    color: theme.palette.secondary.main,
                  },
                  { name: "Tailwind CSS", desc: "Styling", color: "#3b82f6" },
                ].map(({ name, desc, color }) => (
                  <Grid xs={6} key={name} sx={{ display: "flex" }}>
                    <Paper
                      elevation={1}
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flexGrow: 1,
                        height: "100%",
                        width: 180,
                        boxSizing: "border-box",
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        sx={{ color }}
                        mb={0.5}
                      >
                        {name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color={theme.palette.text.secondary}
                        sx={{ flexGrow: 1 }}
                      >
                        {desc}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
