/* eslint-disable @next/next/no-img-element */
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import theme from "../theme/theme";
import EastIcon from "@mui/icons-material/East";

export default function HomeFAQ() {
  const gridContent = [
    {
      title: "How much does a new website cost?",
      description:
        "Do you think it’s possible to calculate the exact cost for website development? Website development will be fully customizable, tailoring to the client’s requirements. Depending on the requirements and the method you choose to build your website, the cost keeps varying.",
    },
    {
      title: "Will you maintain my site for me?",
      description:
        "Regular maintenance is essential for a website to stabilize its flexibility and reliability. Proper maintenance would help in ensuring your website’s security, invite new visitors, boost traffic and more.",
    },
    {
      title: "Will my website be mobile-friendly?",
      description:
        "Let it be a ticket booking, online order, browsing, etc. people are keen to do these tasks on the go. So, developing a responsive website will help in increasing the look and feel of your website on both small and large devices. It also increases the number of visitors, rankings in search engines.",
    },
    {
      title: "How long does it take to build a website?",
      description:
        "If you have chosen a professional website development company, then it would take around 1 to 4 months starting from scratch till the end for basic information websites with less functionality.",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: theme.palette.primary.dark,
        padding: "0 3rem 2rem 3rem",
      }}
    >
      {/* 1 */}
      <Box
        sx={{
          width: "100%",
          height: "25rem",
          backgroundColor: theme.palette.secondary.dark,
          borderRadius: "20px",
          padding: { xs: "1rem", md: "3rem" },
          position: "relative",
        }}
      >
        <img
          src="/6101100-removebg-preview 1.png"
          alt="policy"
          className="faq_logo"
        />
        <Box
          sx={{
            width: { xs: "70%", md: "60%" },
            paddingTop: { xs: "0.5rem", md: "2rem" },
            marginBottom: "1.5rem",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.5rem", md: "3rem" },
              color: theme.palette.text.light,
              fontWeight: "bold",
            }}
          >
            Fairplay Policy
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.75rem", md: "1.25rem" },
              color: theme.palette.text.extraLight,
              fontWeight: "bold",
              marginTop: "1rem",
            }}
          >
            Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </Typography>
        </Box>
        <Button
          sx={{
            backgroundColor: theme.palette.secondary.light,
            color: "#222",
            textTransform: "none",
            padding: { xs: "0.25rem 0.5rem", md: "0.75rem 1.5rem" },
            width: { xs: "8rem", md: "14rem" },
            fontWeight: "bold",
            fontSize: { xs: "0.75rem", md: "1rem" },
            "&:hover": {
              backgroundColor: "#222",
              color: theme.palette.secondary.light,
            },
          }}
        >
          Know More
          <EastIcon
            sx={{ fontSize: { xs: "1rem", md: "2rem" }, marginLeft: "1rem" }}
          />
        </Button>
      </Box>
      {/* 2 */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          my: "2rem",
        }}
      >
        <Box sx={{ width: { xs: "75%", md: "45%" }, textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: "2rem",
              color: theme.palette.text.light,
              fontWeight: "bold",
              marginBottom: "1.5rem",
            }}
          >
            Frequently Asked Questions
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ width: "75%" }}>
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: theme.palette.text.extraLight,
                  fontWeight: "bold",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda doloribus nam aperiam.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* 3 */}
      <Box sx={{ position: "relative", marginBottom: "4rem" }}>
        <Grid container gap={3}>
          {gridContent.map((item, index) => (
            <Grid item xs={12} sm={5.7} md={2.8} key={index}>
              <Box
                className="gridItem"
                sx={{
                  height: "30rem",
                  border: `1px solid ${theme.palette.secondary.light}`,
                  borderRadius: "10%",
                  padding: "2rem 1rem",
                  position: "relative",
                }}
              >
                <p className="FAQtitle">{item.title}</p>
                <p className="FAQdesc">{item.description}</p>
                <p className="FAQhoverPrompt">Hover to see the answer.</p>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
