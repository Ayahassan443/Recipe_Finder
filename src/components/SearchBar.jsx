import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [term, setTerm] = useState('');
    const handleSumbit = (e) => { e.preventDefault(); onSearch(term); };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '40px 0' }}>
            <form onSubmit={handleSumbit} style={{ width: '100%', maxWidth: '600px', display: 'flex', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', borderRadius: '30px', overflow: 'hidden' }}>
                <input
                    type="text"
                    placeholder="ابحث عن وصفة... (دجاج، لحم، حلويات)"
                    style={{ flex: '1', padding: '15px 25px', fontSize: '1.1rem', border: 'none', outline: 'none' }}
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                />
                <button type="submit" style={{ padding: '0 30px', background: '#ff6347', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem' }}>بحث</button>
            </form>
        </div>
    );
};
export default SearchBar;