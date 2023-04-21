/* eslint-disable @next/next/no-img-element */
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import theme from "../theme/theme";
import CustomTextField from "../ui/CustomTextField";

export default function HomeRegister() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "35rem",
        background: `linear-gradient(180deg, rgba(6, 7, 27, 0.7) 0%, rgba(6, 7, 27, 0.5) 124.35%), ${theme.palette.primary.light}`,
        padding: "5rem 3rem 2rem 2rem",
      }}
    >
      <Grid container gap={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: { xs: "center", md: "start" } }}>
            <Typography
              sx={{
                color: theme.palette.secondary.main,
                fontSize: "16px",
                fontStyle: "italic",
                marginBottom: "0.5rem",
              }}
            >
              Rorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "30px", md: "40px" },
                lineHeight: { xs: "2rem", md: "3rem" },
                color: theme.palette.text.light,
                marginBottom: { xs: "3.5rem", md: "1.5rem" },
              }}
            >
              Horem ipsum dolor sit amet, consect adipiscing elit.
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                color: theme.palette.text.extraLight,
                marginBottom: "2.5rem",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit.
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                color: theme.palette.text.extraLight,
                marginBottom: "0.5rem",
              }}
            >
              Download the official Example App
            </Typography>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "block" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CustomTextField />
          </Box>
          <Box sx={{display: {xs: "flex", md: "block"}, alignItems: "center", justifyContent: "center"}}>
          <Box
            sx={{
              width: { xs: "100%", sm:"85%" },
              minHeight: "10rem",
              padding: "1.5rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Card
              sx={{
                width: { xs: "3.5rem", sm:"5.5rem", md: "7rem" },
                height: { xs: "3.5rem", sm:"5.5rem", md: "7rem" },
              }}
            >
              <img
                src="/QRcode.png"
                alt="QRcode"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Card>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Button
                sx={{
                  width: { xs: "7rem", md: "11rem" },
                  minHeight: "3rem",
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: "1rem",
                  border: `1px solid ${theme.palette.secondary.main}`,
                  padding: "0.25rem 1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  textTransform: "none",
                }}
              >
                <img src="/android.png" alt="android" className="os_picture" />
                <Box
                  sx={{
                    flexBasis: "80%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: theme.palette.text.extraLight,
                      fontSize: { xs: "0.5rem", md: "0.7rem" },
                      fontWeight: "bold",
                    }}
                  >
                    GET IT ON
                  </Typography>
                  <Typography
                    sx={{
                      color: theme.palette.text.light,
                      fontSize: { xs: "0.75rem", md: "1rem" },
                    }}
                  >
                    android
                  </Typography>
                </Box>
              </Button>
              <Button
                sx={{
                  width: { xs: "7rem", md: "11rem" },
                  minHeight: "3rem",
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: "1rem",
                  border: `1px solid ${theme.palette.secondary.main}`,
                  padding: "0.25rem 1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  textTransform: "none",
                }}
              >
                <img src="/iOS.png" alt="iOS" className="os_picture" />
                <Box
                  sx={{
                    flexBasis: "80%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: theme.palette.text.extraLight,
                      fontSize: { xs: "0.5rem", md: "0.7rem" },
                      fontWeight: "bold",
                    }}
                  >
                    Download on the
                  </Typography>
                  <Typography
                    sx={{
                      color: theme.palette.text.light,
                      fontSize: { xs: "0.75rem", md: "1rem" },
                    }}
                  >
                    App Store
                  </Typography>
                </Box>
              </Button>
            </Box>
          </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={5.5}>
          <img
            src="/homeImage1.png"
            alt="homeImage1.png"
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
