import { Box, Typography, Grid, Paper, useTheme } from "@mui/material";

const Skills = () => {
  const theme = useTheme();

  const skillCategories = [
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Vue.js", "Redux / Vuex"],
      color: theme.palette.primary.main, 
      gradientFrom: "#1976d2",
      gradientTo: "#115293", 
      borderColor: "#bbdefb", 
    },
    {
      title: "Styling & Layout",
      skills: ["Tailwind CSS", "Bootstrap 5", "Sass", "MUI (Material-UI)"],
      color: theme.palette.secondary.main, 
      gradientFrom: "#7b4eff", 
      gradientTo: "#5e24b3", 
      borderColor: "#d1c4e9", 
    },
    {
      title: "Programming Languages",
      skills: ["JavaScript (ES6+)", "TypeScript", "HTML5 / CSS3"],
      color: "#43a047",
      gradientFrom: "#43a047",
      gradientTo: "#2e7d32",
      borderColor: "#a5d6a7",
    },
    {
      title: "Tools & Utilities",
      skills: [
        "Git & GitHub",
        "RESTful APIs / Axios",
        "Framer Motion / GSAP",
        "Figma to Code",
      ],
      color: "#fb8c00",
      gradientFrom: "#fb8c00",
      gradientTo: "#c25e00",
      borderColor: "#ffe0b2",
    },
  ];

  return (
    <Box
      id="skills"
      component="section"
      sx={{
        py: 12,
        bgcolor: theme.palette.background.default,
        backgroundImage: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.primary.light}22 100%)`,
      }}
    >
      <Box sx={{ maxWidth: 1400, mx: "auto", px: 3 }}>
        <Typography
          variant="h3"
          component="h2"
          fontWeight="bold"
          color={theme.palette.text.primary}
          textAlign="center"
          mb={2}
          sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}
        >
          Skills &{" "}
          <Box component="span" color={theme.palette.primary.main}>
            Expertise
          </Box>
        </Typography>
        <Typography
          variant="body1"
          color={theme.palette.text.secondary}
          textAlign="center"
          mb={8}
          sx={{ fontSize: "1.125rem" }}
        >
          I work with a wide set of modern frontend technologies
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {skillCategories.map(
            (
              { title, skills, gradientFrom, gradientTo, borderColor },
              index
            ) => (
              <Grid
                key={index}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    width: 280, 
                    height: 320,
                    p: 3,
                    borderRadius: 3,
                    border: `2px solid ${borderColor}`,
                    transition: "all 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    "&:hover": {
                      boxShadow: theme.shadows[6],
                      transform: "translateY(-8px)",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    color={theme.palette.text.primary}
                    textAlign="center"
                    mb={3}
                  >
                    {title}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      alignItems: "center",
                      width: "100%",
                      flexGrow: 1,
                      justifyContent: "center",
                    }}
                  >
                    {skills.map((skill, i) => (
                      <Box
                        key={i}
                        sx={{
                          background: `linear-gradient(90deg, ${gradientFrom}cc, ${gradientTo})`,
                          color: "#fff",
                          px: 2,
                          height: 40, 
                          width: 240,
                          borderRadius: 2,
                          textAlign: "center",
                          fontWeight: 600,
                          fontSize: "0.9rem",
                          boxShadow: theme.shadows[1],
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {skill}
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </Grid>
            )
          )}
        </Grid>

        <Box sx={{ mt: 12, textAlign: "center" }}>
          <Typography
            variant="body1"
            color={theme.palette.text.secondary}
            mb={4}
            fontSize="1.125rem"
          >
            Performance Optimization & UX Best Practices
          </Typography>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              bgcolor: theme.palette.background.paper,
              px: 5,
              py: 1.5,
              borderRadius: 20,
              boxShadow: theme.shadows[4],
            }}
          >
            <Typography color={theme.palette.text.primary} fontWeight={600}>
              Always learning, always improving 🚀
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
