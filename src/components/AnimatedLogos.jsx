import React, { useRef, useEffect } from "react";
import { Box, useTheme } from "@mui/material";

const logosCount = 8;
const logoSrc = "/logo192.png";

const AnimatedLogos = ({ containerSize }) => {
  const theme = useTheme();
  const logosRef = useRef([]);
  const animationFrameId = useRef(null);
  const logosData = useRef([]);

  useEffect(() => {
    if (containerSize.width === 0 || containerSize.height === 0) return;

    logosData.current = [];
    for (let i = 0; i < logosCount; i++) {
      logosData.current.push({
        x: Math.random() * containerSize.width,
        y: Math.random() * containerSize.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        rotation: Math.random() * 360,
        vRotation: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 80 + 40,
      });
    }

    const animate = () => {
      logosData.current.forEach((logo, idx) => {
        logo.x += logo.vx;
        logo.y += logo.vy;
        logo.rotation += logo.vRotation;

        if (logo.x < 0) {
          logo.x = 0;
          logo.vx = -logo.vx;
        }
        if (logo.x + logo.size > containerSize.width) {
          logo.x = containerSize.width - logo.size;
          logo.vx = -logo.vx;
        }
        if (logo.y < 0) {
          logo.y = 0;
          logo.vy = -logo.vy;
        }
        if (logo.y + logo.size > containerSize.height) {
          logo.y = containerSize.height - logo.size;
          logo.vy = -logo.vy;
        }

        if (logosRef.current[idx]) {
          logosRef.current[
            idx
          ].style.transform = `translate(${logo.x}px, ${logo.y}px) rotate(${logo.rotation}deg)`;
        }
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [containerSize]);

  // إعادة تهيئة refs قبل الـ map
  logosRef.current = [];

  return (
    <>
      {[...Array(logosCount)].map((_, i) => (
        <Box
          key={i}
          component="img"
          src={logoSrc}
          alt="Logo"
          ref={(el) => (logosRef.current[i] = el)}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 60,
            height: "auto",
            opacity: 0.15,
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
            willChange: "transform",
          }}
        />
      ))}

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(to bottom right, rgba( ${theme.palette.primary.mainRgb},0.1), rgba(${theme.palette.secondary.mainRgb},0.05), transparent)`,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </>
  );
};

export default AnimatedLogos;
