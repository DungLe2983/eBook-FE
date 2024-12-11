import axios from "axios";

export const createOrder = async (userId) => {
  try {
    const response = await axios.post(`https://localhost:44392/api/Order`, {
      userId,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to create orderId:", error);
    throw error;
  }
};

export const createOrderItem = async (
  orderId,
  bookId,
  quantity,
  priceAtTime
) => {
  try {
    const response = await axios.post(`https://localhost:44392/api/OrderItem`, {
      orderId: orderId,
      bookId: bookId,
      quantity: quantity,
      priceAtTime: priceAtTime,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to create order item:", error);
    throw error;
  }
};

export const updateOrder = async (id, totalAmount, status) => {
  try {
    const response = await axios.put(
      `https://localhost:44392/api/Order/${id}`,
      {
        totalAmount,
        status,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to update order:", error);
    throw error;
  }
};
