import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
function Header() {
    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
                {/* https://lh3.googleusercontent.com/gWdevkWOYg72aKfz-2CN73RbYFUX0pLyvq-arITrZnlpj-XVGy1ZNm7IfC4URhjcI1g */}
            </Link>
            <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon"/>
            </div>
                {/* Header Nav */}
            <div className="header__nav">
                {/* 1st Link */}
                <Link to ="/login" className="header__link">
                    <div className="header__options">
                    <span className="header__optionsLine1">Hello Vinay</span>
                    <span className="header__optionsLine2">Sign In</span>
                    </div>
                </Link>
                {/* 2nt Link */}
                <Link to ="/" className="header__link">
                    <div className="header__options">
                    <span className="header__optionsLine1">Returns</span>
                    <span className="header__optionsLine2">& Orders</span>
                    </div>
                </Link>
                {/* 3rd Link */}
                <Link to ="/"className="header__link">
                    <div className="header__options">
                    <span className="header__optionsLine1">Your</span>
                    <span className="header__optionsLine2">Prime</span>
                    </div>
                </Link>
                <Link to ="/checkout" className="header__link">
                    <div className="header__optionsBasket ">
                        <ShoppingBasket />
                        <span className="header__optionsLine2 header__basketCount">0</span>
                    </div>
                </Link>
            </div>
        
        </nav>
    )
}

export default Header
