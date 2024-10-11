import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleIcon from '../assets/Google.png'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginInProgress, setLoginInProgress] = useState(false);
    const [loginFalse, setLoginFalse] = useState(false);

    return (
        <section className=''>
            <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
                <p className='flex items-center mb-6 text-xl md:text-4xl font-semibold text-primary'>
                    Login
                </p>
                <div className='w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700'>
                    <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                        <h1 className='text-base font-bold leading-tight tracking-tight  md:text-2xl text-white'>
                            Access to your account
                        </h1>
                        <h1>
                            {loginFalse && (
                                <div className='text-sm font-light text-red-700 dark:text-gray-400 '>
                                    Email or password incorrect
                                </div>
                            )}
                        </h1>
                        <form className='space-y-4 md:space-y-6' action='#'>
                            <div>
                                <label
                                    for='email'
                                    className='block mb-2 text-sm font-medium text-white'
                                >
                                    Your email
                                </label>
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 '
                                    placeholder='Enter your email'
                                    required=''
                                    disabled={loginInProgress}
                                    value={email}
                                    onChange={(ev) => {
                                        setEmail(ev.target.value);
                                    }}
                                />
                            </div>
                            <div>
                                <label
                                    for='password'
                                    className='block mb-2 text-sm font-medium text-white'
                                >
                                    Password
                                </label>
                                <input
                                    type='password'
                                    name='password'
                                    id='password'
                                    placeholder='Enter your password'
                                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 '
                                    required=''
                                    disabled={loginInProgress}
                                    value={password}
                                    onChange={(ev) => {
                                        setPassword(ev.target.value);
                                    }}
                                />
                            </div>

                            <button
                                type='submit'
                                className='w-full text-white bg-blue-400 focus:ring-4 focus:outline-none focus:ring-gray-300
                                font-medium rounded-lg text-sm px-5 py-3 text-center '
                                disabled={loginInProgress}
                            >
                                Login
                            </button>
                            <p className='text-center text-gray-500 text-sm'>
                                or login with provider
                            </p>
                            <button
                                className='w-full flex items-center justify-center bg-gray-300  gap-2 rounded-lg text-sm px-5 py-2 text-center text-black font-semibold '
                                type='button'
                            >
                                <img
                                    src={GoogleIcon}
                                    alt={'googleIcon'}
                                    width={30}
                                    height={30}
                                />
                                Login with Google
                            </button>
                            <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                                Don’t have an account yet?{' '}
                                <Link
                                    to='/register'
                                    className='font-medium text-blue-600 hover:underline dark:text-primary-500'
                                >
                                    Sign up
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
