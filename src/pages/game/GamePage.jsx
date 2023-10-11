import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  addGameToCollection,
  getGameById,
  removeGameFromCollection,
} from "../../services/apiServices";
import { Box, Button, Card, Typography } from "@mui/material";
import { EmptyLine } from "../../components/helper components/EmptyLines";
import YouTube from "react-youtube";
import { scrollToTop } from "../../helpers/setWindowSize";
import { toast } from "react-toastify";
import {
  getCookie,
  isGameInCollection,
  isLogged,
  setCookie,
} from "../../helpers/helperFunctions";
import {
  COOKIES_IDS,
  GAME_COLLECTION_ACTIONS,
} from "../../consts/StringConsts";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { HttpStatusCode } from "axios";

export const GamePage = () => {
  const [game, setGame] = useState(null);
  const [isInCollection, setIsInCollection] = useState();

  const { gameID } = useParams();
  const navigate = useNavigate();
  const goToGameNotFound = () => {
    scrollToTop();
    navigate("/game/not-found");
  };

  const mainTextStyle = {
    color: "ghostwhite",
    margin: 0,
    fontFamily: "Roboto, Helvetica,Arial,sans-serif",
    fontWeight: 500,
    fontSize: "1.5rem",
    lineHeight: 1.5,
    letterSpacing: "0.01em",
  };
  const secondaryTextStyle = {
    color: "#9a9a9a",
    margin: 0,
    fontFamily: "Roboto, Helvetica,Arial,sans-serif",
    fontWeight: 500,
    fontSize: "1rem",
    lineHeight: 1.5,
    letterSpacing: "0.01em",
  };

  useEffect(() => {
    const getGameDetails = async () => {
      await getGameById(gameID).then((data) => {
        if (data === null) {
          goToGameNotFound();
        } else {
          console.log(data);
          setGame(data);
          setIsInCollection(isGameInCollection(gameID));
        }
      });
    };
    getGameDetails();
  }, [gameID]);

  const showRating = (rating) => {
    if (rating !== undefined) {
      return (
        <div>
          <Typography sx={secondaryTextStyle}>{"Rating:"}</Typography>
          <Typography sx={mainTextStyle}>{rating}</Typography>
        </div>
      );
    }
  };

  const gameCollectionActionButtonFunction = async () => {
    if (!isLogged()) {
      toast.warning(GAME_COLLECTION_ACTIONS.LOGIN_BEFORE_ACTION);
    } else {
      const gameData = {
        gameID: game?.id,
        name: game?.name,
        imageURL: game?.images?.square?.og,
      };
      const username = getCookie(COOKIES_IDS.USERNAME);
      const userData = { username: username };
      const userGame = { user: userData, game: gameData };
      const res = isInCollection
        ? await removeGameFromCollection(userGame)
        : await addGameToCollection(userGame);
      switch (res?.status) {
        case HttpStatusCode.Ok:
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
    <Box
      sx={{
        padding: { xs: "1rem", sm: "2rem" },
        backgroundColor: "#121212",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ marginBottom: { xs: "1rem", sm: "2rem" } }}>
        <Button
          color={isInCollection ? "error" : "success"}
          component="label"
          variant="contained"
          startIcon={
            isInCollection ? <RemoveCircleOutlineIcon /> : <LibraryAddIcon />
          }
          onClick={gameCollectionActionButtonFunction}
        >
          {isInCollection ? "Remove from collection" : "Add to collection"}
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: { sm: "center", md: "flex-start" },
            maxHeight: { sm: "90vh", md: "65vh" },
            maxWidth: { sm: "90vh", md: "65vh" },
          }}
        >
          <img
            style={{ maxHeight: "100%", maxWidth: "100%" }}
            src={`https://img.opencritic.com/${game?.images?.square?.og}`}
            alt={"gameImg"}
          />
        </Box>
        <Box>
          <Typography sx={secondaryTextStyle}>{"Name:"}</Typography>
          <Typography sx={mainTextStyle}>{game?.name}</Typography>
          <EmptyLine />
          <Typography sx={secondaryTextStyle}>{"Genre:"}</Typography>
          <Typography sx={mainTextStyle}>
            {game?.Genres.map((genre) => {
              return genre?.name;
            }).join(", ")}
          </Typography>
          <EmptyLine />
          <Typography sx={secondaryTextStyle}>{"Platforms:"}</Typography>
          <Typography sx={mainTextStyle}>
            {game?.Platforms.map((genre) => {
              return genre?.name;
            }).join(", ")}
          </Typography>
          <EmptyLine />
          <Typography sx={secondaryTextStyle}>{"Companies:"}</Typography>
          <Typography sx={mainTextStyle}>
            {game?.Companies.map((genre) => {
              return genre?.name;
            }).join(", ")}
          </Typography>
          <EmptyLine />
          {showRating(game?.Rating?.value)}
        </Box>
        <Box>
          <Typography sx={secondaryTextStyle}>{"Description:"}</Typography>
          <Typography sx={mainTextStyle}>{game?.description}</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Typography sx={secondaryTextStyle}>{"Trailers:"}</Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            {game?.trailers.map((trailer, index) => {
              return (
                <Card key={index}>
                  <YouTube
                    key={trailer?.videoId}
                    videoId={trailer?.videoId}
                    iframeClassName={"ytbGameTrailer"}
                  />
                </Card>
              );
            })}
          </Box>
        </Box>
      </Box>
      <EmptyLine />
      <Box sx={{ marginBottom: { xs: "1rem", sm: "2rem" } }}>
        <Button
          color={isInCollection ? "error" : "success"}
          component="label"
          variant="contained"
          startIcon={
            isInCollection ? <RemoveCircleOutlineIcon /> : <LibraryAddIcon />
          }
          onClick={gameCollectionActionButtonFunction}
        >
          {isInCollection ? "Remove from collection" : "Add to collection"}
        </Button>
      </Box>
    </Box>
  );
};
