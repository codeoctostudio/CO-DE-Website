export const setCookie = (name, value, days = 365) => {
  const expires = new Date();
  expires.setDate(expires.getDate() + days);

  document.cookie =
    `${name}=${encodeURIComponent(value)};` +
    `expires=${expires.toUTCString()};` +
    `path=/;SameSite=Lax`;
};

export const getCookie = (name) => {
  const cookies = document.cookie.split(";");

  for (let cookie of cookies) {
    const [key, value] = cookie.trim().split("=");

    if (key === name) {
      return decodeURIComponent(value);
    }
  }

  return null;
};