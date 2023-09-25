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
import { toast } from "react-toastify";
import { loginUser } from "../../services/apiServices";
import { HttpStatusCode } from "axios";
import { useState } from "react";
import { LOGIN_MESSAGES } from "../../consts/StringConsts";

export const LoginView = () => {
  const [buttonMode, setButtonMode] = useState(true);

  const checkEmptyInput = () => {
    const uname = document.getElementById("uname");
    const pass = document.getElementById("pass");
    if (uname?.value === "" || pass?.value === "") setButtonMode(true);
    else setButtonMode(false);
  };

  const navigate = useNavigate();
  const goToRegister = () => {
    scrollToTop();
    navigate("/profile/register");
  };
  const goToHome = () => {
    scrollToTop();
    navigate("/");
  };

  const login = async () => {
    const uname = document.getElementById("uname");
    const pass = document.getElementById("pass");
    const loginData = {
      username: uname?.value.trim() ? uname.value.trim() : "",
      password: pass?.value.trim() ? pass.value.trim() : "",
    };

    const res = await loginUser(loginData);
    switch (res?.status) {
      case HttpStatusCode.Ok:
        toast.success(LOGIN_MESSAGES.LOGGED_IN);
        goToHome();
        break;
      case HttpStatusCode.Forbidden:
        toast.warning(LOGIN_MESSAGES.INVALID_CREDINTIALS);
        break;
      default:
        toast.error(LOGIN_MESSAGES.ERROR_GENERAL);
    }
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
          padding: { xs: "2rem", md: "4rem" },
          paddingBottom: 0,
        }}
      >
        <Typography sx={titleStyle}>Login</Typography>
        <EmptyLine />
        <FormControl
          sx={{
            minWidth: { md: "30vw", lg: "20vw" },
          }}
        >
          <InputLabel htmlFor="uname" sx={contentStyle}>
            Username Or Email:
          </InputLabel>
          <DoubleEmptyLines />
          <Input
            id="uname"
            placeholder="User or Email..."
            sx={{ color: "white" }}
            onChange={checkEmptyInput}
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
            onChange={checkEmptyInput}
          />
        </FormControl>
        <DoubleEmptyLines />
        <DoubleEmptyLines />
        <Container
          sx={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <StyledButton
            onClick={login}
            buttonText={"Login"}
            disabled={buttonMode}
          />
        </Container>
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
