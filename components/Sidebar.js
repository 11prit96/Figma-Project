import { Box } from "@mui/material";
import React, { useCallback, useEffect, useRef } from "react";
import theme from "../theme/theme";
import CloseIcon from "@mui/icons-material/Close";

export default function Sidebar({ setSidebar, hasTransitionedIn, sidebar }) {
  const sidebarRef = useRef(null);
  const navItems = ["Home", "FAQs", "Blogs", "Point System", "Careers"];

  const handleOutsideClick = useCallback(
    (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setSidebar(false);
      }
    },
    [sidebarRef, setSidebar]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
  }, [handleOutsideClick]);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.3)",
        zIndex: "100",
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backdropFilter: "blur(5px)",
      }}
    >
      <Box
        sx={{}}
        className={`sidebar ${hasTransitionedIn && "in"} ${
          sidebar && "visible"
        }`}
        ref={sidebarRef}
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
    </Box>
  );
}
