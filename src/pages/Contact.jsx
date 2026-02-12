import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Paper,
  Link,
  IconButton,
  Stack,
} from "@mui/material";
import { Mail, GitHub, LinkedIn, AccountBalance } from "@mui/icons-material";
import resumePDF from "../assets/Resume_Mouaz_Taloo_Alolabi.pdf";
import Reveal from "../components/Reveal";

const Contact = () => {

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: 10,
        bgcolor: "background.paper",
      }}
    >
      <Container maxWidth="xl">
        <Reveal>
        <Box maxWidth={900} mx="auto" textAlign="center" mb={6}>
          <Typography
            variant="h3"
            component="h2"
            fontWeight="bold"
            gutterBottom
            color="text.primary"
          >
            Let's Work{" "}
            <Box component="span" color="primary.main">
              Together
            </Box>
          </Typography>

          <Typography variant="h6" color="text.secondary">
            Do you have an idea for a project and need a reliable frontend
            developer?
          </Typography>
        </Box>
        </Reveal>

        <Grid container spacing={4} justifyContent="center">
          {/* LEFT SIDE */}
          <Grid item xs={12} md={6}>
            <Reveal delay={0.2}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 3,
                height: "100%",
              }}
            >
              <Typography
                variant="h5"
                fontWeight={600}
                mb={3}
                color="text.primary"
              >
                Get in touch
              </Typography>

              <Stack spacing={2}>
                {/* Email */}
                <Link
                  href="mailto:mouaztaloo00@gmail.com"
                  underline="none"
                  color="text.primary"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    transition: "0.3s",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <IconButton size="medium" sx={{ color: "inherit" }}>
                    <Mail />
                  </IconButton>
                  <Box>
                    <Typography fontWeight="medium">Email</Typography>
                    <Typography variant="body2" color="text.secondary">
                      mouaztaloo00@gmail.com
                    </Typography>
                  </Box>
                </Link>

                {/* LinkedIn */}
                <Link
                  href="https://linkedin.com/in/mouaz-taloo-alolabi"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  color="text.primary"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    transition: "0.3s",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <IconButton size="medium" sx={{ color: "inherit" }}>
                    <LinkedIn />
                  </IconButton>
                  <Box>
                    <Typography fontWeight="medium">LinkedIn</Typography>
                    <Typography variant="body2" color="text.secondary">
                      linkedin.com/in/mouaz-taloo-alolabi
                    </Typography>
                  </Box>
                </Link>

                {/* GitHub */}
                <Link
                  href="https://github.com/mouaztaloo"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  color="text.primary"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    transition: "0.3s",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <IconButton size="medium" sx={{ color: "inherit" }}>
                    <GitHub />
                  </IconButton>
                  <Box>
                    <Typography fontWeight="medium">GitHub</Typography>
                    <Typography variant="body2" color="text.secondary">
                      github.com/mouaztaloo
                    </Typography>
                  </Box>
                </Link>
              </Stack>
            </Paper>
            </Reveal>
          </Grid>

          {/* RIGHT SIDE */}
          <Grid item xs={12} md={6}>
            <Reveal delay={0.4}>
            <Paper
              elevation={0}
              sx={{
                p: 7,
                borderRadius: 3,
                background:
                  "linear-gradient(45deg, rgb(10, 48, 109) 30%, rgb(71, 12, 209) 90%)",
                color: "white",
                height: "100%",
              }}
            >
              <Typography
                variant="h6"
                fontWeight={600}
                mb={2}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <AccountBalance sx={{ mr: 1 }} />
                University Degree
              </Typography>

              <Box mb={3}>
                <Typography fontWeight={800}>
                  Yarmouk Private University
                </Typography>
                <Typography>
                  Bachelor’s Degree in Computer Software Engineering
                </Typography>
                <Typography>2016 – 2021</Typography>
              </Box>

              <Button
                variant="contained"
                component="a"
                href={resumePDF}
                download
                sx={{
                  bgcolor: "white",
                  color: "primary.main",
                  "&:hover": { bgcolor: "grey.100" },
                }}
              >
                Download Resume PDF
              </Button>
            </Paper>
            </Reveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
