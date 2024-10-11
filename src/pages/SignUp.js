import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleIcon from '../assets/Google.png';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userCreated, setUserCreated] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);

    async function handleFormSubmit(ev) {
        ev.preventDefault();
        setUserCreated(false);

        const res = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (res.ok) {
            setUserCreated(true);
        } else {
            console.log('False');
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
        <section className=''>
            <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
                <p className='flex items-center mb-6 text-xl md:text-4xl font-semibold text-primary'>
                    Register
                </p>
                <h1>
                    {userCreated && (
                        <div className='text-sm font-light text-gray-400 pb-5'>
                            User created. Now you can{' '}
                            <Link
                                className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                                to={'/login'}
                            >
                                Login
                            </Link>
                        </div>
                    )}
                </h1>
                <div className='w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700'>
                    <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                        <h1 className='text-base font-bold leading-tight tracking-tight  md:text-2xl text-white'>
                            Create an account
                        </h1>
                        <form
                            className='space-y-4 md:space-y-6'
                            onSubmit={handleFormSubmit}
                        >
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
                                    value={email}
                                    onChange={(ev) => setEmail(ev.target.value)}
                                    disabled={userCreated}
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
                                    value={password}
                                    onChange={onChangePassword}
                                    disabled={userCreated}
                                />
                                <h2>
                                    {invalidPassword && (
                                        <div className=' font-medium mt-2 text-sm text-red-500'>
                                            Password must have more 5 character
                                        </div>
                                    )}
                                </h2>
                            </div>

                            <button
                                type='submit'
                                className='w-full text-white bg-blue-400 focus:ring-4 focus:outline-none focus:ring-gray-300
                                font-medium rounded-lg text-sm px-5 py-3 text-center '
                                disabled={userCreated}
                            >
                                Register
                            </button>
                            <p className='text-center text-gray-500 text-sm'>
                                or login with provider
                            </p>
                            <button className='w-full flex items-center justify-center bg-gray-300  gap-2 font-semibold rounded-lg text-sm px-5 py-2 text-center text-black '>
                                <img
                                    src={GoogleIcon}
                                    alt={'googleIcon'}
                                    width={30}
                                    height={30}
                                />
                                Login with Google
                            </button>
                            <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                                Already have an account? {''}
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
