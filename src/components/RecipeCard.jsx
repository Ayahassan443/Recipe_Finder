import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ meal, isFavorite, onToggleFavorite }) => {
    return (
        <div style={{ background: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', position: 'relative', transition: '0.3s' }}>
            <button
                style={{ position: 'absolute', top: '15px', right: '15px', background: '#fff', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', fontSize: '1.4rem', color: isFavorite ? '#ff6347' : '#ccc', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}
                onClick={() => onToggleFavorite(meal)}
            >❤</button>
            <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
            <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', height: '55px', overflow: 'hidden' }}>{meal.strMeal}</h3>
                <Link to={`/recipe/${meal.idMeal}`} style={{ display: 'block', textAlign: 'center', padding: '10px', background: '#ff6347', color: '#fff', borderRadius: '8px', fontWeight: 'bold' }}>عرض الوصفة</Link>
            </div>
        </div>
    );
};
export default RecipeCard;