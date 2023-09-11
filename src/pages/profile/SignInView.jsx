import {
  Box,
  Container,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import { contentStyle, titleStyle } from "./TextStyles";
import { StyledButton } from "../../components/helper components/StyledButton";
import {
  EmptyLine,
  DoubleEmptyLines,
} from "../../components/helper components/EmptyLines";
import { scrollToTop } from "../../helpers/setWindowSize";
import { useNavigate } from "react-router-dom";

export const SignInView = () => {
  const navigate = useNavigate();
  const goToRegister = () => {
    scrollToTop();
    navigate("/profile/register");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "2rem 0",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#3f3839",
          padding: { xs: "1rem", md: "3rem" },
          paddingBottom: 0,
        }}
      >
        <Typography sx={titleStyle}>sign in</Typography>
        <EmptyLine />
        <FormControl
          sx={{
            minWidth: { md: "30vw", lg: "20vw" },
          }}
        >
          <InputLabel htmlFor="email" sx={contentStyle}>
            Username Or Email:
          </InputLabel>
          <DoubleEmptyLines />
          <Input
            id="email"
            placeholder="User or Email..."
            sx={{ color: "white" }}
          />
        </FormControl>
        <DoubleEmptyLines />
        <FormControl
          sx={{
            minWidth: { md: "30vw", lg: "20vw" },
          }}
        >
          <InputLabel htmlFor="pass" sx={contentStyle}>
            Password:
          </InputLabel>
          <DoubleEmptyLines />
          <Input
            id="pass"
            placeholder="Password"
            type="password"
            sx={{ color: "white" }}
          />
        </FormControl>
        <DoubleEmptyLines />
        <DoubleEmptyLines />
        <Container
          sx={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <StyledButton onClick={() => {}} buttonText={"Login"} />
        </Container>
        <DoubleEmptyLines />
        <Typography sx={titleStyle}>--- Or Register ---</Typography>
        <DoubleEmptyLines />
        <Container
          sx={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <StyledButton onClick={goToRegister} buttonText={"register"} />
        </Container>
      </Box>
    </div>
  );
};
