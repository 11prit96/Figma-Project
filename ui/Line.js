import { Box } from "@mui/material";
import React from "react";
import theme from "../theme/theme";

export default function Line() {
  return (
    <Box
      sx={{
        height: "3px",
        width: "100%",
        backgroundColor: theme.palette.text.dark,
      }}
    />
  );
}
