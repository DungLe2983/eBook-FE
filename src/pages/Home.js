import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import Loader from "../components/Loader";
import BannerFiction from "../assets/BannerFiction.jpg";
import BannerEnd from "../assets/BannerEnd.jpg";
import BannerChildren from "../assets/BannerChildren.jpg";
import { getAllBooks } from "../services/bookService"; // Import API

const Home = () => {
  const [newProducts, setNewProducts] = useState([]);
  // const [bestsellers, setBestsellers] = useState([]);
  const [fiction, setFiction] = useState([]);
  const [nonFiction, setNonFiction] = useState([]);
  const [children, setChildren] = useState([]);
  const [science, setScience] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getAllBooks();
        const books = response.data;
        // console.log("books===", books);

        setNewProducts(books.slice(-5));

        setFiction(
          books.filter((book) =>
            book.categories.some((cat) => cat.name.toLowerCase() === "fiction")
          )
        );
        setScience(
          books.filter((book) =>
            book.categories.some((cat) => cat.name.toLowerCase() === "science")
          )
        );

        setNonFiction(
          books.filter((book) =>
            book.categories.some(
              (cat) => cat.name.toLowerCase() === "non-fiction"
            )
          )
        );
        setChildren(
          books.filter((book) =>
            book.categories.some((cat) => cat.name.toLowerCase() === "children")
          )
        );
      } catch (err) {
        setError("Failed to load books. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
    <div>
      <Banner />
      <div className='container mx-auto px-8'>
        <SectionHeader url={"/new-arrival"} subHeader={"New Arrivals"} />
        <div className='py-10 grid grid-cols-1 lg:grid-cols-5 gap-6'>
          {newProducts.map((book) => (
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
              trending={true}
            />
          ))}
        </div>

        {/* <SectionHeader url={"/bestsellers"} subHeader={"Best Sellers"} />
        <div className='py-10 grid grid-cols-1 lg:grid-cols-5 gap-6'>
          {bestsellers.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </div> */}
        <SectionHeader url={"/science"} subHeader={"Science"} />
        <div className='py-10 grid grid-cols-1 lg:grid-cols-5 gap-6'>
          {science.map((book) => (
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

        <img
          src={BannerFiction}
          alt='bannerFiction'
          className='w-full rounded-lg items-center my-10'
        />
        <SectionHeader url={"/fiction"} subHeader={"Fiction"} />
        <div className='py-10 grid grid-cols-1 lg:grid-cols-5 gap-6'>
          {fiction.map((book) => (
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
        <SectionHeader url={"/non-fiction"} subHeader={"Non-Fiction"} />
        <div className='py-10 grid grid-cols-1 lg:grid-cols-5 gap-6'>
          {nonFiction.map((book) => (
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

        <img
          src={BannerChildren}
          alt='bannerChild'
          className='w-full rounded-lg items-center my-10'
        />
        <SectionHeader url={"/children"} subHeader={"Children"} />
        <div className='py-10 grid grid-cols-1 lg:grid-cols-5 gap-6 '>
          {children.map((book) => (
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

        <img
          src={BannerEnd}
          alt='bannerEnd'
          className='w-full rounded-lg items-center my-10'
        />
      </div>
    </div>
  );
};

export default Home;
