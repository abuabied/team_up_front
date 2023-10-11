import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./pages/layout/Layout";
import { NoPage } from "./pages/no_page/NoPage";
import { Home } from "./pages/home/Home";
import { HelpPage } from "./pages/help/Help";
import { ProfilePageOutlet } from "./pages/profile/ProfilePageOutlet";
import { RegisterView } from "./pages/profile/RegisterView";
import { GamePage } from "./pages/game/GamePage";
import { GameNotFound } from "./pages/game/GameNotFound";
import { ProfilePage } from "./pages/profile/ProfilePage";
import { ProfileInfo } from "./pages/profile/ProfileInfo";
import { GamesCollectionPage } from "./pages/games_collection/GamesCollectionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<ProfilePageOutlet />}>
            <Route index element={<ProfilePage />} />
            <Route path="/profile/info" element={<ProfileInfo />} />
            <Route path="/profile/register" element={<RegisterView />} />
            <Route path="/profile/gamesCollection" element={<GamesCollectionPage />} />
          </Route>
          <Route path="/help" element={<HelpPage />} />
          <Route path="/game/not-found" element={<GameNotFound />} />
          <Route path="/game/:gameID" element={<GamePage />} />
          <Route path="/*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
