import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ image, name, author, price, trending, id }) => {
    return (
        <div className=' relative overflow-hidden group hover:scale-105 transition-all shadow-lg '>
            <div className=' rounded overflow-hidden '>
                <img
                    className='w-[280px] h-[22rem] object-cover cursor-pointer'
                    src={image}
                    alt={name}
                />
                <div className=' py-4'>
                    <Link
                        href={`/${id}`}
                        className='font-bold text-lg mb-2 cursor-pointer hover:text-primary '
                    >
                        {name}
                    </Link>
                    <p className='text-gray-400 font-semibold text-sm '>
                        {author}
                    </p>
                </div>
                <div className='  flex justify-between'>
                    <p className='text-red-700 font-semibold text-lg'>
                        {price}
                    </p>
                </div>
            </div>

            <div className=' absolute top-2 '>
                {trending && (
                    <div className='py-1 px-6 bg-blue-400 text-white rounded-r-full backdrop-blur-3xl overflow-hidden'>
                        NEW
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
