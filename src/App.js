import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, PortfolioDetails } from './pages';
import { Navbar, Sidebar, Footer } from './containers';

function App() {
    return <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects/:id' element={<PortfolioDetails />} />
        </Routes>
        <Footer />
    </BrowserRouter>
}

export default App;
