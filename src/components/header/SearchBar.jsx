import { Search, SearchIconWrapper, StyledInputBase } from "./styled";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { SearchResultsContainer } from "./SearchResultContainer";

export const SearchBar = () => {

  const [searchWord, setSearchWord] = useState("");

  const getSearchResults = () => {
    const word = document.getElementById("search-input").value;
    setSearchWord(word);
  }

  return (
    <Search
      sx={{ minWidth: { md: "50%", xl: "35%" } }}
    >
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
      id="search-input"
        fullWidth={true}
        placeholder="Search for a game..."
        //inputProps={{ "aria-label": "search" }}
        onChange={getSearchResults}
      />
      <SearchResultsContainer searchWord={searchWord} />
    </Search>
  );
};
