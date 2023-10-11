import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { GameCard } from "./GameCard";
import { getCookie, isLogged } from "../../helpers/helperFunctions";
import { COOKIES_IDS, GENERAL_MESSAGES } from "../../consts/StringConsts";
import { getUserGamesCollection } from "../../services/apiServices";
import { HttpStatusCode } from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../helpers/setWindowSize";
import { EmptyGamesCollection } from "./EmptyGamesCollection";
import { ProfileOptionBackButton } from "../../components/profile/ProfileOptionBackButton";
import { EmptyLine } from "../../components/helper components/EmptyLines";

export const GamesCollectionPage = () => {
  const [gamesCollection, setGamesCollection] = useState([]);
  const navigate = useNavigate();
  const goToHome = () => {
    scrollToTop();
    navigate("/");
  };

  const getGameCollection = async () => {
    if (isLogged()) {
      const user = { username: getCookie(COOKIES_IDS.USERNAME) };
      const res = await getUserGamesCollection(user);
      switch (res?.status) {
        case HttpStatusCode.Ok:
          setGamesCollection(res?.data);
          break;
        default:
          toast.error(GENERAL_MESSAGES.REFRESH);
      }
    } else {
      toast.warning(GENERAL_MESSAGES.LOGIN_BEFORE_ACTION);
      goToHome();
    }
  };

  useEffect(() => {
    getGameCollection();
  }, []);

  return (
    <Container>
      <Container
        sx={{
          minWidth: "fit-content",
          minHeight: "fit-content",
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          justifyContent: "center",
          paddingTop: "3rem",
          paddingBottom: "3rem",
          paddingLeft: { xs: "1rem", sm: "2rem", md: "3rem", lg: "4rem" },
          paddingRight: { xs: "1rem", sm: "2rem", md: "3rem", lg: "4rem" },
        }}
      >
        {gamesCollection.length > 0 ? (
          gamesCollection.map((game) => {
            return <GameCard key={game?.gameID} game={game} />;
          })
        ) : (
          <EmptyGamesCollection />
        )}
      </Container>
      <EmptyLine />
      <ProfileOptionBackButton />
    </Container>
  );
};
