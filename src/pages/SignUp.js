import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/registerService";
import { postCartID } from "../services/cartService";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [userCreated, setUserCreated] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setUserCreated(false);
    setErrorMessage("");

    if (password.length < 6) {
      setInvalidPassword(true);
      return;
    }

    try {
      // Sử dụng service để đăng ký người dùng
      const res = await register(email, username, fullName, password); // Gọi hàm register

      if (res.status === 200) {
        const temp = await postCartID(res.data.data);
        if (temp.status === 200) {
          setUserCreated(true);
          setTimeout(() => {
            navigate("/login"); // Điều hướng đến trang login sau khi đăng ký thành công
          }, 2000);
        }
      }
    } catch (error) {
      setErrorMessage(error);
    }
  }

  function onChangePassword(ev) {
    setPassword(ev.target.value);

    if (!password?.length || password.length < 5) {
      setInvalidPassword(true);
      return false;
    } else {
      setInvalidPassword(false);
    }
  }

  return (
    <section>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <p className='flex items-center mb-6 text-xl md:text-4xl font-semibold text-primary mt-20'>
          Register
        </p>
        <h1>
          {userCreated && (
            <div className='text-sm font-light text-gray-400 pb-5'>
              User created. Now you can{" "}
              <Link
                className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                to={"/login"}
              >
                Login
              </Link>
            </div>
          )}
        </h1>
        <div className='w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-base font-bold leading-tight tracking-tight md:text-2xl text-white'>
              Create an account
            </h1>
            {errorMessage && (
              <div className='text-sm font-light text-red-500'>
                {errorMessage}
              </div>
            )}
            <form
              className='space-y-4 md:space-y-6'
              onSubmit={handleFormSubmit}
            >
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-white'
                >
                  Your email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5'
                  placeholder='Enter your email'
                  required
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  disabled={userCreated}
                />
              </div>

              <div>
                <label
                  htmlFor='username'
                  className='block mb-2 text-sm font-medium text-white'
                >
                  Username
                </label>
                <input
                  type='text'
                  name='username'
                  id='username'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5'
                  placeholder='Enter your username'
                  required
                  value={username}
                  onChange={(ev) => setUsername(ev.target.value)}
                  disabled={userCreated}
                />
              </div>

              <div>
                <label
                  htmlFor='fullName'
                  className='block mb-2 text-sm font-medium text-white'
                >
                  Full Name
                </label>
                <input
                  type='text'
                  name='fullName'
                  id='fullName'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5'
                  placeholder='Enter your full name'
                  required
                  value={fullName}
                  onChange={(ev) => setFullName(ev.target.value)}
                  disabled={userCreated}
                />
              </div>

              <div>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-white'
                >
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Enter your password'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5'
                  required
                  value={password}
                  onChange={onChangePassword}
                  disabled={userCreated}
                />
                {invalidPassword && (
                  <div className='font-medium mt-2 text-sm text-red-500'>
                    Password must have more than 5 characters
                  </div>
                )}
              </div>

              <button
                type='submit'
                className='w-full text-white bg-blue-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3 text-center'
                disabled={userCreated}
              >
                Register
              </button>
              <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                Already have an account?{" "}
                <Link
                  to='/login'
                  className='font-medium text-blue-600 hover:underline dark:text-primary-500'
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
