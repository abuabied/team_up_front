import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, Button, Card, CardHeader, CardMedia } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { useState } from "react";
import {
  addGameToCollection,
  removeGameFromCollection,
} from "../../services/apiServices";
import { HttpStatusCode } from "axios";
import { getCookie, isLogged, setCookie } from "../../helpers/helperFunctions";
import { toast } from "react-toastify";
import {
  COOKIES_IDS,
  GAME_COLLECTION_ACTIONS,
} from "../../consts/StringConsts";
import { scrollToTop } from "../../helpers/setWindowSize";
import { useNavigate } from "react-router-dom";

export const GameCard = ({ game }) => {
  const navigate = useNavigate();
  const goToGamePage = (gameID) => {
    navigate(`/game/${gameID}`);
    scrollToTop();
  };

  const [isInCollection, setIsInCollection] = useState(true);
  const gameCollectionActionButtonFunction = async () => {
    if (!isLogged()) {
      toast.warning(GAME_COLLECTION_ACTIONS.LOGIN_BEFORE_ACTION);
    } else {
      const gameData = {
        gameID: game?.gameID,
        name: game?.name,
        imageURL: game?.imageURL,
      };
      const username = getCookie(COOKIES_IDS.USERNAME);
      const userData = { username: username };
      const userGame = { user: userData, game: gameData };
      const res = isInCollection
        ? await removeGameFromCollection(userGame)
        : await addGameToCollection(userGame);
      switch (res?.status) {
        case HttpStatusCode.Ok:
          console.log(res?.data);
          if (isInCollection) {
            toast.success(GAME_COLLECTION_ACTIONS.GAME_REMOVED_FROM_COLLECTION);
            setIsInCollection(false);
          } else {
            toast.success(GAME_COLLECTION_ACTIONS.GAME_ADDED_TO_COLLECTION);
            setIsInCollection(true);
          }
          setCookie(COOKIES_IDS.GAME_COLLECTION, res?.data);
          break;
        default:
          toast.error(GAME_COLLECTION_ACTIONS.ERROR_GENERAL);
      }
    }
  };

  return (
    <Card
      sx={{
        width: { xs: "250px", sm: "250px", md: "300px", lg: "350px" },
        height: "fit-content",
      }}
    >
      <CardHeader
        onClick={() => {
          goToGamePage(game?.gameID);
        }}
        title={game?.name}
        sx={{
          padding: "0.5rem",
          color: "ghostwhite",
          backgroundColor: "black",
          opacity: "80%",
          width: { xs: "250px", sm: "250px", md: "300px", lg: "350px" },
          height: "fit-content",
          textAlign: "center",
          cursor: "pointer",
          textDecoration: "underline"
        }}
      />
      <CardMedia
        sx={{
          width: { xs: "250px", sm: "250px", md: "300px", lg: "350px" },
          height: { xs: "250px", sm: "250px", md: "300px", lg: "350px" },
        }}
      >
        <img
          style={{ maxHeight: "100%", maxWidth: "100%" }}
          src={`https://img.opencritic.com/${game?.imageURL}`}
          alt={"gameImg"}
        />
      </CardMedia>

      <Box
        sx={{
          width: { xs: "250px", sm: "250px", md: "300px", lg: "350px" },
          padding: 0,
        }}
      >
        <Box>
          <Button
            height={"3rem"}
            color={isInCollection ? "error" : "success"}
            component="label"
            variant="contained"
            startIcon={
              isInCollection ? <RemoveCircleOutlineIcon /> : <LibraryAddIcon />
            }
            sx={{
              borderRadius: 0,
              width: { xs: "250px", sm: "250px", md: "300px", lg: "350px" },
              fontSize: { xs: "small", sm: "small", md: "medium", lg: "large" },
            }}
            onClick={gameCollectionActionButtonFunction}
          >
            {isInCollection ? "Remove from collection" : "Add to collection"}
          </Button>
        </Box>
        <Box>
          <Button
            height={"3rem"}
            color={"info"}
            component="label"
            variant="contained"
            startIcon={<AddCircleIcon />}
            sx={{
              borderRadius: 0,
              width: { xs: "250px", sm: "250px", md: "300px", lg: "350px" },
              fontSize: { xs: "small", sm: "small", md: "medium", lg: "large" },
            }}
          >
            {"New session"}
          </Button>
        </Box>
      </Box>
    </Card>
  );
};
