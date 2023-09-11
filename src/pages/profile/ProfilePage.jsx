import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../helpers/setWindowSize";

export const ProfilePage = () => {
  const navigate = useNavigate();
  const goToSignIn = () => {
    scrollToTop();
    navigate("/profile/sign-in");
  };
  let notSigned = true;

  useEffect(() => {
    if (notSigned) {
      goToSignIn();
    }
  });

  return <h1>hi</h1>;
};
