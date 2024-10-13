import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section className='bg-gray-900 text-gray-200 py-24'>
            <div className='container mx-auto px-6'>
                <h1 className='text-4xl font-bold text-center text-white mb-6'>
                    About <span className='text-blue-400'>eBook</span>
                </h1>
                <p className='text-gray-400 text-lg text-center mb-12'>
                    Welcome to eBook, your one-stop online bookstore for a wide
                    range of books that inspire, educate, and entertain.
                </p>

                {/* Company Overview */}
                <div className='flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-8'>
                    <img
                        src='https://images.unsplash.com/photo-1524985069026-dd778a71c7b4'
                        alt='Books'
                        className='w-full md:w-1/2 rounded-lg shadow-lg'
                    />
                    <div className='w-full md:w-1/2'>
                        <h2 className='text-3xl font-semibold text-white mb-4'>
                            Our Vision
                        </h2>
                        <p className='text-gray-400 mb-4'>
                            At eBook, our mission is to make reading accessible
                            and enjoyable for everyone. Whether you are looking
                            for the latest bestsellers, educational material, or
                            timeless classics, we have something for every
                            reader.
                        </p>
                        <p className='text-gray-400 mb-4'>
                            We believe that books can change lives, ignite
                            ideas, and foster personal and professional growth.
                            That’s why we strive to provide an extensive
                            collection of books across various genres including
                            fiction, non-fiction, self-help, business, and much
                            more.
                        </p>
                    </div>
                </div>

                {/* Features Section */}
                <div className='mt-16'>
                    <h2 className='text-3xl font-semibold text-center text-white mb-8'>
                        Why Shop With Us?
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {/* Feature 1 */}
                        <div className='bg-gray-800 p-6 rounded-lg shadow-lg'>
                            <i className='ri-book-open-line text-4xl text-blue-400 mb-4'></i>
                            <h3 className='text-xl font-semibold text-white mb-2'>
                                Wide Selection of Books
                            </h3>
                            <p className='text-gray-400'>
                                Browse through thousands of books across
                                different genres, categories, and languages.
                                From timeless classics to contemporary releases,
                                we have it all.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className='bg-gray-800 p-6 rounded-lg shadow-lg'>
                            <i className='ri-truck-line text-4xl text-blue-400 mb-4'></i>
                            <h3 className='text-xl font-semibold text-white mb-2'>
                                Fast & Reliable Shipping
                            </h3>
                            <p className='text-gray-400'>
                                We ensure your books are delivered to your door
                                as quickly as possible with our reliable and
                                fast shipping options.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className='bg-gray-800 p-6 rounded-lg shadow-lg'>
                            <i className='ri-customer-service-2-line text-4xl text-blue-400 mb-4'></i>
                            <h3 className='text-xl font-semibold text-white mb-2'>
                                Excellent Customer Support
                            </h3>
                            <p className='text-gray-400'>
                                Have any questions? Our dedicated customer
                                support team is here to assist you at any step
                                of your shopping experience.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className='mt-16 bg-blue-600 py-8 rounded-lg text-center'>
                    <h2 className='text-3xl font-semibold text-gray-200 mb-2'>
                        Discover Your Next Great Read at eBook
                    </h2>
                    <p className='text-gray-300 text-lg mb-6'>
                        Join our community of readers and start exploring the
                        world of knowledge and imagination.
                    </p>
                    <Link
                        to={'/'}
                        className='bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-600 transition'
                    >
                        Start Shopping Now
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default About;
