import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ favCount }) => {
    return (
        <nav style={{ height: '80px', background: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', position: 'sticky', top: '0', zIndex: '1000' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Link to="/" style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#ff6347' }}> سُفرة | SOFRA</Link>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <Link to="/" style={{ fontWeight: '600' }}>الرئيسية</Link>
                    <Link to="/favorites" style={{ fontWeight: '600', display: 'flex', alignItems: 'center' }}>
                        المفضلة
                        {favCount > 0 && <span style={{ background: '#ff6347', color: '#fff', padding: '2px 8px', borderRadius: '12px', fontSize: '0.8rem', marginRight: '5px' }}>{favCount}</span>}
                    </Link>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;