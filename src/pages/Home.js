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
    const bestsellerproducts = [
        {
            id: 1,
            name: 'Made to Stick',
            author: 'Chip Health, Don Health',
            price: '$26.00',
            image: 'https://bookshop.ge/content/uploads/products/9780099505693.jpg',
        },
        {
            id: 2,
            name: 'Unreasonable Hospitality',
            author: 'Will Guidara',
            price: '$30.00',
            image: 'https://bookshop.ge/content/uploads/products/9781529146820.jpg',
        },
        {
            id: 3,
            name: 'Who Moved My Cheese?',
            author: 'Spencer Johnson',
            price: '$25.99',
            image: 'https://bookshop.ge/content/uploads/products/9780091816971.jpg',
        },
        {
            id: 4,
            name: 'Facebook : The Inside Story',
            author: 'Steven Levy',
            price: '$25.00',
            image: 'https://bookshop.ge/content/uploads/products/9780241297957.jpg',
        },
        {
            id: 5,
            name: 'Samsung Rising : Inside the secretive company conquering Tech',
            author: 'Geoffrey Cain',
            price: '$29.99',
            image: 'https://bookshop.ge/content/uploads/products/9780753554814.jpg',
        },
    ];
    const fictionproducts = [
        {
            id: 1,
            name: 'A Wild Sheep Chase',
            author: 'Haruki Murakami ',
            price: '$40.00',
            image: 'https://bookshop.ge/content/uploads/products/9781784878771.jpg',
        },
        {
            id: 2,
            name: 'Child of Fortune',
            author: 'Yuko Tsushima',
            price: '$22.00',
            image: 'https://bookshop.ge/content/uploads/products/9780241675274.jpg',
        },
        {
            id: 3,
            name: 'After the Banquet',
            author: 'Yukio Mishima',
            price: '$32.99',
            image: 'https://bookshop.ge/content/uploads/products/9780099282785.jpg',
        },
        {
            id: 4,
            name: 'The Sailor Who Fell From Grace With the Sea',
            author: 'Yukio Mishima ',
            price: '$25.00',
            image: 'https://bookshop.ge/content/uploads/products/9780099284796.jpg',
        },
        {
            id: 5,
            name: 'The Sailor who Fell from Grace with the Sea',
            author: 'Yukio Mishima',
            price: '$32.00',
            image: 'https://bookshop.ge/content/uploads/products/9781784879723.jpg',
        },
    ];
    const nonfictionproducts = [
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
    const childrenproducts = [
        {
            id: 1,
            name: 'YOU CAN save the planet : Be Amazing with This Inspiring Guide',
            author: 'Collins Kids , Annabelle Padwic',
            price: '$12.00',
            image: 'https://bookshop.ge/content/uploads/products/9780008374563.jpg',
        },
        {
            id: 2,
            name: 'YOU CAN write awesome stories : Be Amazing with This Inspiring Guide',
            author: 'Collins Kids , Joanne Owen',
            price: '$14.00',
            image: 'https://bookshop.ge/content/uploads/products/9780008372651.jpg',
        },
        {
            id: 3,
            name: 'Sobrevivi El Huracan Katrina, 2005 (I Survived Hurricane Katrina, 2005)',
            author: 'Lauren Tarshis',
            price: '$24.99',
            image: 'https://bookshop.ge/content/uploads/products/9781338631050.jpg',
        },
        {
            id: 4,
            name: 'Baby Touch: Tails',
            author: 'Ladybird ',
            price: '$26.00',
            image: 'https://bookshop.ge/content/uploads/products/9780241439494.jpg',
        },
        {
            id: 5,
            name: 'Just So Stories',
            author: 'Rudyard Kipling',
            price: '$20.00',
            image: 'https://bookshop.ge/content/uploads/products/9780141321622.jpg',
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
                    {bestsellerproducts.map((product) => (
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
                    {fictionproducts.map((product) => (
                        <Card key={product.id} {...product} />
                    ))}
                </div>
                <SectionHeader url={'/non-fiction'} subHeader={'Non-Fiction'} />
                <div className='py-10 grid grid-cols-1 lg:grid-cols-5 gap-6'>
                    {nonfictionproducts.map((product) => (
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
                    {childrenproducts.map((product) => (
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
