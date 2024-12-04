import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Test = ({ onClose }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
    };
    const handleOnClose = (e) => {
        e.preventDefault();
        onClose();
    };

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4'>
            <div className='relative bg-white rounded-lg w-full max-w-md p-6'>
                <button
                    onClick={handleOnClose}
                    className='absolute right-4 top-4 text-gray-500 hover:text-gray-700'
                >
                    <i class='ri-close-fill text-xl'></i>
                    <span className='sr-only'>Close</span>
                </button>

                <div className='space-y-10'>
                    <h1 className='text-3xl font-bold text-black text-center'>
                        Login
                    </h1>

                    <form onSubmit={handleSubmit} className='space-y-4'>
                        <div className='space-y-2'>
                            <label
                                htmlFor='username'
                                className='block text-sm font-medium text-gray-700'
                            >
                                Username
                            </label>
                            <input
                                id='username'
                                type='text'
                                placeholder='Enter your username'
                                required
                                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-black'
                            />
                        </div>

                        <div className='space-y-2'>
                            <label
                                htmlFor='password'
                                className='block text-sm font-medium text-gray-700'
                            >
                                Password
                            </label>
                            <div className='relative'>
                                <input
                                    id='password'
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    placeholder='Enter your password'
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-black'
                                />
                                <button
                                    type='button'
                                    className='absolute inset-y-0 right-0 pr-3 flex items-center'
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                >
                                 
                                </button>
                            </div>
                        </div>

                        <div className='flex items-center justify-between pb-4'>
                            <div className='flex items-center'>
                                <input
                                    id='remember'
                                    type='checkbox'
                                    className='h-4 w-4 text-black focus:ring-gray-500 border-gray-300 rounded'
                                />
                                <label
                                    htmlFor='remember'
                                    className='ml-2 block text-sm text-gray-700'
                                >
                                    Remember me
                                </label>
                            </div>
                            <a
                                href='/'
                                className='text-sm text-black underline '
                            >
                                Forgot Password
                            </a>
                        </div>

                        <button
                            type='submit'
                            className='w-full bg-black text-white py-2 px-4 rounded-2xl hover:scale-105 transition-all '
                        >
                            Login
                        </button>
                    </form>

                    <div className='text-center text-sm text-gray-500'>
                        Not a member?{' '}
                        <a
                            href='/signup'
                            className='text-black underline hover:font-bold'
                        >
                            Register
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Test;
