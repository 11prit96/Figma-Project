/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React from "react";
import theme from "../theme/theme";

const phoneDetails = [
  { country: "/india.png", code: "91" },
  { country: "/australia.png", code: "61" },
  { country: "/unitedKingdom.png", code: "44" },
  { country: "/russia.png", code: "7" },
];

export default function CustomTextField() {
  return (
    <Box
      component="form"
      onSubmit={(e) => {
        console.log("Submitted");
        e.preventDefault();
      }}
      noValidate
      autoComplete="off"
      sx={{
        border: "0.96px solid #11E6C6",
        width: "75%",
        borderRadius: "2rem",
      }}
    >
      <TextField
        size="small"
        variant="filled"
        select
        defaultValue="91"
        sx={{
          backgroundColor: theme.palette.primary.main,
          width: "20%",
          height: "100%",
          borderRadius: "2rem 0 0 2rem",
        }}
      >
        {phoneDetails.map((item, index) => (
          <MenuItem key={index} value={item.code}>
            <img src={`${item.country}`} alt={`${item.country}`} />
          </MenuItem>
        ))}
      </TextField>
      <OutlinedInput
        variant="filled"
        sx={{
          backgroundColor: theme.palette.primary.main,
          width: "80%",
          borderRadius: "0 2rem 2rem 0",
          position: "relative",
        }}
        endAdornment={
          <InputAdornment position="end">
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.primary.dark,
                height: "100%",
                position: "absolute",
                width: "40%",
                right: 0,
                borderRadius: "2rem",
                "&:hover": {
                  color: theme.palette.text.light,
                },
              }}
            >
              Get Link
            </Button>
          </InputAdornment>
        }
        label="Password"
      />
    </Box>
  );
}
