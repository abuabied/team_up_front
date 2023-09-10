import { Search, SearchIconWrapper, StyledInputBase } from "./styled";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = () => {
  return (
    <Search sx={{ minWidth: { md: "50%", xl: "35%" } }}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        fullWidth={true}
        placeholder="Search for Games, Users..."
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};
