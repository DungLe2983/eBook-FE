import React from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/a.png';
import { navigation } from '../constants/navigation';

const Header = () => {
    return (
        <header className=' fixed top-0 w-full h-16 bg-black bg-opacity-60 z-40'>
            <div className=' container mx-auto px-6 flex items-center h-full'>
                <Link to={'/'}>
                    <img src={logo} alt='logo' width={120} />
                </Link>
                <nav className='hidden lg:flex items-center ml-8 gap-4'>
                    {navigation.map((nav, index) => {
                        return (
                            <div key={nav.label}>
                                <NavLink
                                    key={nav.label}
                                    to={nav.href}
                                    className={({ isActive }) =>
                                        `hover:text-neutral-100 px-2 ${
                                            isActive &&
                                            ' text-neutral-100 font-semibold'
                                        }`
                                    }
                                >
                                    {nav.label}
                                </NavLink>
                            </div>
                        );
                    })}
                </nav>

                <div className='ml-auto flex items-center gap-8'>
                    <form className='flex items-center gap-1'>
                        <input
                            type='text'
                            placeholder='Search...'
                            className='bg-transparent px-4 py-1 outline-none border-none hidden lg:block'
                        />
                        <Link to={'/search'}>
                            <i className='ri-search-line text-xl'></i>
                        </Link>
                    </form>
                    <Link to={'/cart'}>
                        <i class='ri-shopping-cart-2-fill text-xl'></i>
                    </Link>
                    <i className='ri-account-circle-fill text-2xl overflow-hidden cursor-pointer active:text-xl transition-all'></i>
                </div>
            </div>
        </header>
    );
};

export default Header;
