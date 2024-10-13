import React from 'react';
import RelatedProduct from '../components/RelatedProduct';

const DetailPage = () => {
    return (
        <section className='mt-20 pb-12 lg:py-8 h-full flex flex-col items-center max-w-7xl mx-auto'>
            <div className='container mx-auto'>
                <div className='flex flex-col gap-8 md:flex-row '>
                    <img
                        alt='ProImg'
                        src='https://bookshop.ge/content/uploads/products/9781405946124.jpg'
                        className='w-[347px] h-[535px] object-cover'
                    />
                    <div className='text-left '>
                        <div className='my-2 text-base md:text-xl text-yellow-400 flex  items-center gap-1'>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                        </div>
                        <h2 className='text-base md:text-3xl  font-semibold text-white mt-4 '>
                            This Time Tomorrow
                        </h2>
                        <p className='text-gray-400 mt-1'>
                            <span className='text-blue-400'>Emma Straub</span>{' '}
                            (Author)
                        </p>
                        <div className='mt-4'>
                            <p className='text-base font-semibold mb-2'>
                                Publisher:{' '}
                                <span className='text-gray-100'>
                                    Penguin Books Ltd
                                </span>
                            </p>
                            <p className='mb-2'>
                                <span className='font-semibold'>400 Page</span>{' '}
                                / Published{' '}
                                <span className='text-gray-100'>
                                    2022-09-05
                                </span>
                            </p>
                            <p className='mb-2'>
                                <span className='font-semibold'>Category:</span>{' '}
                                <span className='text-gray-100'>
                                    Fiction, Modern & contemporary fiction
                                </span>
                            </p>

                            <p className='mb-2 '>
                                <span className='font-semibold'>Language:</span>{' '}
                                <span className='text-gray-100'>English</span>
                            </p>
                            <p className='mb-2 '>Description:</p>
                            <p className='my-2 md:max-w-xl text-xs md:text-base text-gray-100'>
                                This is Description of the book.
                            </p>

                            <p className='mb-2'>
                                <span className='font-semibold'>CD/DVD:</span>
                            </p>
                        </div>
                        <div className='text-xl md:text-3xl text-red-500 font-medium my-2 '>
                            500.000 VNĐ
                        </div>
                        <>
                            <p className='mt-2 font-semibold text-sm'>
                                Số lượng :
                            </p>
                            <div className='flex gap-6'></div>
                            <div className='flex flex-row items-center my-2'>
                                <button className='inline-flex items-center justify-center border-r-0 text-sm font-medium h-8 w-8 text-white   border border-gray-300'>
                                    -
                                </button>
                                <input
                                    id='first_product'
                                    value={1}
                                    className=' border border-gray-300 text-white bg-black text-sm block h-8 w-10  text-center outline-none'
                                    required
                                />
                                <button className='inline-flex items-center justify-center h-8 w-8 border-l-0 text-sm font-medium text-white border border-gray-300'>
                                    +
                                </button>
                                <p className='mx-5 text-sm'>
                                    Còn lại{' '}
                                    <span className=' text-orange-500 font-bold'>
                                        25
                                    </span>{' '}
                                    sản phẩm
                                </p>
                            </div>

                            <button className='bg-blue-400 rounded font-bold py-4 px-8 hover:scale-105 transition-all text-white mt-4 flex gap-2 text-sm'>
                                <i className='ri-shopping-cart-2-fill '></i>
                                <span>Add to Cart</span>
                            </button>
                        </>
                    </div>
                </div>

                <div className='bg-slate-800 text-gray-400 max-w-7xl mx-auto mt-8 px-4 py-6  flex justify-end flex-col  gap-2 text-sm rounded-lg'>
                    <p className='font-semibold'>
                        Miễn phí giao hàng nhanh toàn quốc cho đơn hàng trên
                        200.000đ
                    </p>
                    <div className='flex gap-2 items-center'>
                        <i className='ri-building-fill text-primary text-xl'></i>
                        <span>
                            Nội thành Hà Nội và HCM nhận hàng trong 1-2 ngày
                        </span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <i className='ri-shield-star-fill text-primary text-xl'></i>
                        <span>Ở tỉnh thành khác nhận hàng từ 2-5 ngày</span>
                    </div>
                </div>

                <div>
                    <RelatedProduct />
                </div>
            </div>
        </section>
    );
};

export default DetailPage;
