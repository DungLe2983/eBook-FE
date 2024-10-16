import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import ExplorePage from '../pages/ExplorePage';
import DetailPage from '../pages/DetailPage';
import Search from '../pages/Search';
import About from '../pages/About';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Cart from '../pages/Cart';
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: ':explore',
                element: <ExplorePage />,
            },
            {
                path: ':explore/:id',
                element: <DetailPage />,
            },
            {
                path: 'search',
                element: <Search />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'register',
                element: <SignUp />,
            },
            {
                path: 'cart',
                element: <Cart />,
            },
        ],
    },
]);

export default router;
