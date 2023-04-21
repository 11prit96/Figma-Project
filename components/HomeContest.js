/* eslint-disable @next/next/no-img-element */
import { Avatar, Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import theme from "../theme/theme";
import useOnScreen from "../hooks/useOnScreen";

export default function HomeContest() {
  const gridData2 = [
    "Create your team",
    "Enter a contest",
    "Withdraw your winnings",
  ];

  const contestGrids = useRef([]);
  const contestGrid1isVisible = useOnScreen(contestGrids, 0);
  const contestGrid2isVisible = useOnScreen(contestGrids, 1);
  const contestGrid3isVisible = useOnScreen(contestGrids, 2);
  const spinningImageRef = useRef(null)
  const spinningImageIsVisible = useOnScreen(spinningImageRef)

  return (
    <div
      style={{
        backgroundColor: theme.palette.primary.dark,
        paddingBottom: "3rem",
      }}
    >
      {/* 1 */}
      <Box sx={{ px: { xs: "3rem", md: "6rem" }, py: "3rem" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1rem",
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
              How to win?
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                color: theme.palette.text.extraLight,
                fontWeight: "bold",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              doloribus nam aperiam.
            </Typography>
          </Box>
        </Box>
        <Box>
          <Grid
            container
            gap={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {gridData2.map((item, index) => {
              let fadeInStyle;

              switch (index) {
                case 0:
                  fadeInStyle =
                    contestGrid1isVisible && `contestGridAnim${index + 1}`;
                  break;
                case 1:
                  fadeInStyle =
                    contestGrid2isVisible && `contestGridAnim${index + 1}`;
                  break;
                case 2:
                  fadeInStyle =
                    contestGrid3isVisible && `contestGridAnim${index + 1}`;
                  break;

                default:
                  break;
              }
              return (
                <Grid
                  item
                  xs={12}
                  sm={5.7}
                  md={3.7}
                  key={index}
                  sx={{ padding: "1rem" }}
                  ref={(element) => (contestGrids.current[index] = element)}
                  className={`contestGrid${index + 1} ${fadeInStyle}`}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      cursor: "pointer",
                      backgroundColor: theme.palette.secondary.dark,
                      padding: "2rem",
                      borderRadius: "4rem 0 4rem 0",
                      border: `1px solid ${theme.palette.secondary.light}`,
                      transition: "all 0.5s",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <Avatar
                        src="/avatar_pic.jpg"
                        alt="avatar"
                        sx={{ width: "6rem", height: "6rem" }}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        height: "5rem",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "1.25rem",
                          fontWeight: "bold",
                          color: theme.palette.text.extraLight,
                          marginBottom: "1rem",
                          textAlign: "center",
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "0.75rem",
                        fontWeight: "bold",
                        color: theme.palette.text.extraLight,
                        textAlign: "center",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Assumenda doloribus nam aperiam iste.
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
      {/* 2 */}
      <Box
        sx={{
          backgroundColor: theme.palette.secondary.dark,
          width: "100%",
          height: "20rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <Box sx={{ width: "60%" }}>
          <Typography
            sx={{
              color: theme.palette.secondary.light,
              fontSize: { xs: "2rem", md: "4rem" },
              textAlign: "center",
            }}
          >
            Instantly Withdraw Your Winnings Like A Boss
          </Typography>
        </Box>
      </Box>
      {/* 3 */}
      <Box sx={{ py: "4rem" }}>
        <Grid
          container
          gap={3}
          sx={{ display: "flex", justifyContent: "center", px: "2rem" }}
        >
          <Grid item xs={12} md={5.5}>
            <Box
              sx={{
                width: "100%",
                height: "10rem",
                backgroundColor: theme.palette.primary.light,
                borderRadius: "20px",
                border: `1px solid ${theme.palette.secondary.light}`,
                padding: "1rem 3rem",
                position: "relative",
              }}
            >
              <img
                src="/secure 1.png"
                alt="secure 1"
                className="contest_logo"
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: { xs: "center", md: "space-between" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "40px", md: "56px" },
                    color: theme.palette.text.light,
                    fontWeight: "bold",
                  }}
                >
                  100%
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "20px", md: "25px" },
                    color: theme.palette.secondary.light,
                  }}
                >
                  Secure and Safe
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5.5} sx={{ marginTop: { xs: "4rem", md: 0 } }}>
            <Box
              sx={{
                width: "100%",
                height: "10rem",
                backgroundColor: theme.palette.primary.light,
                borderRadius: "20px",
                border: `1px solid ${theme.palette.secondary.light}`,
                padding: "1rem 3rem",
                position: "relative",
              }}
            >
              <img
                src="/online 1.png"
                alt="online 1"
                className="contest_logo"
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: { xs: "center", md: "space-between" },
                  height: "90%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "30px", md: "35px" },
                    color: theme.palette.text.light,
                    fontWeight: "bold",
                  }}
                >
                  Instant Withdraw
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "20px", md: "25px" },
                    color: theme.palette.secondary.light,
                  }}
                >
                  UPI & Bank Transfer
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5.5} sx={{ marginTop: "4rem" }}>
            <Box
              sx={{
                width: "100%",
                height: "10rem",
                backgroundColor: theme.palette.primary.light,
                borderRadius: "20px",
                border: `1px solid ${theme.palette.secondary.light}`,
                padding: "1rem 3rem",
                position: "relative",
              }}
            >
              <img
                src="/invest 1.png"
                alt="invest 1"
                className={`contest_logo ${spinningImageIsVisible && "logo_spin"}`}
                ref={spinningImageRef}
                
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: { xs: "center", md: "space-between" },
                  height: "90%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "30px", md: "35px" },
                    color: theme.palette.text.light,
                    fontWeight: "bold",
                  }}
                >
                  Zero Cost Transfer
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "20px", md: "25px" },
                    color: theme.palette.secondary.light,
                  }}
                >
                  No Transaction Fees
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5.5} sx={{ marginTop: "4rem" }}>
            <Box
              sx={{
                width: "100%",
                height: "10rem",
                backgroundColor: theme.palette.primary.light,
                borderRadius: "20px",
                border: `1px solid ${theme.palette.secondary.light}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src="/download__3_-removebg-preview 1.png"
                  alt="razorPay"
                  className="payment_partners"
                />
                <div
                  style={{
                    width: "2px",
                    height: "2rem",
                    backgroundColor: theme.palette.text.extraLight,
                  }}
                />
                <img
                  src="/download__5_-removebg-preview 1.png"
                  alt="payTM"
                  className="payment_partners"
                />
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: "20px", md: "25px" },
                  color: theme.palette.secondary.light,
                }}
              >
                Our Payment Partners
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
