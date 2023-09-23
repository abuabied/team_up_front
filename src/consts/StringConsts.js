export const REGISTRATION_MESSAGES = {
  INVALID_PASSWORD_TOO_SHORT: "Password must be at least 6 charachters long!",
  INVALID_NAME: "Make sure you entered a valid First & Last name!",
  INVALID_USERNAME_TOO_SHORT: "UserName must be at least 3 characters long!",
  INVALID_PASSWORD_NO_LETTER_OR_HAS_SPACE:
    "Password must has at least 1 letter and no spaces!",
  INVALID_PASSWORD_NO_DIGIT: "Password must has at least 1 digit!",
  INVALID_PASSWORD_PASSWORDS_DONT_MATCH: "Passwords don't match!",
  INVALID_USERNAME_HAS_SPACE: "Username can't contain spaces!",
  INVALID_NO_USERNAME: "Provide a Username!",
  INVALID_EMAIL: "Enter a valid Email!",
  REGISTERED: "You are now registered!",
  INVALID_USERNAME_ALREADY_EXIST: "Username already exists!",
  ERROR_GENERAL: "Something happend!",
};

export const LOGIN_MESSAGES = {
  LOGGED_IN: "Welcome!",
  INVALID_CREDINTIALS: "Invalid Login credintials!",
  ERROR_GENERAL: "Something happend!",
};

export const API_PATHS = {
  LOGIN: "/user/login",
  REGISTER: "/user/register",
  GET_USER: "/user/get-user",
};