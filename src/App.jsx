import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';
import Favorites from './pages/Favorites';

function App() {
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem('recipe-favs-ar');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('recipe-favs-ar', JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (meal) => {
        setFavorites((prev) => {
            const isFav = prev.some((item) => item.idMeal === meal.idMeal);
            if (isFav) {
                return prev.filter((item) => item.idMeal !== meal.idMeal);
            } else {
                return [...prev, meal];
            }
        });
    };

    return (

        <Router>
            <div className="app">
                <Navbar favCount={favorites.length} />
                <Routes>
                    <Route path="/" element={<Home favorites={favorites} toggleFavorite={toggleFavorite} />} />
                    <Route path="/recipe/:id" element={<RecipeDetail favorites={favorites} toggleFavorite={toggleFavorite} />} />
                    <Route path="/favorites" element={<Favorites favorites={favorites} toggleFavorite={toggleFavorite} />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;