import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="header">
        <div className="content-container">
            <Link className="header__title" to="/react-expensify-app" exact={true}>
                <h1>Expensify</h1>
            </Link>
        </div>
    </header>
);

export default Header;
