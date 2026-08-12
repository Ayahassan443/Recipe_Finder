import React from 'react';

const CategorySection = ({ onSelect, activeCategory }) => {
    const categories = [
        { ar: 'الكل', en: null },
        { ar: 'دجاج', en: 'Chicken' },
        { ar: 'لحوم', en: 'Beef' },
        { ar: 'حلويات', en: 'Dessert' },
        { ar: 'مأكولات بحرية', en: 'Seafood' },
        { ar: 'نباتي', en: 'Vegetarian' },
        { ar: 'إفطار', en: 'Breakfast' },
        { ar: 'معكرونة', en: 'Pasta' }
    ];

    return (
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h3 style={{ marginBottom: '20px' }}>تصفح حسب التصنيف</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
                {categories.map((cat) => (
                    <button
                        key={cat.ar}
                        onClick={() => onSelect(cat.en)}
                        style={{ padding: '10px 25px', borderRadius: '25px', border: '2px solid #ff6347', background: activeCategory === cat.en ? '#ff6347' : '#fff', color: activeCategory === cat.en ? '#fff' : '#ff6347', cursor: 'pointer', fontWeight: 'bold', transition: '0.3s' }}
                    >
                        {cat.ar}
                    </button>
                ))}
            </div>
        </div>
    );
};
export default CategorySection;