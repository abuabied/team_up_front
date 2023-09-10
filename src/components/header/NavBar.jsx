import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { SearchBar } from "./SearchBar";
import { DesktopSideMenu } from "./DesktopSideMenu";
import { MobileSideMenu } from "./MobileSideMenu";
import SetWindowSize from "../../helpers/setWindowSize";

export const NavBar = () => {
  const windowSize = SetWindowSize();

  return (
      <AppBar sx={{ background: "black", position: "inherit" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <SearchBar />

          <Box sx={{ flexGrow: 1 }} />

          {windowSize >= 900 ? <DesktopSideMenu /> : <MobileSideMenu />}
        </Toolbar>
      </AppBar>
  );
};
