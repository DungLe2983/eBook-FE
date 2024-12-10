import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useParams } from "react-router-dom";
import { getAllBooks } from "../services/bookService";
import Loader from "../components/Loader";

const ExplorePage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const param = useParams();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);

        const allBooks = await getAllBooks();
        // console.log("allBooks", allBooks);
        // Lọc sách theo thể loại (param.explore)
        const filteredBooks = allBooks.data.filter((book) =>
          book.categories.some(
            (category) =>
              category.name.toLowerCase() === param.explore.toLowerCase()
          )
        );
        setBooks(filteredBooks);
      } catch (err) {
        setError("Failed to load books. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [param.explore]);

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
          Popular {param.explore}
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
          <p className='text-white text-lg px-6'>
            No books found for the category "{param.explore}".
          </p>
        )}
      </div>
    </div>
  );
};

export default ExplorePage;
