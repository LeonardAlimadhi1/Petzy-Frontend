const BASE_URL = process.env.DEV_BASE_URL;
// Initializing important variables
const login = (email, password) =>
  HTTPfetch(`login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((res) => {
    setToken(res.access_token);
    setExpiresIn(res.expires_in);

    return Promise.resolve(res);
  });

const loggedIn = () => {
  // Checks if there is a saved token and it's still valid
  const token = getToken();
  return !!token && !isTokenExpired();
};

const isTokenExpired = () => {
  try {
    const exp = getExpiresIn();
    if (exp < Date.now() / 1000) {
      return true;
    } else return false;
  } catch (err) {
    return false;
  }
};

const setToken = (idToken) => localStorage.setItem("access_token", idToken);

const getToken = () => localStorage.getItem("access_token");

const getExpiresIn = () => localStorage.getItem("access_token");

const setExpiresIn = (expiresIn) =>
  localStorage.setItem("expires_in", expiresIn);

const logout = () => {
  localStorage.removeItem("access_token");
};

const HTTPfetch = (endpoint, options) => {
  // performs api calls sending the required authentication headers
  const onError = (error) => Promise.reject(error.response || error.message);
  const onSuccess = async (response) => {
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(JSON.parse(errorMessage).message || errorMessage);
    }
    return response.json();
  };

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  if (loggedIn()) {
    headers["Authorization"] = `Bearer ${getToken()}`;
  }

  return fetch(BASE_URL + endpoint, {
    ...options,
    headers,
  })
    .then(onSuccess)
    .catch(onError);
};

export {
  login,
  loggedIn,
  isTokenExpired,
  logout,
  getToken,
  setToken,
  getExpiresIn,
  setExpiresIn,
  HTTPfetch,
};
