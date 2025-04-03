import axios from "axios";

export const checkAuth = async () => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8080/auth/refresh",
      null,
      { withCredentials: true }
    );
    console.log("user is authenticated.");
    return true;
  } catch (error) {
    console.log("user is not authenticated.");
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
    console.log("user logged in.");
  } catch (error) {
    console.log("user login failed.");
  }
};

export const logout = async () => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8080/auth/logout",
      null,
      { withCredentials: true }
    );
    console.log("user logged out.");
  } catch (error) {
    console.log("user logout failed.");
  }
};
