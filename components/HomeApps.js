/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import theme from "../theme/theme";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useOnScreen from "../hooks/useOnScreen";

const gridData1 = {
  title: "Norem ipsum dolor",
  subtitle: "Dorem ipsum dolor sit amet, consectetur edipiscing elit.",
};

const gameData = [
  {
    imgSrc: "/game1.png",
    name: "Call of Duty",
    desc: "Call of Duty is game whose story depicts the time people were involved in World Wars.",
  },
  {
    imgSrc: "/spiderman.webp",
    name: "Spiderman",
    desc: "Sony Interactive Entertainment, Insomniac Games, and Marvel have teamed up to create a brand-new and authentic Spider-Man adventure. This isn’t the Spider-Man you’ve met or ever seen before. This is an experienced Peter Parker who’s more masterful at fighting big crime in New York City. At the same time, he’s struggling to balance his chaotic personal life and career while the fate of millions of New Yorkers rest upon his shoulders.",
  },
  {
    imgSrc: "/godofwar.webp",
    name: "God Of War",
    desc: "Starting with the release of God of War in 2005 on PlayStation 2, Santa Monica Studio has created seven games across multiple platforms up to the most recent release in 2018. Now comes the sequel to the critically acclaimed God of War (2018), God of War Ragnarök.",
  },
];

export default function HomeApps() {
  let arr1 = useMemo(() => {
    return Array.from(Array(8), (x) => (x = gridData1));
  }, [gridData1]);

  const slideContainerRef = useRef();
  const [slideContainer, setSlideContainer] = useState(null);
  const gameContainerRef = useRef();

  useEffect(() => {
    setSlideContainer(slideContainerRef.current);
  }, []);

  const gameContainerIsVisible = useOnScreen(gameContainerRef);

  const moveLeft = useCallback(() => {
    if (slideContainer) {
      slideContainer.scrollLeft -= slideContainer.clientWidth;
    }
  }, [slideContainer]);

  const moveRight = useCallback(() => {
    if (slideContainer) {
      slideContainer.scrollLeft += slideContainer.clientWidth;
    }
  }, [slideContainer]);

  return (
    <div
      style={{
        backgroundColor: theme.palette.primary.dark,
        paddingTop: "2rem",
      }}
    >
      {/* 1st */}
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "70%", md: "30%" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "30px", md: "40px" },
              color: theme.palette.text.light,
              textAlign: "center",
            }}
          >
            Worem ipsum dolor
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: theme.palette.text.extraLight,
              textAlign: "center",
            }}
          >
            Porom ipsum dolor sit amet, consectetur adipiscing elit. Porem ipsum
            dolor sit amet, consectetur.
          </Typography>
        </Box>
      </Box>
      {/* 2nd */}
      <Box
        ref={gameContainerRef}
        className={`gameContainer ${gameContainerIsVisible && "fadeIn"}`}
      >
        <Grid container gap={3}>
          {arr1.map((item, index) => (
            <Grid item xs={12} sm={5.7} lg={2.8} key={index}>
              <Card
                sx={{
                  height: "22rem",
                  backgroundColor: theme.palette.primary.main,
                  cursor: "pointer",
                  transition: "all 0.5s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Box sx={{ height: "70%" }}>
                  <img
                    src={`/${index}.png`}
                    alt={item.image}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Box sx={{ height: "30%", padding: "1rem" }}>
                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                      color: theme.palette.text.extraLight,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      fontWeight: "bold",
                      color: theme.palette.text.extraLight,
                    }}
                  >
                    {item.subtitle}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* 3rd */}
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            backgroundColor: theme.palette.primary.main,
            borderRadius: "10px",
            width: "90%",
            position: "relative",
          }}
        >
          <Box
            ref={slideContainerRef}
            id="highlightedRow"
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflowX: "scroll",
            }}
          >
            {gameData.map((item, index) => (
              <Box
                key={index}
                sx={{
                  minWidth: "100%",
                  height: "22rem",
                  display: "flex",
                  overflow: "hidden",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ flexBasis: "60%", height: "100%" }}>
                  <img
                    src={`${item.imgSrc}`}
                    alt={`game${index}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px 0 0 10px",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    flexBasis: "40%",
                    padding: { xs: "1rem", md: "3rem 2rem 0 2rem" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "15rem",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        color: theme.palette.text.extraLight,
                        marginBottom: "0.5rem",
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Box sx={{ overflowY: "hidden" }}>
                      <Typography
                        sx={{
                          fontSize: "0.75rem",
                          fontWeight: "bold",
                          color: theme.palette.text.extraLight,
                        }}
                      >
                        {item.desc}
                      </Typography>
                    </Box>
                  </Box>

                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#52c46d",
                      width: { xs: "4rem", sm: "6rem", md: "7.5rem" },
                      padding: { xs: "0.45 0.6", md: "0.75rem 1rem" },
                      textTransform: "none",
                      position: "absolute",
                      bottom: { xs: "1rem", md: "2rem" },
                      right: { xs: "2rem", md: "25%" },
                      color: "#222",
                      fontWeight: "bold",
                      "&:hover": {
                        color: theme.palette.text.extraLight,
                      },
                    }}
                  >
                    Button
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>

          <ArrowBackIosIcon
            sx={{
              color: theme.palette.text.light,
              cursor: "pointer",
              position: "absolute",
              top: { xs: "50%", md: "80%" },
              right: { xs: "92%", md: "5rem" },
            }}
            onClick={() => moveLeft()}
          />
          <ArrowForwardIosIcon
            sx={{
              color: theme.palette.text.light,
              cursor: "pointer",
              position: "absolute",
              top: { xs: "50%", md: "80%" },
              right: { xs: "0.5rem", md: "3rem" },
            }}
            onClick={() => moveRight()}
          />
        </Box>
      </Box>
    </div>
  );
}
