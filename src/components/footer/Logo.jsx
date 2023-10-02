import { useNavigate } from "react-router-dom";
import { FooterDiv } from "../../pages/layout/styled";
import { scrollToTop } from "../../helpers/setWindowSize";

export const Logo = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    scrollToTop();
    navigate("/");
  };

  return (<FooterDiv
    onClick={goToHome}
    style={{ maxWidth: "fit-content", cursor: "pointer" }}
  >
    <i
      className="fa-brands fa-creative-commons fa-flip fa-2xl"
      style={{ color: "#fafafa" }}
    ></i>
    <h5 style={{ color: "#f5fffa" }}>{"M.A."}</h5>
  </FooterDiv>);
};
