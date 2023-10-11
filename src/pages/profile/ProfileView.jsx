import { Box, Divider, List } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import GroupsIcon from "@mui/icons-material/Groups";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../helpers/setWindowSize";
import HomeIcon from "@mui/icons-material/Home";
import { isLogged } from "../../helpers/helperFunctions";
import { ProfileViewOption } from "../../components/profile/ProfileViewOption";

export const ProfileView = () => {
  const navigate = useNavigate();
  const goToProfileInfo = () => {
    if (isLogged()) {
      scrollToTop();
      navigate("/profile/info");
    } else {
      window.location.reload();
    }
  };
  const goToHome = () => {
    scrollToTop();
    navigate("/");
  };

  const goToGamesCollection = () => {
    if (isLogged()) {
      scrollToTop();
      navigate("/profile/gamesCollection");
    } else {
      window.location.reload();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { xs: "center", md: "flex-start" },
        margin: { xs: "0.5rem", md: "2rem" },
        padding: "1rem 2rem",
      }}
    >
      <List
        sx={{
          color: "ghostwhite",
          backgroundColor: "#161313",
          minWidth: { xs: "70vw", md: "50vw", lg: "40vw" },
        }}
      >
        <ProfileViewOption
          icon={<AccountCircle sx={{ color: "ghostwhite" }} />}
          key={"My profile"}
          optionTitle={"My profile"}
          onClickFun={goToProfileInfo}
        />

        <Divider color="white" />

        <ProfileViewOption
          icon={<LibraryBooksIcon sx={{ color: "ghostwhite" }} />}
          key={"Collection"}
          optionTitle={"Collection"}
          onClickFun={goToGamesCollection}
        />

        <Divider color="white" />

        <ProfileViewOption
          icon={<GroupsIcon sx={{ color: "ghostwhite" }} />}
          key={"Meetings"}
          optionTitle={"Sessions"}
        />

        <Divider color="white" />

        <ProfileViewOption
          icon={<MailIcon sx={{ color: "ghostwhite" }} />}
          key={"Inbox"}
          optionTitle={"Inbox"}
        />

        <Divider color="white" />

        <ProfileViewOption
          icon={<NotificationsIcon sx={{ color: "ghostwhite" }} />}
          key={"Notifications"}
          optionTitle={"Notifications"}
        />

        <Divider color="white" />

        <ProfileViewOption
          icon={<HomeIcon sx={{ color: "ghostwhite" }} />}
          key={"home"}
          optionTitle={"Home"}
          onClickFun={goToHome}
        />
      </List>
    </Box>
  );
};
