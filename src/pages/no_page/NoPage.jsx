import { Typography } from "@mui/material";

export const NoPage = () => {
    const textStyle = {
      fontSize: { xs: "20px", sm: "28px", md: "32px" },
      fontWeight: "200",
      lineHeight: { xs: "30px", sm: "40px", md:"50px" },
      letterSpacing: "3px",
      textAlign: "center",
      padding: { xs: "1rem", sm: "4rem", md: "8rem" },
    };
  return (
    <Typography component="div" sx={textStyle}>
      <b>Page not found!</b> Please use the navbar on top of the page for easier
      navigation.
      </Typography>
  );
};
