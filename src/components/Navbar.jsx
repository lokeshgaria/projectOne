import React from 'react';
import "../css/Navbar.css"
import BrandLogo from "../Assets/Navbar/brandLogo.png";

function Navbar() {
    return (
        <div className="header">
            <div className="navbar">
                <div className="navbar__brand">
                    {/**BRAND LOGO */}
                    <img src={BrandLogo} alt={BrandLogo} />
                </div>
                <div className="navbar__list">
                    <ul>
                        <li>home</li>
                        <li>products</li>
                        <li>about us</li>
                        <li>our stores</li>
                        <li>contact us</li>
                    </ul>
                </div>
                <div className="navbar__icons">
                    <div className="search">Search</div>
                    <div className="facebook">facebook</div>
                    <div className="instagram">insta</div>
                    <div className="pintrest">pintrest</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
