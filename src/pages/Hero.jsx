import { useRef, useState, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import AnimatedLogos from "../components/AnimatedLogos";
import HeroContent from "../components/HeroContent";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";


const Hero = () => {
  const theme = useTheme();
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const updateContainerSize = () => {
    if (containerRef.current) {
      setContainerSize({
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight,
      });
    }
  };

  useEffect(() => {
    updateContainerSize();
    window.addEventListener("resize", updateContainerSize);
    return () => window.removeEventListener("resize", updateContainerSize);
  }, []);

  return (
    <Box
      ref={containerRef}
      id="home"
      sx={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        bgcolor: theme.palette.background.default,
      }}
    >
      <AnimatedLogos containerSize={containerSize} />
      <HeroContent />
            <Box
        sx={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          animation: "bounce 2s infinite",
          color: theme.palette.text.secondary,
          zIndex: 2,
          "@keyframes bounce": {
            "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
            "50%": { transform: "translateX(-50%) translateY(-10px)" },
          },
        }}
      >
        <ArrowDownwardIcon fontSize="large" />
      </Box>
    </Box>
  );
};

export default Hero;
