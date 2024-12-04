import axios from "axios";

export const login = async (username, password) => {
  try {
    const response = await axios.post(
      "https://localhost:44392/api/Auth/login",
      {
        username,
        password,
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || "Login failed";
  }
};


