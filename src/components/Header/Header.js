import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const navStyle = "rounded-lg bg-gray-300 hover:bg-gray-100 px-4 py-2 mx-2 shadow-md";
    const activeNavStyle = "bg-red-500 hover:bg-red-500 text-white";
    return (
        <div className="bg-gray-200 rounded-xl shadow-md p-4 flex">
            <i className="fas fa-building text-gray-600 text-2xl px-3 my-auto animate-bounce"></i>
            <h1 className="text-2xl font-bold text-gray-600">Some IT Center</h1>
            <div className="ml-auto mr-4 my-auto">
                <NavLink className={navStyle} activeClassName={activeNavStyle} to="/home">Home</NavLink>
                <NavLink className={navStyle} activeClassName={activeNavStyle} to="/services">Services</NavLink>
                <NavLink className={navStyle} activeClassName={activeNavStyle} to="/support">Support</NavLink>
                <NavLink className={navStyle} activeClassName={activeNavStyle} to="/about">About</NavLink>
            </div>
        </div>
    );
};

export default Header;