import { List, ListItem, ListItemButton } from "@mui/material";
import { useEffect, useState } from "react";
import { searchGameByName } from "../../services/apiServices";
import { scrollToTop } from "../../helpers/setWindowSize";
import { useNavigate } from "react-router-dom";

export const SearchResultsContainer = ({ searchWord = "" }) => {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const getSearchResults = async () => {
    await searchGameByName(searchWord).then((data) => {
      setSearchResults(data);
    });
  };

  useEffect(() => {
    if (searchWord === "") {
      setSearchResults([]);
    } else {
      getSearchResults();
    }
  }, [searchWord]);

  const goToGamePage = (gameID) => {
    setSearchResults([]);
    navigate(`/game/${gameID}`);
    scrollToTop();
  };

  return (
    <List
      sx={{
        padding: 0,
        position: "absolute",
        width: "100%",
        backgroundColor: "black",
        maxHeight: "35vh",
        overflowY: "scroll",
      }}
    >
      {searchWord === ""
        ? []
        : searchResults.map((result) => (
            <ListItem
              onClick={() => {goToGamePage(result?.id)}}
              key={result?.id}
              sx={{
                padding: "8px 0 8px 0",
                borderStyle: "solid",
                borderWidth: "1px 0",
                borderColor: "white",
              }}
            >
              <ListItemButton>{result?.name}</ListItemButton>
            </ListItem>
          ))}
    </List>
  );
};
