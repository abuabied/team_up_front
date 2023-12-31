import ButtonBase from "@mui/material/ButtonBase";

export const StyledButton = ({
  buttonText,
  onClick,
  disabled,
  textTransform = "uppercase",
}) => {
  const baseStyle = {
    border: "1px solid #000000",
    display: "flex",
    gap: "10px",
    width: "206px",
    height: "48px",
    textTransform: textTransform,
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "20px",
    textAlign: "center",
    letterSpacing: "2.7px",
    maxWidth: "100%",
  };

  const darkMode = {
    background: "#000000",
    color: "#FFFFFF",
    cursor: "pointer",
  };

  const disabledMode = {
    background: "#979797",
    color: "#000000",
    cursor: "not-allowed",
  };
  const buttonStyle = disabled ? disabledMode : darkMode;

  return (
    <ButtonBase
      disabled={disabled}
      sx={{ ...baseStyle, ...buttonStyle }}
      onClick={onClick}
    >
      {buttonText}
    </ButtonBase>
  );
};
