import React from 'react';
import Banner from '../components/Banner';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import BannerFiction from '../assets/BannerFiction.jpg';
import BannerEnd from '../assets/BannerEnd.jpg';
import BannerChildren from '../assets/BannerChildren.jpg';

const Home = () => {
    const products = [
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
    ];
    return (
        <div>
            <Banner />
            <div className='container mx-auto px-8'>
                <SectionHeader url={'/new'} subHeader={'New Arrivals'} />
                <div className='py-10 grid grid-cols-1 lg:grid-cols-5 gap-6'>
                    {products.map((product) => (
                        <Card key={product.id} {...product} trending={true} />
                    ))}
                </div>

                <SectionHeader
                    url={'/bestsellers'}
                    subHeader={'Best Sellers'}
                />
                <div className='py-10 grid grid-cols-1 lg:grid-cols-5 gap-6'>
                    {products.map((product) => (
                        <Card key={product.id} {...product} />
                    ))}
                </div>

                <img
                    src={BannerFiction}
                    alt='bannerFiction'
                    className='w-full rounded-lg items-center my-10'
                />
                <SectionHeader url={'/fiction'} subHeader={'Fiction'} />
                <div className='py-10 grid grid-cols-1 lg:grid-cols-5 gap-6'>
                    {products.map((product) => (
                        <Card key={product.id} {...product} />
                    ))}
                </div>
                <SectionHeader url={'/non-fiction'} subHeader={'Non-Fiction'} />
                <div className='py-10 grid grid-cols-1 lg:grid-cols-5 gap-6'>
                    {products.map((product) => (
                        <Card key={product.id} {...product} />
                    ))}
                </div>

                <img
                    src={BannerChildren}
                    alt='bannerChild'
                    className='w-full rounded-lg items-center my-10'
                />
                <SectionHeader url={'/children'} subHeader={'Children'} />
                <div className='py-10 grid grid-cols-1 lg:grid-cols-5 gap-6 '>
                    {products.map((product) => (
                        <Card key={product.id} {...product} />
                    ))}
                </div>

                <img
                    src={BannerEnd}
                    alt='bannerEnd'
                    className='w-full rounded-lg items-center my-10'
                />
            </div>
        </div>
    );
};

export default Home;
