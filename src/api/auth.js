import axios from "axios";

export const checkAuth = async () => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8080/auth/refresh",
      null,
      { withCredentials: true }
    );
    console.log("user is authenticated. Status: " + response.status);
    return true;
  } catch (error) {
    console.log("user is not authenticated. Status: " + error.response.status);
    return false;
  }
};

export const login = async (username, password) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8080/auth/login",
      { username: username, password: password },
      { withCredentials: true }
    );
    console.log("user logged in. Status: " + response.status);
  } catch (error) {
    console.log(
      "user login failed. Status: " +
        error.response.status +
        "\n Error: " +
        error.response.data.message
    );
  }
};

export const logout = async () => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8080/auth/logout",
      null,
      { withCredentials: true }
    );
    console.log("user logged out. Status: " + response.status);
  } catch (error) {
    console.log(
      "user logout failed. Status: " +
        error.response.status +
        "\n Error: " +
        error.response.data.message
    );
  }
};
