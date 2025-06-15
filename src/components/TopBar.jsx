import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import m3 from "../assets/m3.png";

const sections = [
  { id: "welcome", label: "Welcome" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "job", label: "Job" },
  { id: "contact", label: "Contact" },
];

function ThemeToggleButton({ mode, onToggleTheme }) {
  const theme = useTheme();

  return (
    <IconButton
      onClick={onToggleTheme}
      sx={{
        ml: 2,
        width: 40,
        height: 40,
        borderRadius: "50%",
        color: theme.palette.mode === "dark" ? "#fff" : "#000",
        boxShadow: "0 3px 8px rgba(0,0,0,0.24)",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0 5px 15px rgba(0,0,0,0.35)",
        },
      }}
      aria-label="Toggle light/dark theme"
    >
      {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
    </IconButton>
  );
}

export default function TopBar({ onToggleTheme, mode }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeTab, setActiveTab] = useState(false);

  const handleScroll = () => {
    const scrollPos = window.scrollY + window.innerHeight / 3;
    let currentSection = sections[0].id;
    for (let section of sections) {
      const element = document.getElementById(section.id);
      if (element && element.offsetTop <= scrollPos) {
        currentSection = section.id;
      }
    }
    setActiveTab(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
    document.getElementById(newValue)?.scrollIntoView({ behavior: "smooth" });
  };

  const logoSrc = m3;
  
  return (
    <AppBar
      position="fixed"
      elevation={2}
      sx={{
        backgroundColor:
          theme.palette.mode === "dark"
            ? "rgba(18, 18, 18, 0.7)"
            : "rgba(255, 255, 255, 0.7)",
        color: theme.palette.text.primary,
        backdropFilter: "blur(10px)",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <img
          src={logoSrc}
          alt="Mouaz Logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            cursor: "pointer",
            height: 48,
            transition: "opacity 0.3s ease",
          }}
        />

        {!isSmallScreen && (
          <Tabs
            value={activeTab}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            sx={{
              marginLeft: "auto",
              "& .MuiTab-root": {
                textTransform: "none",
                fontWeight: 600,
                minWidth: 80,
              },
            }}
          >
            {sections.map((section) => (
              <Tab key={section.id} label={section.label} value={section.id} />
            ))}
          </Tabs>
        )}

        <ThemeToggleButton mode={mode} onToggleTheme={onToggleTheme} />
      </Toolbar>
    </AppBar>
  );
}
