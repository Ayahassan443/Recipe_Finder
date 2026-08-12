import React from 'react';

const Hero = () => {
    return (
        <header style={{ background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1350&q=80") center/cover', height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#fff', textAlign: 'center', padding: '0 20px' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '15px' }}>اكتشف أشهى الوصفات العالمية</h1>
            <p style={{ fontSize: '1.3rem', maxWidth: '700px' }}>الآلاف من وصفات الطعام المجربة والمضمونة بين يديك الآن.</p>
        </header>
    );
};
export default Hero;