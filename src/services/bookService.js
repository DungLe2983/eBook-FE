import axios from "axios";

export const getAllBooks = async () => {
  try {
    const response = await axios.get(
      "https://localhost:44392/api/Book?pageNumber=1&pageSize=20"
    );
    return response.data;
  } catch (error) {
    console.log("Failed to fetch allBooks");
  }
};

export const getBookById = async (id) => {
  try {
    const response = await axios.get(`https://localhost:44392/api/Book/${id}`);
    return response.data;
  } catch (error) {
    console.log("Failed to get Book");
  }
};
