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
  useTheme,
} from "@mui/material";
import { Mail, GitHub, LinkedIn, AccountBalance } from "@mui/icons-material";
import resumePDF from "../assets/Resume_Mouaz_Taloo_Alolabi.pdf";

const Contact = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      component="section"
      id="contact"
       sx={{
        py: 10,
        bgcolor: theme.palette.background.paper,
      }}
    >
      <Container maxWidth="xl">
        <Box maxWidth={900} mx="auto" textAlign="center" mb={6}>
          <Typography
            variant="h3"
            component="h2"
            fontWeight="bold"
            gutterBottom
            sx={{ color: theme.palette.text.primary }}
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

        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          <Grid
            xs={12}
            md={6}
            sx={{
              maxWidth: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 3,
                flexGrow: 1,
                bgcolor: theme.palette.background.paper,
              }}
            >
              <Typography
                variant="h5"
                fontWeight="600"
                mb={3}
                sx={{ color: theme.palette.text.primary }}
              >
                Get in touch
              </Typography>
              <Stack spacing={2}>
                <Link
                  href="mailto:mouaztaloo00@gmail.com"
                  underline="none"
                  color="text.secondary"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <IconButton
                    sx={{
                      color: isDark
                        ? theme.palette.primary.contrastText
                        : theme.palette.primary.main,
                    }}
                    size="medium"
                  >
                    <Mail />
                  </IconButton>
                  <Box>
                    <Typography
                      fontWeight="medium"
                      sx={{ color: theme.palette.text.primary }}
                    >
                      Email
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      mouaztaloo00@gmail.com
                    </Typography>
                  </Box>
                </Link>

                <Link
                  href="https://linkedin.com/in/mouaz-taloo-alolabi"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  color="text.secondary"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <IconButton
                    sx={{
                      color: isDark
                        ? theme.palette.primary.contrastText
                        : theme.palette.primary.main,
                    }}
                    size="medium"
                  >
                    <LinkedIn />
                  </IconButton>
                  <Box>
                    <Typography
                      fontWeight="medium"
                      sx={{ color: theme.palette.text.primary }}
                    >
                      LinkedIn
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      linkedin.com/in/mouaz-taloo-alolabi
                    </Typography>
                  </Box>
                </Link>
                <Link
                  href="https://github.com/mouaztaloo"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  color="text.secondary"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <IconButton
                    sx={{
                      bgcolor: isDark
                        ? theme.palette.grey[800]
                        : theme.palette.grey[200],
                      color: theme.palette.text.primary,
                    }}
                    size="medium"
                  >
                    <GitHub />
                  </IconButton>
                  <Box>
                    <Typography
                      fontWeight="medium"
                      sx={{ color: theme.palette.text.primary }}
                    >
                      GitHub
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      https://github.com/mouaztaloo
                    </Typography>
                  </Box>
                </Link>
              </Stack>
            </Paper>
          </Grid>

          <Grid
            xs={12}
            md={6}
            sx={{
              maxWidth: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 3,
                bgcolor: "primary.main",
                background:
                  "linear-gradient(45deg,rgb(10, 48, 109) 30%,rgb(71, 12, 209) 90%)",
                color: "white",
                flexGrow: 1,
              }}
            >
              <Typography
                variant="h6"
                fontWeight="600"
                mb={2}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <AccountBalance fontSize="large" sx={{ mr: 1 }} />
                University Degree
              </Typography>
              <Box sx={{ color: "primary.light", mb: 3 }}>
                <Typography fontWeight={800}>
                  Yarmouk Private University :
                </Typography>
                <br />
                <Typography>
                  Bachelor’s Degree in Computer Software Engineering
                </Typography>
                <Typography>2016 – 2023</Typography>
              </Box>
              <br />
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
