import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className="pt-5">
            <Nav className="link-tag fw-bold">
                <div className="d-flex justify-content-center gap-4">
                    <Link to="/home">HOME</Link>
                    <Link to="/review">REVIEW</Link>
                    <Link to="/dashpa">DASHBOARD</Link>
                    <Link to="/blogs">BLOGS</Link>
                    <Link to="/about">ABOUT</Link>
                </div>
            </Nav>
        </div>
    );
};

export default Header;