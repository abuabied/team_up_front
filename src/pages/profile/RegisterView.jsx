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

export const RegisterView = () => {
  const navigate = useNavigate();
  const goToSignin = () => {
    scrollToTop();
    navigate("/profile/sign-in");
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
        <Typography sx={titleStyle}>register</Typography>
        <EmptyLine />
        <FormControl
          sx={{
            minWidth: { md: "30vw", lg: "20vw" },
          }}
        >
          <InputLabel htmlFor="fname" sx={contentStyle}>
            First name:
          </InputLabel>
          <DoubleEmptyLines />
          <Input id="fname" placeholder="First" sx={{ color: "white" }} />
        </FormControl>
        <DoubleEmptyLines />

        <FormControl
          sx={{
            minWidth: { md: "30vw", lg: "20vw" },
          }}
        >
          <InputLabel htmlFor="lname" sx={contentStyle}>
            Last name:
          </InputLabel>
          <DoubleEmptyLines />
          <Input id="lname" placeholder="Last" sx={{ color: "white" }} />
        </FormControl>
        <DoubleEmptyLines />

        <FormControl
          sx={{
            minWidth: { md: "30vw", lg: "20vw" },
          }}
        >
          <InputLabel htmlFor="uname" sx={contentStyle}>
            Username:
          </InputLabel>
          <DoubleEmptyLines />
          <Input id="uname" placeholder="Username" sx={{ color: "white" }} />
        </FormControl>
        <DoubleEmptyLines />

        <FormControl
          sx={{
            minWidth: { md: "30vw", lg: "20vw" },
          }}
        >
          <InputLabel htmlFor="email" sx={contentStyle}>
            Email:
          </InputLabel>
          <DoubleEmptyLines />
          <Input id="email" placeholder="Email" sx={{ color: "white" }} />
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
            id="pass1"
            placeholder="Password"
            type="password"
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
            Repeat Password:
          </InputLabel>
          <DoubleEmptyLines />
          <Input
            id="pass2"
            placeholder="Repeat Password"
            type="password"
            sx={{ color: "white" }}
          />
        </FormControl>
        <DoubleEmptyLines />
        <DoubleEmptyLines />
        <Container
          sx={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <StyledButton
            onClick={() => {
              toast.warning("Nothing happened!");
            }}
            buttonText={"register"}
          />
        </Container>
        <DoubleEmptyLines />
        <Typography sx={contentStyle}>
          *Password must be at least 6 characters long.
        </Typography>
        <Typography sx={contentStyle}>
          *Must provide at least Username Or Email.
        </Typography>
        <DoubleEmptyLines />
        <Typography sx={titleStyle}>--- Back to SignIn ---</Typography>
        <DoubleEmptyLines />
        <Container
          sx={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <StyledButton onClick={goToSignin} buttonText={"Back"} />
        </Container>
      </Box>
    </div>
  );
};
