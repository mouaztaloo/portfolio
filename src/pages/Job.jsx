import { Box, Typography, Grid, Paper, useTheme } from "@mui/material";

const Job = () => {
  const theme = useTheme();

  const job = [
  {
    title: "Front-End Developer",
    tech: "AstroCodez | Dec 2025 – Present",
    description: [
      "Leading front-end development using React (TypeScript) and modern component-based architecture.",
      "Architecting scalable UI systems and reusable component libraries to support long-term product growth.",
      "Defining front-end standards and best practices to ensure maintainability and performance.",
      "Collaborating with product and backend teams to translate business requirements into technical solutions.",
      "Driving performance optimization and responsive design across the platform.",
    ],
    features: [
      "React (TypeScript)",
      "Architecture Design",
      "Component Libraries",
      "Performance Optimization",
      "Code Standards",
      "Product Collaboration",
    ],
    gradientFrom: theme.palette.primary.main,
    gradientTo: theme.palette.secondary.dark || "#6b21a8",
  },
  {
    title: "Front-End Developer",
    tech: "OneDoor | Nov 2025 – Jan 2026",
    description: [
      "Designed and developed scalable web applications using React (TypeScript).",
      "Built dynamic, reusable UI components and optimized application performance.",
      "Collaborated with cross-functional teams to deliver maintainable front-end solutions.",
    ],
    features: [
      "React (TypeScript)",
      "Reusable Components",
      "Performance Optimization",
      "Cross-Team Collaboration",
      "Responsive Design",
    ],
    gradientFrom: "#22c55e",
    gradientTo: theme.palette.primary.main,
  },
  {
    title: "Front-End Developer",
    tech: "No Name Group | Jul 2025 – Oct 2025",
    description: [
      "Developed and maintained the Setalkel admin dashboard for ordering systems.",
      "Built product catalog management interfaces with variants and categories.",
      "Implemented pricing logic and role-based access control (RBAC).",
      "Integrated Firebase push notifications and analytics dashboards.",
    ],
    features: [
      "Admin Dashboards",
      "RBAC",
      "Pricing Systems",
      "Firebase Integration",
      "Analytics UI",
      "Order Workflows",
    ],
    gradientFrom: "#7c3aed",
    gradientTo: "#ec4899",
  },
  {
    title: "Front-End Developer",
    tech: "Apps&more | Aug 2024 – Dec 2024",
    description: [
      "Designed and maintained web applications using Vue.js and React.js.",
      "Built responsive, user-friendly interfaces with modern front-end technologies.",
      "Improved performance through UI optimization and clean component architecture.",
    ],
    features: [
      "Vue.js",
      "React.js",
      "Responsive UI",
      "Component Architecture",
      "UI Optimization",
      "Git",
    ],
    gradientFrom: "#0ea5e9",
    gradientTo: "#6366f1",
  },
  {
    title: "Front-End Developer",
    tech: "Freelance | Oct 2020 – Jan 2026",
    description: [
      "Delivered end-to-end front-end solutions using React (TypeScript) and Vue.js.",
      "Developed dynamic dashboards and interactive user interfaces.",
      "Implemented state management, routing, and API integrations.",
      "Improved application performance through code optimization and restructuring.",
    ],
    features: [
      "React (TypeScript)",
      "Vue.js",
      "State Management",
      "API Integration",
      "Dashboards",
      "Performance Tuning",
    ],
    gradientFrom: "#f59e0b",
    gradientTo: "#ef4444",
  },
];


  return (
    <Box
      component="section"
      id="job"
      sx={{
        py: 12,
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
              <Grid key={i} sx={{ display: "flex", justifyContent: "center" }}>
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
