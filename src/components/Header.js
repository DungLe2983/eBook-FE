import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/a.png";
import { navigation } from "../constants/navigation";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  // Kiểm tra trạng thái đăng nhập khi component mount
  useEffect(() => {
    const token = localStorage.getItem("token"); // Kiểm tra token trong localStorage
    if (token) {
      setIsLoggedIn(true); // Nếu token tồn tại, người dùng đã đăng nhập
    } else {
      setIsLoggedIn(false); // Nếu không có token, người dùng chưa đăng nhập
    }
  }, [localStorage.getItem("token")]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/search?query=${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <header className='fixed top-0 w-full h-16 bg-black bg-opacity-60 z-40'>
      <div className='container mx-auto px-6 flex items-center h-full'>
        <Link to={"/"}>
          <img src={logo} alt='logo' width={120} />
        </Link>
        <nav className='hidden lg:flex items-center ml-8 gap-4'>
          {navigation.map((nav, index) => {
            return (
              <div key={nav.label}>
                <NavLink
                  to={nav.href}
                  className={({ isActive }) =>
                    `hover:text-neutral-100 px-2 ${
                      isActive && "text-neutral-100 font-semibold"
                    }`
                  }
                >
                  {nav.label}
                </NavLink>
              </div>
            );
          })}
        </nav>

        <div className='ml-auto flex items-center gap-8'>
          <form
            className='flex items-center gap-1'
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <input
              type='text'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder='Search...'
              className='bg-transparent px-4 py-1 outline-none border-none hidden lg:block'
            />
            <button onClick={handleSearch}>
              <i className='ri-search-line text-xl hover:text-white'></i>
            </button>
          </form>
          <Link to={"/cart"}>
            <i className='ri-shopping-cart-2-fill text-xl hover:text-white'></i>
          </Link>

          {isLoggedIn ? (
            <div className='flex gap-2'>
              <Link
                className=' cursor-pointer hover:text-white'
                to={"/profile"}
              >
                Tài khoản
              </Link>
              <span>|</span>
              <button
                className=' cursor-pointer hover:text-white'
                onClick={handleLogout}
              >
                Đăng xuất
              </button>
            </div>
          ) : (
            <Link
              to={"/login"}
              className='md:order-3 text-white hover:scale-105 transition-all font-bold ml-0 md:ml-4 px-4 md:px-6 focus:outline-none bg-blue-400 rounded-lg text-xs md:text-sm p-2.5 me-1'
            >
              Login
              <span className='sr-only'>Login</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
