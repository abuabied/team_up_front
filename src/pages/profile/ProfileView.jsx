import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../helpers/setWindowSize";
import { Box, Input } from "@mui/material";
import { StyledButton } from "../../components/helper components/StyledButton";
import {
  DoubleEmptyLines,
  EmptyLine,
} from "../../components/helper components/EmptyLines";
import { toast } from "react-toastify";
import { validateUpdatedData } from "../../helpers/resgisterFunctions";
import {
  deleteCookie,
  getCookie,
} from "../../helpers/helperFunctions";
import { getUser } from "../../services/apiServices";
import { HttpStatusCode } from "axios";

export const ProfileView = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const goToLogin = () => {
    scrollToTop();
    navigate("/profile/login");
  };
  const signedIn = async () => {
    const username = getCookie("username");
    if (username === undefined) {
      goToLogin();
    }
  };

  const getUserDetails = async () => {
    const username = getCookie("username");
    if (username === undefined) {
      goToLogin();
    } else {
      const user = { username: username };
      const res = await getUser(user);
      switch (res?.status) {
        case HttpStatusCode.Ok:
          setUser(res?.data);
          break;
        default:
          deleteCookie("username");
          goToLogin();
      }
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const saveClick = async () => {
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const pass = document.getElementById("pass1");
    const pass2 = document.getElementById("pass2");
    const pass2Val = pass2?.value ? pass2.value : "";
    const registerData = {
      fname: fname?.value.trim() ? fname.value.trim() : "",
      lname: lname?.value.trim() ? lname.value.trim() : "",
      email: email?.value.trim() ? email.value.trim() : "",
      password: pass?.value.trim() ? pass.value.trim() : "",
    };

    const isValid = validateUpdatedData(registerData);
    if (isValid?.length > 0) {
      isValid.forEach((err) => {
        toast.warning(err);
      });
    } else {
      if (pass2Val !== registerData.password)
        toast.warning("Passwords don't match!");
      else {
        // const res: any = await userRegiter(registerData);
        // if (res?.data?.status === "success") {
        //   toast.success(res?.data?.msg);
        //   createCookie("loggedIn", 'true', 1 / (24 * 60));
        //   args.closeDialog();
        // } else if (res?.data?.status === "failure")
        //   toast.warning(res?.data?.msg);
        // else toast.error(res?.data?.msg);
        toast.success("Information updated!");
        cancelEdit();
      }
    }
  };

  const inputStyle = {
    color: "white",
    marginBottom: "1rem",
    "& .MuiInputBase-input.Mui-disabled": {
      WebkitTextFillColor: "#a5a5a6",
    },
    fontSize: { xs: "1.2rem", md: "1.6rem", lg: "2.1rem" },
  };

  const [isDisabled, setIsDisabled] = useState(true);
  const [showEditButtons, setShowEditButtons] = useState(false);

  const editInfo = () => {
    signedIn();
    setIsDisabled(false);
    setShowEditButtons(true);
  };
  const cancelEdit = () => {
    signedIn();
    setIsDisabled(true);
    setShowEditButtons(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#434446",
        margin: { xs: "0.5rem", md: "2rem" },
        padding: "1rem 2rem",
      }}
    >
      <h5>{"My Profile"}</h5>
      <h2 style={{ color: "white", margin: "1rem 0" }}>
        Hello, {user?.firstName}
      </h2>
      <h5 style={{ margin: "1rem 0" }}>{"User info"}</h5>
      <Box>
        <h5 style={{ color: "#d3fbc6" }}>{"First name:"}</h5>
        <Input
          id="fname"
          disabled={isDisabled}
          defaultValue={"First"}
          sx={inputStyle}
          value={user?.firstName}
        />

        <h5 style={{ color: "#d3fbc6" }}>{"Last name:"}</h5>
        <Input
          id="lname"
          disabled={isDisabled}
          defaultValue={"Last"}
          sx={inputStyle}
          value={user?.lastName}
        />

        <h5 style={{ color: "#d3fbc6" }}>{"Email: *Optional"}</h5>
        <Input
          id="email"
          disabled={isDisabled}
          defaultValue={"Email@domain.com"}
          sx={inputStyle}
          value={user?.email === null ? "No email!" : user?.email}
        />

        {showEditButtons ? (
          <Box>
            <h5 style={{ color: "#d3fbc6" }}>{"Password:"}</h5>
            <Input
              id="pass1"
              defaultValue={""}
              type="password"
              sx={inputStyle}
            />

            <h5 style={{ color: "#d3fbc6" }}>{"Re-type Password:"}</h5>
            <Input
              id="pass2"
              defaultValue={""}
              type="password"
              sx={inputStyle}
            />
            <DoubleEmptyLines />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                gap: "2rem",
              }}
            >
              <StyledButton onClick={saveClick} buttonText={"Save"} />
              <StyledButton onClick={cancelEdit} buttonText={"Cancel"} />
            </Box>
          </Box>
        ) : (
          <Box>
            <EmptyLine />
            <StyledButton onClick={editInfo} buttonText={"Edit info"} />
          </Box>
        )}
        <EmptyLine />
      </Box>
    </Box>
  );
};
