import { useRef, useState, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import AnimatedLogos from "../components/AnimatedLogos";
import HeroContent from "../components/HeroContent";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: [0, -10, 0],
        }}
        transition={{
          opacity: { duration: 1.2, delay: 1.5 },
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          color: theme.palette.text.secondary,
          zIndex: 2,
          cursor: "pointer",
        }}
        whileHover={{
          scale: 1.15,
          transition: { duration: 0.2 },
        }}
      >
        <ArrowDownwardIcon fontSize="large" />
      </motion.div>
    </Box>
  );
};

export default Hero;
