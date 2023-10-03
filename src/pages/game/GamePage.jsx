import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getGameById } from "../../services/apiServices";
import { Box, Card, Typography } from "@mui/material";
import { EmptyLine } from "../../components/helper components/EmptyLines";
import YouTube from "react-youtube";
import { scrollToTop } from "../../helpers/setWindowSize";

export const GamePage = () => {
  const [game, setGame] = useState(null);
  const { id } = useParams();
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
    color: "ghostwhite",
    margin: 0,
    fontFamily: "Roboto, Helvetica,Arial,sans-serif",
    fontWeight: 500,
    fontSize: "1rem",
    lineHeight: 1.5,
    letterSpacing: "0.01em",
  };

  useEffect(() => {
    const getGameDetails = async () => {
      await getGameById(id).then((data) => {
        if (data === null) {
          goToGameNotFound();
        } else {
          setGame(data);
        }
      });
    };
    getGameDetails();
  }, [id]);

  return (
    <Box
      sx={{
        padding: { xs: "1rem", sm: "2rem", md: "3rem", lg: "4rem", xl: "5rem" },
        backgroundColor: "#121212",
      }}
    >
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
        <Box
          sx={{
            maxHeight: { sm: "90vh", md: "65vh" },
            maxWidth: { sm: "90vh", md: "65vh" },
          }}
        >
          <img
            style={{ maxHeight: "100%", maxWidth: "100%" }}
            src={game?.logoScreenshot?.fullRes}
            alt={"gameImg"}
            loading="lazy"
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
          <Typography sx={secondaryTextStyle}>{"Rating:"}</Typography>
          <Typography sx={mainTextStyle}>{game?.Rating?.value}</Typography>
        </Box>
        <Box>
          <Typography sx={secondaryTextStyle}>{"Description:"}</Typography>
          <Typography sx={mainTextStyle}>{game?.description}</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Typography sx={secondaryTextStyle}>{"Trailers:"}</Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
            {game?.trailers.map((trailer, index) => {
              return (
                <Card key={index}>
                  <YouTube key={trailer?.videoId} videoId={trailer?.videoId} />
                </Card>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
