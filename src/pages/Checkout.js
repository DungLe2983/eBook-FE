import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { deleteCartItem, getCartItemsByCartId } from "../services/cartService";
import { getBookById } from "../services/bookService";
import { getUserById } from "../services/profileService";
import {
  createOrder,
  createOrderItem,
  updateOrder,
} from "../services/orderService";

const Checkout = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const cartId = localStorage.getItem("cartId");
  const userId = localStorage.getItem("id");
  const [userData, setUserData] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchCartItemsWithBookDetails = async () => {
      try {
        if (!cartId) {
          console.error("Cart ID not found in localStorage");
          return;
        }
        const response = await getCartItemsByCartId(cartId);
        const cartData = response.data;

        const updatedCartItems = await Promise.all(
          cartData.map(async (item) => {
            const book = await getBookById(item.bookId);
            return { ...item, book };
          })
        );
        setCartItems(updatedCartItems);
        calculateTotalPrice(updatedCartItems);
      } catch (error) {
        console.error("Error fetching cart items or book details:", error);
      }
    };

    fetchCartItemsWithBookDetails();
  }, [cartId]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserById(userId);
        setUserData(data.data);
      } catch (err) {
        toast.error("Error fetching user data");
      }
    };

    fetchUserData();
  }, []);

  const calculateTotalPrice = (items) => {
    const total = items.reduce((sum, item) => sum + item.priceAtTime, 0);
    setTotalPrice(total);
  };

  //   const handleCreateOrder = () => {
  //     toast.success("Đặt hàng thành công");
  //     setTimeout(() => {
  //       navigate("/success");
  //     }, 1500);
  //   };
  const handleCreateOrder = async () => {
    try {
      // 1. Tạo Order
      const order = await createOrder(userId);
      const orderId = order.data.id;
      console.log("OrderID ====", orderId);

      // 2. Tạo OrderItem cho từng sản phẩm trong giỏ hàng
      for (const item of cartItems) {
        const { bookId, quantity, priceAtTime } = item;
        await createOrderItem(orderId, bookId, quantity, priceAtTime);
      }

      // 3. Xóa các CartItem tương ứng sau khi tạo OrderItem thành công
      for (const item of cartItems) {
        await deleteCartItem(item.id); // item.id là ID của CartItem
      }

      // 4. Cập nhật Order với tổng giá trị và trạng thái
      await updateOrder(orderId, totalPrice + 30000, "Pending");

      // 5. Hiển thị thông báo thành công và điều hướng đến trang success
      toast.success("Đặt hàng thành công");
      setTimeout(() => {
        navigate("/success");
      }, 1500);
    } catch (error) {
      console.error("Đặt hàng thất bại:", error);
      toast.error("Đặt hàng thất bại, vui lòng thử lại!");
    }
  };

  return (
    <div className='text-gray-100 my-20'>
      <div className='flex flex-col items-center py-4 sm:flex-row px-14'>
        <a href='/' className='text-2xl font-bold text-white'>
          Thông tin vận chuyển
        </a>
      </div>
      <div className='grid px-2 md:px-10 lg:grid-cols-2'>
        <div className='mt-10 bg-gray-800 px-8 pt-8 lg:mt-0 rounded-l border-r border-gray-600 py-4'>
          <p className='text-xl font-medium text-white'>Thông tin chi tiết</p>
          <p className='text-gray-400'>Kiểm tra thông tin liên hệ của bạn</p>
          <div>
            <label
              htmlFor='email'
              className='mt-4 mb-2 block text-sm font-medium text-gray-200'
            >
              Email
            </label>
            <div className='relative'>
              <input
                type='text'
                id='email'
                name='email'
                required
                className='w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-3 pl-11 text-sm shadow-sm outline-none text-white focus:border-gray-500'
                value={userData?.email || ""}
                disabled
              />
              <div className='pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3'>
                <i className='ri-mail-send-line text-gray-400'></i>
              </div>
            </div>

            <label
              htmlFor='Username'
              className='mt-4 mb-2 block text-sm font-medium text-gray-200'
            >
              Họ và tên
            </label>
            <div className='relative'>
              <input
                type='text'
                id='Username'
                name='Username'
                required
                className='w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none text-white focus:border-gray-500'
                value={userData?.fullName || ""}
                disabled
              />
              <div className='pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3'>
                <i className='ri-id-card-line text-gray-400'></i>
              </div>
            </div>

            <label
              htmlFor='UserPhone'
              className='mt-4 mb-2 block text-sm font-medium text-gray-200'
            >
              Số điện thoại
            </label>
            <div className='relative'>
              <input
                id='UserPhone'
                name='UserPhone'
                required
                className='w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-3 pl-11 text-sm shadow-sm outline-none text-white focus:border-gray-500'
                value={userData?.phoneNumber || ""}
                disabled
              />
              <div className='pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3'>
                <i className='ri-phone-line text-gray-400'></i>
              </div>
            </div>

            <label
              htmlFor='billing-address'
              className='mt-4 mb-2 block text-sm font-medium text-gray-200'
            >
              Địa chỉ giao hàng
            </label>
            <div className='relative'>
              <input
                type='text'
                id='billing-address'
                name='billing-address'
                list='address-list'
                value={userData?.address || ""}
                className='w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-3 pl-11 text-sm shadow-sm outline-none text-white focus:border-gray-500'
                autoComplete='off'
                disabled
              />

              <div className='pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3'>
                <i className='ri-home-8-line text-gray-400'></i>
              </div>
            </div>

            <div className='mt-6 border-t border-b py-2 pr-2'>
              <div className='flex items-center justify-between'>
                <p className='text-sm font-medium text-gray-200'>Tạm tính</p>
                <p className='font-semibold text-gray-200'>
                  {totalPrice.toLocaleString()} ₫
                </p>
              </div>

              <div className='flex items-center justify-between'>
                <p className='text-sm font-medium text-gray-200'>
                  Phí giao hàng
                </p>
                <p className='font-semibold text-gray-200'>30.000 ₫</p>
              </div>
            </div>
            <div className='mt-6 flex items-center justify-between'>
              <p className='text-sm font-medium text-gray-200'>Tổng</p>
              <p className='text-2xl font-semibold text-gray-200'>
                {(totalPrice + 30000).toLocaleString()} ₫
              </p>
            </div>

            <div className='mt-6 border-t border-gray-700 py-2'>
              <button
                onClick={handleCreateOrder}
                className='mt-4 mb-8 w-full rounded-md bg-blue-400 hover:bg-blue-500 px-6 py-3 font-medium text-white'
              >
                Đặt hàng
              </button>
            </div>
          </div>
        </div>

        <div className='mt-10 bg-gray-800 px-4 pt-8 lg:mt-0 rounded-r'>
          <h2 className='text-xl font-medium text-white px-4'>
            Giỏ hàng của bạn
          </h2>
          <ul className='mt-8 space-y-4 px-4'>
            {cartItems.map((item, index) => (
              <li key={index} className='flex items-center justify-between'>
                <div className='flex '>
                  <img
                    src={item.book?.data.coverImage}
                    alt=''
                    className='mr-4 h-20 w-16 rounded object-cover'
                  />
                  <div>
                    <h3 className='text-lg text-gray-100 font-semibold'>
                      {item.book?.data.title}
                    </h3>
                    <p className='text-gray-400'>
                      {item.book?.data.authors?.[0]?.name || "Unknown Author"}
                    </p>
                    <p className='text-gray-100'>
                      Giá: {item.book?.data.price.toLocaleString()} đ x{" "}
                      {item.quantity}
                    </p>
                  </div>
                </div>
                <p className='text-gray-100'>
                  {item.priceAtTime.toLocaleString()} đ
                </p>
              </li>
            ))}
          </ul>

          <h2 className='text-xl font-medium text-white px-4 mt-10'>
            Phương thức thanh toán
          </h2>
          <form className='mt-5 grid gap-2 px-4'>
            <div className='relative'>
              <input
                className='peer hidden'
                type='radio'
                id='hideRadio'
                name='imageToggle'
              />
              <span className='peer-checked:border-gray-500 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-600 bg-gray-900'></span>
              <label
                className='peer-checked:border-2 peer-checked:border-gray-500 peer-checked:bg-gray-800 flex cursor-pointer select-none rounded-lg border border-gray-600 p-4 bg-gray-700 text-gray-100'
                htmlFor='hideRadio'
              >
                <div className='flex items-center'>
                  <i className='ri-truck-line text-4xl text-blue-400'></i>
                  <div className='ml-5'>
                    <span className='mt-2 font-semibold text-blue-400'>
                      COD
                    </span>
                    <p className='text-gray-400 text-sm leading-6'>
                      Thanh toán khi nhận hàng
                    </p>
                  </div>
                </div>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
