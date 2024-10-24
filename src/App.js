import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
    return (
        <main>
            <Header />
            <div className='pb-14 lg:pb-0'>
                <Outlet />
            </div>
            <Footer />
            <Toaster position='bottom-right' />
        </main>
    );
}

export default App;
