import { Box } from "@mui/material";
import React from "react";
import theme from "../theme/theme";
import CloseIcon from "@mui/icons-material/Close";

export default function Sidebar({ setSidebar, hasTransitionedIn, sidebar }) {
  const navItems = ["Home", "FAQs", "Blogs", "Point System", "Careers"];
  return (
    <Box
      sx={{}}
      className={`sidebar ${hasTransitionedIn && "in"} ${sidebar && "visible"}`}
    >
      <Box
        sx={{
          width: "100%",
          height: "60%",
          position: "relative",
          color: theme.palette.text.light,
          padding: "3rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <CloseIcon
          sx={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            color: theme.palette.text.light,
            cursor: "pointer",
            "&:hover": {
              color: theme.palette.secondary.light,
            },
          }}
          className={`close_icon ${!sidebar && "invisible"}`}
          onClick={() => setSidebar(false)}
        />
        {navItems.map((item, index) => (
          <p
            key={index}
            className={`sidebar_menu_items ${!sidebar && "invisible"}`}
          >
            {item}
          </p>
        ))}
      </Box>
    </Box>
  );
}
