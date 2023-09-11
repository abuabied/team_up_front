import { Outlet, useNavigate } from "react-router-dom";
import { FooterDiv, HeaderDiv, Page, PageContent } from "./styled";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavBar } from "../../components/header/NavBar";
import { scrollToTop } from "../../helpers/setWindowSize";

export const Layout = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    scrollToTop();
    navigate("/");
  };

  return (
    <Page>
      <HeaderDiv>
        <NavBar />
      </HeaderDiv>

      <PageContent>
        <Outlet />
      </PageContent>

      <FooterDiv>
        <FooterDiv onClick={goToHome} style={{ maxWidth: "fit-content", cursor: "pointer" }}>
          <i
            className="fa-brands fa-creative-commons fa-flip fa-2xl"
            style={{ color: "#fafafa" }}
          ></i>
          <h5 style={{ color: "#f5fffa" }}>{"M.A."}</h5>
        </FooterDiv>
      </FooterDiv>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </Page>
  );
};
