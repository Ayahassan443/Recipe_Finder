import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { translateText } from '../utils/translator';

const RecipeDetail = ({ favorites, toggleFavorite }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => {
                if (data.meals) {
                    const rawMeal = data.meals[0];
                    // ترجمة البيانات الأساسية للوجبة
                    setMeal({
                        ...rawMeal,
                        strMeal: translateText(rawMeal.strMeal),
                        strInstructions: translateText(rawMeal.strInstructions),
                        strCategory: translateText(rawMeal.strCategory),
                        strArea: translateText(rawMeal.strArea)
                    });
                }
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="loader"></div>;
    if (!meal) return <div className="error-msg">الوصفة غير موجودة.</div>;

    const isFav = favorites.some(f => f.idMeal === meal.idMeal);

    // استخراج وترجمة المكونات والمقادير
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            const translatedIng = translateText(meal[`strIngredient${i}`]);
            const translatedMeasure = translateText(meal[`strMeasure${i}`]);
            ingredients.push(`${translatedMeasure} ${translatedIng}`);
        }
    }

    return (
        <div className="container" style={{ padding: '50px 20px' }}>
            <button onClick={() => navigate(-1)} style={{ marginBottom: '30px', background: 'none', border: 'none', color: '#ff6347', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem' }}>← العودة للنتائج</button>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px' }}>
                <div style={{ flex: '1 1 400px' }}>
                    <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '100%', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                    <button
                        onClick={() => toggleFavorite(meal)}
                        style={{ width: '100%', marginTop: '20px', padding: '15px', borderRadius: '12px', border: '2px solid #ff6347', background: isFav ? '#ff6347' : '#fff', color: isFav ? '#fff' : '#ff6347', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.1rem' }}
                    >
                        {isFav ? '❤ أزل من المفضلة' : '❤ أضف إلى المفضلة'}
                    </button>
                </div>

                <div style={{ flex: '1 1 500px' }}>
                    <h1 style={{ fontSize: '2.5rem', color: '#2d2d2d' }}>{meal.strMeal}</h1>
                    <p style={{ color: '#ff6347', fontWeight: 'bold', fontSize: '1.2rem', margin: '15px 0' }}>{meal.strCategory} | {meal.strArea}</p>

                    <div style={{ marginTop: '30px' }}>
                        <h3 style={{ borderBottom: '3px solid #ff6347', display: 'inline-block', marginBottom: '15px' }}>المكونات</h3>
                        <ul style={{ paddingRight: '20px', listStyleType: 'square' }}>
                            {ingredients.map((ing, i) => <li key={i} style={{ marginBottom: '8px' }}>{ing}</li>)}
                        </ul>
                    </div>

                    <div style={{ marginTop: '30px' }}>
                        <h3 style={{ borderBottom: '3px solid #ff6347', display: 'inline-block', marginBottom: '15px' }}>طريقة التحضير</h3>
                        <p style={{ lineHeight: '1.8', whiteSpace: 'pre-line', fontSize: '1.1rem' }}>{meal.strInstructions}</p>
                    </div>

                    {meal.strYoutube && (
                        <div style={{ marginTop: '40px' }}>
                            <a href={meal.strYoutube} target="_blank" rel="noreferrer" style={{ background: '#ff0000', color: '#fff', padding: '15px 30px', borderRadius: '10px', fontWeight: 'bold', display: 'inline-block' }}>شاهد الفيديو على يوتيوب</a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default RecipeDetail;