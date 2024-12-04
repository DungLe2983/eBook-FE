import React from 'react';
import Card from '../components/Card';

const Search = () => {
    const data = [
        {
            id: 1,
            name: 'Just So Stories',
            author: 'Rudyard Kipling ',
            price: '$23.99',
            image: 'https://bookshop.ge/content/uploads/products/9781909621800.jpg',
        },
        {
            id: 2,
            name: 'Just So Stories',
            author: 'Rudyard Kipling',
            price: '$59.99',
            image: 'https://bookshop.ge/content/uploads/products/9780141321622.jpg',
        },

        
    ];
    return (
        <div className='py-20'>
            <div className='container mx-auto'>
                <h3 className='capitalize text-gray-400 text-lg lg:text-2xl font-semibold my-6 px-6'>
                    Search Result for:{' '}
                    <span className='font-bold text-white'>just</span>
                </h3>

                <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-4 justify-center lg:justify-start lg:px-6'>
                    {data.map((data, index) => {
                        return <Card key={data.id} {...data} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Search;
