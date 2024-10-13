import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <main>
            <Header />
            <div className='pb-14 lg:pb-0'>
                <Outlet />
            </div>
            <Footer />
        </main>
    );
}

export default App;
