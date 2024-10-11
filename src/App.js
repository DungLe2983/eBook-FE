import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
    return (
        <Router>
            <Header />
            <main className='pb-14 lg:pb-0'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<SignUp />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
