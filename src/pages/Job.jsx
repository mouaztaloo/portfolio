import { Box, Typography, Grid, Paper, useTheme } from "@mui/material";

const Job = () => {
  const theme = useTheme();

  const job = [
    {
      title: "Web Development",
      tech: "Freelance, Self-employed | Oct 2020 – Present",
      description: [
        "Designed, developed, and maintained web applications using ( Vue.js & React.js ) and modern front-end technologies.",
        "Created responsive and user-friendly interfaces, improving overall user satisfaction.",
      ],
      features: [
        "Responsive Design",
        "Component-based Architecture",
        "State Managemen",
        "API Integration ",
        "Performance Optimization",
        "Cross-browser Compatibility",
      ],
      gradientFrom: theme.palette.primary.main,
      gradientTo: theme.palette.secondary.dark || "#6b21a8",
    },
    {
      title: "Customer Services",
      tech: "Movo Delivery | May 2022 – Nov 2022",
      description:
        "Provided customer support, resolving delivery issues efficiently and ensuring customer satisfaction.",
      features: [
        "Issue Reporting System ",
        "Real-time Chat Support",
        "Delivery Status Updates",
        "Customer Feedback Collection",
      ],
      gradientFrom: "#22c55e",
      gradientTo: theme.palette.primary.main,
    },
    {
      title: "Front-end Developer",
      tech: "Apps and More | Aug 2024 – Dec 2024",
      description: [
        "Designing and developing web applications using Vue.js.",
        "Collaborating with teams to build dynamic and efficient front-end solutions.",
      ],
      features: [
        "Vue.js",
        "React.js",
        "Component-based Architecture",
        "Team Collaboration",
        "API Integration",
        "Responsive UI Design",
        "Code Reusability",
        "Version Control (Git)",
      ],
      gradientFrom: "#7c3aed",
      gradientTo: "#ec4899",
    },
  ];

  return (
    <Box
      component="section"
      id="job"
      sx={{
        py: 12,
        bgcolor: theme.palette.background.paper,
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto", px: 3 }}>
        <Typography
          variant="h3"
          component="h2"
          fontWeight="bold"
          color={theme.palette.text.primary}
          textAlign="center"
          mb={2}
          sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}
        >
          Experience{" "}
          <Box component="span" color={theme.palette.primary.main}>
            Job
          </Box>
        </Typography>

        <Typography
          variant="body1"
          color={theme.palette.text.secondary}
          textAlign="center"
          mb={10}
          sx={{ fontSize: "1.125rem" }}
        >
          Here are a few highlights of the job I've worked on
        </Typography>

        <Grid container spacing={6} justifyContent="center">
          {job.map(
            (
              { title, tech, description, features, gradientFrom, gradientTo },
              i
            ) => (
              <Grid
                key={i}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Paper
                  elevation={4}
                  sx={{
                    borderRadius: 4,
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: theme.shadows[10],
                      transform: "translateY(-8px)",
                    },
                    display: "flex",
                    flexDirection: "column",
                    width: 550,
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      height: 180,
                      background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                      color: "#fff",
                      p: 3,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        bgcolor: "rgba(0,0,0,0.2)",
                        pointerEvents: "none",
                      }}
                    />
                    <Box sx={{ position: "relative", zIndex: 1 }}>
                      <Typography variant="h5" fontWeight="bold" gutterBottom>
                        {title}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        {tech}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                        ".MuiPaper-root:hover &": { opacity: 1 },
                        color: "#fff",
                        transform: "rotate(45deg)",
                      }}
                    ></Box>
                  </Box>

                  <Box
                    sx={{
                      p: 3,
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      overflow: "hidden",
                    }}
                  >
                    <Box>
                      <Box mb={3}>
                        {Array.isArray(description) ? (
                          description.map((desc, idx) => (
                            <Typography
                              key={idx}
                              variant="body1"
                              color={theme.palette.text.secondary}
                              sx={{ lineHeight: 1.5 }}
                              paragraph
                            >
                              {desc}
                            </Typography>
                          ))
                        ) : (
                          <Typography
                            variant="body1"
                            color={theme.palette.text.secondary}
                            sx={{ lineHeight: 1.5 }}
                            paragraph
                          >
                            {description}
                          </Typography>
                        )}
                      </Box>

                      <Box mb={3}>
                        <Typography
                          variant="subtitle1"
                          fontWeight={600}
                          color={theme.palette.text.primary}
                          mb={1}
                        >
                          I Worked With:
                        </Typography>
                        <Grid container spacing={1}>
                          {features.map((feature, idx) => (
                            <Grid xs={6} key={idx}>
                              <Box
                                sx={{
                                  bgcolor:
                                    theme.palette.mode === "dark"
                                      ? theme.palette.grey[800]
                                      : theme.palette.grey[100],
                                  color:
                                    theme.palette.mode === "dark"
                                      ? "#fff"
                                      : "inherit",
                                  px: 2,
                                  py: 0.5,
                                  borderRadius: 1,
                                  fontSize: "0.875rem",
                                  textAlign: "center",
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                }}
                              >
                                {feature}
                              </Box>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            )
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Job;
