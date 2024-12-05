import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { getAllBooks } from "../services/bookService";
import Loader from "../components/Loader";

const Newest = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);

        const allBooks = await getAllBooks();
        console.log("allBooks", allBooks);

        // Đảo ngược danh sách và lấy 5 sản phẩm mới nhất
        const reversedBooks = allBooks.data.reverse();

        setBooks(reversedBooks); // Cập nhật danh sách
      } catch (err) {
        setError("Failed to load books. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <p className='text-red-500 text-lg'>{error}</p>
      </div>
    );
  }

  return (
    <div className='py-20'>
      <div className='container mx-auto'>
        <h3 className='capitalize text-white text-lg lg:text-2xl font-semibold my-6 px-6'>
          Newest Books
        </h3>

        {books.length > 0 ? (
          <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-4 justify-center lg:justify-start px-0 lg:px-6'>
            {books.map((book) => (
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
            ))}
          </div>
        ) : (
          <p className='text-white text-lg px-6'>No books found.</p>
        )}
      </div>
    </div>
  );
};

export default Newest;
