import React from 'react';
import RecipeList from '../components/RecipeList';

const Favorites = ({ favorites, toggleFavorite }) => {
    return (
        <div className="container" style={{ minHeight: '75vh', padding: '50px 20px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>وصفاتي المفضلة</h1>
            <p style={{ textAlign: 'center', color: '#777', marginBottom: '50px' }}>لديك {favorites.length} وصفات محفوظة.</p>

            {favorites.length === 0 ? (
                <div style={{ textAlign: 'center', marginTop: '100px' }}>
                    <p style={{ fontSize: '1.3rem' }}>قائمة المفضلة فارغة حالياً!</p>
                    <p style={{ marginTop: '10px' }}>ابدأ بإضافة بعض الوصفات الشهية لتراها هنا.</p>
                </div>
            ) : (
                <RecipeList meals={favorites} favorites={favorites} onToggleFavorite={toggleFavorite} />
            )}
        </div>
    );
};
export default Favorites;