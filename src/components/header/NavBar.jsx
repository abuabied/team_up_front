import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { SearchBar } from "./SearchBar";
import { DesktopSideMenu } from "./DesktopSideMenu";
import { MobileSideMenu } from "./MobileSideMenu";
import SetWindowSize from "../../helpers/setWindowSize";
import { MenuBar } from "./app_bar/MenuBar";

export const NavBar = () => {
  const windowSize = SetWindowSize();

  return (
    <AppBar sx={{ background: "black", position: "inherit" }}>
      <Toolbar>
        <MenuBar />

        <SearchBar />
        <Box sx={{ flexGrow: 1 }} />

        {windowSize >= 900 ? <DesktopSideMenu /> : <MobileSideMenu />}
      </Toolbar>
    </AppBar>
  );
};
