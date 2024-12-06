import axios from "axios";

export const getAllBooks = async () => {
  try {
    const response = await axios.get(
      "https://localhost:44392/api/Book?pageNumber=1&pageSize=50"
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

export const getRecommendedBookById = async (id) => {
  try {
    const response = await axios.get(
      `https://localhost:44392/api/Book/${id}/recommendations`
    );
    return response.data;
  } catch (error) {
    console.log("Failed to get recommendations Book");
  }
};

export const getProductsBySearchTerm = async (searchTerm) => {
  try {
    const response = await axios.get(
      ` https://localhost:44392/api/Book?Title=${searchTerm}&pageNumber=1&pageSize=20`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products by search:", error);
  }
};
