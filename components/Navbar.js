import { Box, Button, Typography } from "@mui/material";
import React from "react";
import theme from "../theme/theme";

export default function Navbar() {
  const navItems = ["Home", "FAQs", "Blogs", "Point System", "Careers"];
  return (
    <Box
      sx={{
        width: "100%",
        height: "5rem",
        backgroundColor: theme.palette.primary.dark,
        display: {xs: "none", md: "block"}
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        <Box sx={{ flexBasis: "40%" }} />
        <Box
          sx={{
            flexBasis: "60%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: "4rem",
          }}
        >
          {navItems.map((item, index) => (
            <Typography
              key={index}
              sx={{
                color: theme.palette.text.light,
                cursor: "pointer",
                fontSize: "0.9rem",
                fontWeight: "bold",
                "&:hover": {
                  color: theme.palette.secondary.main,
                },
              }}
            >
              {item}
            </Typography>
          ))}
          <Button
            variant="contained"
            sx={{
              width: "9rem",
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.text.dark,
              fontSize: "0.75rem",
              fontWeight: "bold",
              textTransform: "none",
              px: "1rem",
              py: "0.5rem",
              "&:hover": {
                color: theme.palette.text.light,
                backgroundColor: theme.palette.secondary.dark,
              },
            }}
          >
            Download Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
