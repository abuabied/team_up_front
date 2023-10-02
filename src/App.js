import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./pages/layout/Layout";
import { NoPage } from "./pages/no_page/NoPage";
import { Home } from "./pages/home/Home";
import { HelpPage } from "./pages/help/Help";
import { ProfileView } from "./pages/profile/ProfileView";
import { ProfilePageOutlet } from "./pages/profile/ProfilePageOutlet";
import { LoginView } from "./pages/profile/LoginView";
import { RegisterView } from "./pages/profile/RegisterView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<ProfilePageOutlet />}>
            <Route index element={<ProfileView />} />
            <Route path="/profile/login" element={<LoginView />} />
            <Route path="/profile/register" element={<RegisterView />} />
          </Route>{" "}
          <Route path="/help" element={<HelpPage />} />
          <Route path="/*" element={<NoPage />} />
        </Route>{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;