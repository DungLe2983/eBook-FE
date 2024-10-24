import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = [
      {
          product_item_id: {
              product_id: {
                  image: [
                      'https://bookshop.ge/content/uploads/products/9781405946124.jpg',
                  ],
                  name: 'This Time Tomorrow',
              },

              Author: {
                  name: 'Penguin Books Ltd',
              },
              price: 150000,
          },
          item_quantity: 2,
      },
      {
          product_item_id: {
              product_id: {
                  image: [
                      'https://bookshop.ge/content/uploads/products/9781405946124.jpg',
                  ],
                  name: 'This Time Tomorrow',
              },
              Author: {
                  name: 'Emma Straub',
              },
              price: 200000,
          },
          item_quantity: 1,
      },
  ];
    return (
        <div className='max-w-7xl mx-auto my-24'>
            <h2 className='text-center font-bold text-3xl mt-8'>
                Giỏ hàng của bạn
            </h2>
            <p className='text-center text-sm mt-2'>
                Có <span className='font-semibold'>5 sản phẩm</span> trong giỏ
                hàng
            </p>
            <div className='table-container mt-16'>
                <div className='relative overflow-x-auto shadow-md '>
                    <table className='w-full text-sm text-left rtl:text-right text-gray-400 bg-gray-700'>
                        <thead className='text-xs  uppercase bg-gray-700 text-gray-400'>
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
                            </tr>
                        </thead>
                        {cartItems.map((item, index) => (
                            <tbody>
                                <tr className=' border-b bg-gray-800 border-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600'>
                                    <td className='p-4'>
                                        <div className='flex gap-2'>
                                            <img
                                                className='w-32 h-32 object-cover'
                                                src={
                                                    item.product_item_id
                                                        .product_id.image[0]
                                                }
                                                alt='productInCartImg'
                                            />
                                            <div className='flex flex-col gap-2 text-sm'>
                                                <p className='text-white text-lg font-semibold'>
                                                    {
                                                        item.product_item_id
                                                            .product_id.name
                                                    }
                                                </p>
                                                <p>
                                                    {' '}
                                                    {
                                                        item.product_item_id
                                                            .Author.name
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='pl-16 md:px-6 py-4'>
                                        <div className='flex items-center gap-0'>
                                            <input
                                                id='quantity'
                                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm block h-6 w-12  text-center appearance-none'
                                                required
                                                value={item.item_quantity}
                                                min='1'
                                                type='number'
                                            />
                                        </div>
                                    </td>
                                    <td className='px-6 py-4 font-semibold text-gray-100'>
                                        {item.product_item_id.price.toLocaleString()}{' '}
                                        đ
                                    </td>
                                    <td className='px-6 py-4 font-semibold text-gray-100'>
                                        {(
                                            item.product_item_id.price *
                                            item.item_quantity
                                        ).toLocaleString()}{' '}
                                        đ
                                    </td>
                                    <td className='px-6 py-4'>
                                        <i className='ri-delete-bin-fill text-red-500 hover:text-red-400 text-xl cursor-pointer'></i>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
                <div className='mt-6 flex md:justify-end'>
                    <div className='text-right flex flex-col gap-4 '>
                        <div className=' flex flex-col md:flex-row items-baseline md:gap-60'>
                            <p className='font-semibold text-white'>
                                Tổng tiền:
                            </p>
                            <span className='text-red-500 font-semibold text-xl'>
                                500.000 VNĐ
                            </span>
                        </div>
                        <Link
                            to={'/checkout'}
                            className=' text-center bg-blue-400 font-bold py-3 w-full px-2 text-white '
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
