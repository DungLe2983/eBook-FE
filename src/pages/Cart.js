import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteCartItem, getCartItemsByCartId } from "../services/cartService";
import { getBookById } from "../services/bookService";
import toast from "react-hot-toast";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const cartId = localStorage.getItem("cartId");

  useEffect(() => {
    const fetchCartItemsWithBookDetails = async () => {
      try {
        if (!cartId) {
          console.error("Cart ID not found in localStorage");
          return;
        }

        // Fetch CartItems
        const response = await getCartItemsByCartId(cartId);
        const cartData = response.data;

        const updatedCartItems = await Promise.all(
          cartData.map(async (item) => {
            const book = await getBookById(item.bookId);
            return { ...item, book };
          })
        );
        // console.log("updatedCartItems===", updatedCartItems);

        setCartItems(updatedCartItems);
        calculateTotalPrice(updatedCartItems);
      } catch (error) {
        console.error("Error fetching cart items or book details:", error);
      }
    };

    fetchCartItemsWithBookDetails();
  }, [cartId]);

  const calculateTotalPrice = (items) => {
    const total = items.reduce((sum, item) => sum + item.priceAtTime, 0);
    setTotalPrice(total);
  };

  //   console.log("cartItems===", cartItems);

  const handleDeleteCartItems = async (cartItemId) => {
    try {
      await deleteCartItem(cartItemId);
      const updatedCartItems = cartItems.filter(
        (item) => item.id !== cartItemId
      );
      setCartItems(updatedCartItems);
      calculateTotalPrice(updatedCartItems);

      toast.success("Xóa sản phẩm thành công!");
    } catch (error) {
      console.error("Failed to delete cart item:", error);
      toast.error("Xóa sản phẩm thất bại!");
    }
  };

  return (
    <div className='max-w-7xl mx-auto my-24'>
      <h2 className='text-center font-bold text-3xl mt-8'>Giỏ hàng của bạn</h2>
      <p className='text-center text-sm mt-2'>
        Có <span className='font-semibold'>{cartItems.length} sản phẩm</span>{" "}
        trong giỏ hàng
      </p>
      <div className='table-container mt-16'>
        <div className='relative overflow-x-auto shadow-md'>
          <table className='w-full text-sm text-left rtl:text-right text-gray-400 bg-gray-700'>
            <thead className='text-xs uppercase bg-gray-700 text-gray-400'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  Thông tin sản phẩm
                </th>
                <th scope='col' className='pl-16 md:px-6 py-3'>
                  Số lượng
                </th>
                <th scope='col' className='px-6 py-3'>
                  Đơn giá
                </th>
                <th scope='col' className='px-6 py-3'>
                  Thành tiền
                </th>
                <th scope='col' className='px-6 py-3'>
                  Xóa
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr
                  key={item.id}
                  className='border-b bg-gray-800 border-gray-700 hover:bg-gray-700'
                >
                  <td className='p-4'>
                    <div className='flex gap-2'>
                      <img
                        className='w-24 h-28 object-cover'
                        src={item.book?.data.coverImage}
                        alt='productInCartImg'
                      />
                      <div className='flex flex-col gap-2 text-sm mt-2'>
                        <p className='text-white text-lg font-semibold'>
                          {item.book?.data.title}
                        </p>

                        <p>
                          {item.book?.data.authors?.[0]?.name ||
                            "Unknown Author"}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className='pl-16 md:px-6 py-4'>
                    <input
                      id='quantity'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm block h-6 w-12 text-center'
                      value={item.quantity}
                      readOnly
                      type='number'
                    />
                  </td>
                  <td className='px-6 py-4 font-semibold text-gray-100'>
                    {(item.priceAtTime / item.quantity).toLocaleString()} đ
                  </td>
                  <td className='px-6 py-4 font-semibold text-gray-100'>
                    {item.priceAtTime.toLocaleString()} đ
                  </td>
                  <td className='px-6 py-4'>
                    <i
                      onClick={() => handleDeleteCartItems(item.id)}
                      className='ri-delete-bin-fill text-red-500 hover:text-red-400 text-xl cursor-pointer'
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='mt-6 flex md:justify-end'>
          <div className='text-right flex flex-col gap-4'>
            <div className='flex flex-col md:flex-row items-baseline md:gap-60'>
              <p className='font-semibold text-white'>Tổng tiền:</p>
              <span className='text-red-500 font-semibold text-xl'>
                {totalPrice.toLocaleString()} VNĐ
              </span>
            </div>
            <Link
              to={"/checkout"}
              className='text-center bg-blue-400 font-bold py-3 w-full px-2 text-white'
            >
              Thanh toán
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
