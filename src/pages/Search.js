import React from 'react';
import Card from '../components/Card';

const Search = () => {
    const data = [
        {
            id: 1,
            name: 'The Fury',
            author: 'Alex Michaelides',
            price: '$49.99',
            image: 'https://bookshop.ge/content/uploads/products/9780241575543.jpg',
        },
        {
            id: 2,
            name: 'Fool Me Once',
            author: 'Harlan Coben',
            price: '$59.99',
            image: 'https://bookshop.ge/content/uploads/products/9781804947203.jpg',
        },
        {
            id: 3,
            name: 'This Time Tomorrow',
            author: 'Emma Straub',
            price: '$59.99',
            image: 'https://bookshop.ge/content/uploads/products/9781405946124.jpg',
        },
        {
            id: 4,
            name: 'Our Crooked Hearts',
            author: 'Melissa Albert',
            price: '$29.99',
            image: 'https://bookshop.ge/content/uploads/products/9780241592540.jpg',
        },
        {
            id: 5,
            name: 'None of This is True',
            author: 'Lisa Jewell',
            price: '$39.99',
            image: 'https://bookshop.ge/content/uploads/products/9781804940204.jpg',
        },
        {
            id: 2,
            name: 'Fool Me Once',
            author: 'Harlan Coben',
            price: '$59.99',
            image: 'https://bookshop.ge/content/uploads/products/9781804947203.jpg',
        },
        {
            id: 3,
            name: 'This Time Tomorrow',
            author: 'Emma Straub',
            price: '$59.99',
            image: 'https://bookshop.ge/content/uploads/products/9781405946124.jpg',
        },
        {
            id: 4,
            name: 'Our Crooked Hearts',
            author: 'Melissa Albert',
            price: '$29.99',
            image: 'https://bookshop.ge/content/uploads/products/9780241592540.jpg',
        },
        {
            id: 5,
            name: 'None of This is True',
            author: 'Lisa Jewell',
            price: '$39.99',
            image: 'https://bookshop.ge/content/uploads/products/9781804940204.jpg',
        },
    ];
    return (
        <div className='py-20'>
            <div className='container mx-auto'>
                <h3 className='capitalize text-white text-lg lg:text-2xl font-semibold my-6 px-6'>
                    Search Result
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
