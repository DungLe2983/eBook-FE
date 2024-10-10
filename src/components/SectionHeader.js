import React from 'react';
import { Link } from 'react-router-dom';

const SectionHeader = ({ url, subHeader }) => {
    return (
        <div className='w-full  mt-8'>
            <div className='flex flex-row items-baseline justify-between pt-8  '>
                <h2 className='text-primary font-bold text-xl md:text-2xl mb-2 '>
                    {subHeader}
                </h2>
                <Link
                    to={url}
                    className='font-semibold text-white  hover:border-blue-500 hover:text-blue-500 px-4 py-2 cursor-pointer border '
                >
                    Show All
                </Link>
            </div>
        </div>
    );
};

export default SectionHeader;
