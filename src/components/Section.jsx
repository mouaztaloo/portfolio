import { Box, Typography } from "@mui/material";
import { sectionSpacing } from "../styles";

export default function Section({ id, title, children }) {
  return (
    <Box id={id} sx={sectionSpacing}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      {children}
    </Box>
  );
}
