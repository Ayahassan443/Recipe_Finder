import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ meals, favorites, onToggleFavorite }) => {
    if (!meals) return <div className="error-msg">عذراً، لم نجد أي وصفة تطابق بحثك.</div>;
    return (
        <div className="recipe-grid">
            {meals.map((meal) => (
                <RecipeCard
                    key={meal.idMeal}
                    meal={meal}
                    isFavorite={favorites.some(f => f.idMeal === meal.idMeal)}
                    onToggleFavorite={onToggleFavorite}
                />
            ))}
        </div>
    );
};
export default RecipeList;
