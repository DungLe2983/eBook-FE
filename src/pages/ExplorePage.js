import React from 'react';
import Card from '../components/Card';
import { useParams } from 'react-router-dom';

const ExplorePage = () => {
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
            id: 1,
            name: 'Bad Samaritans: The Guilty Secrets of Rich Nations and the Threat to Global Prosperity',
            author: 'Ha-Joon Chang',
            price: '$23.00',
            image: 'https://bookshop.ge/content/uploads/products/9781905211371.jpg',
        },
        {
            id: 2,
            name: 'We are the Weather : Saving the Planet Begins at Breakfast',
            author: 'Jonathan Safran Foer',
            price: '$24.00',
            image: 'https://bookshop.ge/content/uploads/products/9780241984918.jpg',
        },
        {
            id: 3,
            name: 'Work Remotely',
            author: 'Anastasia Tohmé , Martin Worner',
            price: '$22.99',
            image: 'https://bookshop.ge/content/uploads/products/9780241482117.jpg',
        },
        {
            id: 4,
            name: 'How To Prevent The Next Pandemic',
            author: 'Bill Gates',
            price: '$25.00',
            image: 'https://bookshop.ge/content/uploads/products/9781802060522.jpg',
        },
        {
            id: 5,
            name: 'Never Split the Difference: Negotiating as if Your Life Depended on It',
            author: 'Chris Voss',
            price: '$32.50',
            image: 'https://bookshop.ge/content/uploads/products/9781847941497.jpg',
        },
    ];

    const param = useParams();
    return (
        <div className='py-20'>
            <div className='container mx-auto'>
                <h3 className='capitalize text-white text-lg lg:text-2xl font-semibold my-6 px-6'>
                    Popular {param.explore}
                </h3>

                <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-4 justify-center lg:justify-start px-0 lg:px-6'>
                    {data.map((data, index) => {
                        return <Card key={data.id} {...data} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default ExplorePage;
