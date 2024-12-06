import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getProductsBySearchTerm } from "../services/bookService";
import Loader from "../components/Loader";
import Card from "../components/Card";
import NotFoundResult from "../components/NotFoundResult";

const Search = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      try {
        const response = await getProductsBySearchTerm(query);
        setSearchResults(response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );

  return (
    <div className='py-20'>
      <div className='container mx-auto'>
        {searchResults.length === 0 ? (
          <div>
            <NotFoundResult searchTerm={query} />
          </div>
        ) : (
          <div>
            <h3 className='capitalize text-gray-400 text-lg lg:text-2xl font-semibold my-10 px-6'>
              Search Result for:{" "}
              <span className='font-bold text-white'>"{query}"</span>
            </h3>

            <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-4 justify-center lg:justify-start lg:px-6'>
              {searchResults.map((book) => {
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
        )}
      </div>
    </div>
  );
};

export default Search;
