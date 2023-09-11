import MailIcon from "@mui/icons-material/Mail";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { MessagesWindowItem } from "./MessagesWindowItem";
import CloseIcon from "@mui/icons-material/Close";

export const MessagesWindow = ({ withText }) => {
  const messages = {
    msg1: {
      msgFrom: "user2",
      msgTime: "23:23",
      msgContent: "Hello there, user 1!",
    },
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
      <Box sx={{ display: "flex" }} onClick={toggleDrawer(true)}>
        <IconButton size="large" aria-label="show new inbox" color="inherit">
          <Badge badgeContent={1} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        {withText ? (
          <p style={{ margin: 0, alignSelf: "center" }}>Messages</p>
        ) : (
          ""
        )}
      </Box>
      <Drawer
        anchor={"right"}
        open={drawerState}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#434446",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            minWidth: { xs: "80vw", md: "70vw", lg: "50vw", xl: "40vw" },
          },
        }}
      >
        <List sx={{ padding: "3rem 0" }}>
          <ListItem
            disablePadding
            sx={{
              backgroundColor: "#17171b",
              position: "fixed",
              top: 0,
              zIndex: 1,
              maxHeight: "3rem",
            }}
          >
            <ListItemButton onClick={toggleDrawer(false)}>
              <ListItemIcon>
                <CloseIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Close window" />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ backgroundColor: "#363535", margin: "10px 0" }}>
            <MessagesWindowItem msg={messages.msg1} />
          </ListItem>
          <ListItem sx={{ backgroundColor: "#363535", margin: "10px 0" }}>
            <MessagesWindowItem msg={messages.msg1} />
          </ListItem>
          <ListItem sx={{ backgroundColor: "#363535", margin: "10px 0" }}>
            <MessagesWindowItem msg={messages.msg1} />
          </ListItem>
          <ListItem sx={{ backgroundColor: "#363535", margin: "10px 0" }}>
            <MessagesWindowItem msg={messages.msg1} />
          </ListItem>
          <ListItem sx={{ backgroundColor: "#363535", margin: "10px 0" }}>
            <MessagesWindowItem msg={messages.msg1} />
          </ListItem>
        </List>
        <ListItem
          disablePadding
          sx={{
            backgroundColor: "#17171b",
            position: "fixed",
            bottom: 0,
            zIndex: 1,
            maxHeight: "3rem",
          }}
        >
          <ListItemButton onClick={toggleDrawer(false)}>
            <ListItemText primary="Open messenger" />
          </ListItemButton>
        </ListItem>
      </Drawer>
    </Box>
  );
};
