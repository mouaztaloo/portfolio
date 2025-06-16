import CodeIcon from "@mui/icons-material/Code";
import PaletteIcon from "@mui/icons-material/Palette";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import BoltIcon from "@mui/icons-material/Bolt";
import PublicIcon from "@mui/icons-material/Public";
import GroupIcon from "@mui/icons-material/Group";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Button,
  IconButton,
  useTheme,
} from "@mui/material";

const WhatIDo = () => {
  const theme = useTheme();

  const services = [
    {
      icon: <CodeIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
      title: "Frontend Development",
      description:
        "Building responsive and interactive web applications using React.js, Vue.js, and modern JavaScript frameworks.",
    },
    {
      icon: <PaletteIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
      title: "UI/UX Implementation",
      description:
        "Converting designs from Figma, Adobe XD, or Sketch into pixel-perfect, functional user interfaces.",
    },
    {
      icon: <SmartphoneIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
      title: "Responsive Design",
      description:
        "Creating mobile-first, responsive layouts that work seamlessly across all devices and screen sizes.",
    },
    {
      icon: <BoltIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
      title: "Performance Optimization",
      description:
        "Optimizing web applications for speed, accessibility, and SEO to ensure the best user experience.",
    },
    {
      icon: <PublicIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
      title: "Single Page Applications",
      description:
        "Developing dynamic SPAs with smooth navigation, state management, and real-time functionality.",
    },
    {
      icon: <GroupIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
      title: "Consultation & Support",
      description:
        "Providing technical consultation, code reviews, and ongoing support for existing frontend projects.",
    },
  ];

  return (
    <Box id="what-i-do" component="section" sx={{ py: 10 }}>
      <Container>
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h3"
            component="h2"
            fontWeight="bold"
            color={theme.palette.text.primary}
            textAlign="center"
            mb={2}
            sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}
          >
            What I{" "}
            <Box component="span" color={theme.palette.primary.main}>
              Do
            </Box>
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            maxWidth="600px"
            mx="auto"
          >
            I provide comprehensive frontend development services to help bring
            your digital vision to life
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={0}
                sx={{
                  maxWidth: 300,
                  minHeight: 280,
                  mx: "auto",
                  borderRadius: 3,
                  ml: 4,
                  mr: 3,
                  p: 3,
                  border: "1px solid #e0e0e0",
                  transition: "0.3s ease",
                  "&:hover": {
                    borderColor: "#1976d2",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.05)",
                  },
                }}
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width={64}
                  height={64}
                  mb={3}
                  mx="auto"
                  borderRadius="50%"
                  sx={{
                    background: "linear-gradient(135deg, #e3f2fd, #ede7f6)",
                  }}
                >
                  <IconButton
                    disableRipple
                    sx={{
                      bgcolor: "transparent",
                      "&:hover": { bgcolor: "transparent" },
                    }}
                  >
                    {service.icon}
                  </IconButton>
                </Box>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  gutterBottom
                  textAlign="center"
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign="center"
                >
                  {service.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box textAlign="center" mt={8}>
          <Typography variant="h6" color="text.secondary" mb={2}>
            Ready to start your next project?
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            sx={{
              backgroundColor: "#3f51b5",
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontWeight: 500,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#303f9f",
              },
            }}
          >
            Let's Work Together
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default WhatIDo;
