import ButtonBase from "@mui/material/ButtonBase";

export const StyledButton = ({buttonText, onClick}) => {
  const baseStyle = {
    border: "1px solid #000000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    width: "206px",
    height: "48px",
    textTransform: "uppercase",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "20px",
    textAlign: "center",
    letterSpacing: "2.7px",
    alignSelf: "center",
  };

  const darkMode = {
    background: "#000000",
    color: "#FFFFFF",
    cursor: "pointer"
  };

  return (
    <ButtonBase
      sx={{ ...baseStyle, ...darkMode }}
      onClick={onClick}
    >
      {buttonText}
    </ButtonBase>
  );
};
