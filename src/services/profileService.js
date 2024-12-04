import axios from "axios";

export const getUserById = async (userId) => {
  try {
    const response = await axios.get(
      `https://localhost:44392/api/Profile/${userId}`
    );
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to fetch user information.";
  }
};

export const updateUserById = async (userId, userData) => {
  try {
    const response = await axios.put(
      `https://localhost:44392/api/Profile/${userId}`,
      userData
    );
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to update user information.";
  }
};
