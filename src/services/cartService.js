import axios from "axios";

export const postCartID = async (userId) => {
  try {
    const response = await axios.post(`https://localhost:44392/api/Cart`, {
      userId: userId,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to add to cart:", error);
    throw error;
  }
};

export const createCartItem = async (cartId, bookId, quantity, priceAtTime) => {
  try {
    const response = await axios.post(`https://localhost:44392/api/CartItem`, {
      cartId: cartId,
      bookId: bookId,
      quantity: quantity,
      priceAtTime: priceAtTime,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to create cart item:", error);
    throw error;
  }
};

export const getCartItemsByCartId = async (cartId) => {
  try {
    const response = await axios.get(
      `https://localhost:44392/api/CartItem/cartId/${cartId}`
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch cart items:", error);
    throw error;
  }
};

export const deleteCartItem = async (cartItemId) => {
  try {
    const response = await axios.delete(
      `https://localhost:44392/api/CartItem/${cartItemId}`
    );
    return response.data;
  } catch (error) {
    console.error(`Failed to delete CartItem with ID: ${cartItemId}`, error);
    throw error;
  }
};

export const getCartIdByUserId = async (userId) => {
  try {
    const response = await axios.get(
      `https://localhost:44392/api/Cart/user/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch cart ID:", error);
    throw error;
  }
}
