export const getCookie = (name) => {
    function escape(s) { return s.replace(/([.*+?^$(){}|[\]/\\])/g, '\\$1'); }
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
    return match ? match[1] : undefined;
}

export const setCookie = (name, value, hoursToExpire=4) => {
  // Calculate the expiration date
  const date = new Date();
  date.setTime(date.getTime() + hoursToExpire * 60 * 60 * 1000);

  // Format the cookie string with secure and sameSite attributes
  const expires = "expires=" + date.toUTCString();
  const secureFlag = "secure"; // Set the secure flag for HTTPS
  const sameSite = "SameSite=None; Secure"; // Set SameSite and Secure for cross-origin cookies
  const cookieString = `${name}=${value}; ${expires}; path=/; ${secureFlag}; ${sameSite}`;

  // Set the cookie
  document.cookie = cookieString;
}