import React from 'react';
import Card from './Card';

const RelatedProduct = () => {
    const products = [
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
            <h2 className='text-3xl my-10 text-white text-center font-semibold '>
                Các sản phẩm tương tự
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-[20px] gap-y-10 p-4 '>
                {products?.map((product, index) => {
                    return <Card key={product.id} {...product} />;
                })}
            </div>
        </div>
    );
};

export default RelatedProduct;
