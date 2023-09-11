import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import GroupsIcon from "@mui/icons-material/Groups";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../../helpers/setWindowSize";

export const MenuBar = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    setdrawerState(false);
    scrollToTop();
    navigate("/");
  };
  const goToHelp = () => {
    setdrawerState(false);
    scrollToTop();
    navigate("/help");
  };

  const [drawerState, setdrawerState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setdrawerState(open);
  };

  return (
    <Box>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor={"left"}
        open={drawerState}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#434446",
            color: "white",
          },
        }}
      >
        <List>
          <ListItem>
            <ListItemButton onClick={toggleDrawer(false)}>
              <ListItemIcon>
                <CloseIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Close menu" />
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton onClick={goToHome}>
              <ListItemIcon>
                <HomeIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <LibraryBooksIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="My Collection" />
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <GroupsIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Meetings" />
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton onClick={goToHelp}>
              <ListItemIcon>
                <InfoIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Help" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};
