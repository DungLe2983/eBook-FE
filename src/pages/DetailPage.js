import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams từ react-router-dom
import { getBookById, getRecommendedBookById } from "../services/bookService"; // Import bookService
import Loader from "../components/Loader";
import Card from "../components/Card";

const DetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [recommendBooks, setRecommendBooks] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const response = await getBookById(id);
      setProduct(response.data);
      const resRecommendBooks = await getRecommendedBookById(id);
      setRecommendBooks(resRecommendBooks.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (!product) {
    return <div>Product not found</div>;
  }
  const incrementQuantity = () => {
    if (quantity < product.stockQuantity) {
      setQuantity(quantity + 1);
    }
  };

  // Hàm giảm số lượng sản phẩm
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <section className='mt-20 pb-12 lg:py-8 h-full flex flex-col items-center max-w-7xl mx-auto'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-8 md:flex-row'>
          <img
            alt='ProductImg'
            src={product.coverImage}
            className='w-[347px] h-[535px] object-cover'
          />
          <div className='text-left'>
            <div className='my-2 text-base md:text-xl text-yellow-400 flex items-center gap-1'>
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <i key={index} className='ri-star-fill'></i>
                ))}
            </div>
            <h2 className='text-base md:text-3xl font-semibold text-white mt-4'>
              {product.title}
            </h2>
            <p className='text-gray-400 mt-1'>
              <span className='text-blue-400'>{product.author}</span> (Author)
            </p>
            <div className='mt-4'>
              <p className='text-base font-semibold mb-2'>
                Publisher:{" "}
                <span className='text-gray-100'>{product.publisher.name}</span>
              </p>
              <p className='mb-2'>
                Published:{" "}
                <span className='text-gray-100'>{product.publicationYear}</span>
              </p>
              <p className='mb-2'>
                <span className='font-semibold'>Category:</span>{" "}
                <span className='text-gray-100'>{product.category}</span>
              </p>
              <p className='mb-2'>
                <span className='font-semibold'>Language:</span>{" "}
                <span className='text-gray-100'>English, Vietnamese</span>
              </p>
            </div>
            <p className='mb-2'>
              <span className='font-semibold'>Price:</span>{" "}
            </p>
            <div className='text-xl md:text-3xl text-red-500 font-medium my-2'>
              {product.price.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </div>
            <p className='mt-2 font-semibold text-sm'>Quantity:</p>
            <div className='flex items-center my-2 '>
              <button
                onClick={decrementQuantity}
                className='inline-flex items-center justify-center border-r-0 text-sm font-medium h-8 w-8 text-white border border-gray-300'
              >
                -
              </button>
              <input
                value={quantity}
                readOnly
                className='border border-gray-300 text-white bg-black text-sm block h-8 w-10 text-center outline-none'
              />
              <button
                onClick={incrementQuantity}
                className='inline-flex items-center justify-center h-8 w-8 border-l-0 text-sm font-medium text-white border border-gray-300'
              >
                +
              </button>
              <p className='mx-5 text-sm'>
                Còn lại{" "}
                <span className='text-orange-500 font-bold'>
                  {product.stockQuantity}
                </span>{" "}
                sản phẩm
              </p>
            </div>
            <button className='bg-blue-400 rounded font-bold py-4 px-8 hover:scale-105 transition-all text-white mt-6 flex gap-2 text-sm'>
              <i className='ri-shopping-cart-2-fill'></i>
              <span>Add to Cart</span>
            </button>
          </div>
        </div>

        <div>
          <p className='mt-12 text-xl text-white font-semibold underline'>
            Description:
          </p>
          <p className='text-xs md:text-base text-gray-300 mt-5'>
            {product.description}
          </p>
        </div>

        <div className='bg-slate-800 text-gray-400 max-w-7xl mx-auto mt-8 px-4 py-6 flex justify-end flex-col gap-2 text-sm rounded-lg'>
          <p className='font-semibold'>
            Miễn phí giao hàng nhanh toàn quốc cho đơn hàng trên 200.000đ
          </p>
          <div className='flex gap-2 items-center'>
            <i className='ri-building-fill text-primary text-xl'></i>
            <span>Nội thành Hà Nội và HCM nhận hàng trong 1-2 ngày</span>
          </div>
          <div className='flex gap-2 items-center'>
            <i className='ri-shield-star-fill text-primary text-xl'></i>
            <span>Ở tỉnh thành khác nhận hàng từ 2-5 ngày</span>
          </div>
        </div>

        <div>
          <h2 className='text-3xl my-10 text-white text-center font-semibold '>
            Các sản phẩm tương tự
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-[20px] gap-y-10 p-4 '>
            {recommendBooks?.slice(0, 4).map((book) => {
              return (
                <Card
                  key={book.id}
                  id={book.id}
                  name={book.title}
                  author={book.authors?.[0]?.name || "Unknown Author"}
                  price={book.price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                  image={book.coverImage}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
