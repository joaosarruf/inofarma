import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Categories from './components/Categories';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Navbar />
            <main>
                <Banner />
                <Categories />
            </main>
            <Footer />
        </div>
    );
}

export default App;
