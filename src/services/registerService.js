import axios from "axios";

export const register = async (email, username, fullName, password) => {
  try {
    const payload = { email, username, fullName, password };
    const response = await axios.post(
      "https://localhost:44392/api/Auth/register", // Đảm bảo URL là đúng
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response;
  } catch (error) {
    throw (
      error.response?.data?.message ||
      "Something went wrong, please try again later."
    );
  }
};
