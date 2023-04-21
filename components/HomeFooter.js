import { Box, Typography } from "@mui/material";
import React from "react";
import theme from "../theme/theme";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function HomeFooter() {
  const footerItems = ["Home", "FAQs", "Blogs", "Point System", "Careers"];
  return (
    <div
      style={{
        backgroundColor: theme.palette.secondary.dark,
        width: "100%",
        height: "20rem",
        padding: "6rem 2rem 2rem 2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "3rem",
        }}
      >
        <Box
          sx={{
            width: { xs: "90%", md: "60%" },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {footerItems.map((item, index) => (
            <Typography
              key={index}
              sx={{
                color: theme.palette.text.light,
                fontWeight: "bold",
                fontSize: { xs: "0.7rem", md: "0.9rem" },
                cursor: "pointer",
                "&:hover": {
                  color: theme.palette.secondary.light,
                },
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "3rem",
          marginTop: { xs: "1rem", md: "2rem" },
        }}
      >
        <Box
          sx={{
            width: { xs: "70%", md: "40%" },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <GitHubIcon
            sx={{
              fontSize: { xs: "1.25rem", md: "2rem" },
              color: theme.palette.text.extraLight,
              cursor: "pointer",
              "&:hover": {
                color: theme.palette.secondary.light,
              },
            }}
          />
          <FacebookIcon
            sx={{
              fontSize: { xs: "1.25rem", md: "2rem" },
              color: theme.palette.text.extraLight,
              cursor: "pointer",
              "&:hover": {
                color: theme.palette.secondary.light,
              },
            }}
          />
          <TwitterIcon
            sx={{
              fontSize: { xs: "1.25rem", md: "2rem" },
              color: theme.palette.text.extraLight,
              cursor: "pointer",
              "&:hover": {
                color: theme.palette.secondary.light,
              },
            }}
          />
          <InstagramIcon
            sx={{
              fontSize: { xs: "1.25rem", md: "2rem" },
              color: theme.palette.text.extraLight,
              cursor: "pointer",
              "&:hover": {
                color: theme.palette.secondary.light,
              },
            }}
          />
          <YouTubeIcon
            sx={{
              fontSize: { xs: "1.25rem", md: "2rem" },
              color: theme.palette.text.extraLight,
              cursor: "pointer",
              "&:hover": {
                color: theme.palette.secondary.light,
              },
            }}
          />
        </Box>
      </Box>
    </div>
  );
}
