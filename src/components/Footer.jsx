import React from 'react';

const Footer = () => {
    return (
        <footer style={{ background: '#2d2d2d', color: '#fff', padding: '40px 0', marginTop: '60px', textAlign: 'center' }}>
            <div className="container">
                <h2 style={{ color: '#ff6347' }}> SOFRA | سُفرة</h2>
                <p style={{ marginTop: '10px', opacity: '0.8' }}>وجهتك الأولى لأشهى الوصفات المنزلية والعالمية.</p>
                <p style={{ marginTop: '20px', fontSize: '0.9rem', borderTop: '1px solid #444', paddingTop: '20px' }}>جميع الحقوق محفوظة © {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};
export default Footer;