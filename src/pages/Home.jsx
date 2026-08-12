import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import CategorySection from '../components/CategorySection';
import RecipeList from '../components/RecipeList';
import { translateText, getEnglishSearch } from '../utils/translator';

const Home = ({ favorites, toggleFavorite }) => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);

    const fetchMeals = async (url) => {
        setLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();

            // ترجمة أسماء الوجبات في القائمة
            const translatedMeals = data.meals?.map(meal => ({
                ...meal,
                strMeal: translateText(meal.strMeal)
            }));

            setMeals(translatedMeals);
        } catch (err) { console.error(err); }
        setLoading(false);
    };

    useEffect(() => {
        fetchMeals('https://www.themealdb.com/api/json/v1/1/search.php?s=a');
    }, []);

    const handleSearch = (term) => {
        setActiveCategory(null);
        // تحويل كلمة البحث العربية للإنجليزية قبل إرسال الطلب
        const englishTerm = getEnglishSearch(term);
        fetchMeals(`https://www.themealdb.com/api/json/v1/1/search.php?s=${englishTerm}`);
    };

    const handleCategorySelect = (cat) => {
        setActiveCategory(cat);
        const url = cat ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}` : 'https://www.themealdb.com/api/json/v1/1/search.php?s=a';
        fetchMeals(url);
    };

    return (
        <div>
            <Hero />
            <div className="container">
                <SearchBar onSearch={handleSearch} />
                <CategorySection onSelect={handleCategorySelect} activeCategory={activeCategory} />
                {loading ? <div className="loader"></div> : <RecipeList meals={meals} favorites={favorites} onToggleFavorite={toggleFavorite} />}
            </div>
        </div>
    );
};
export default Home;