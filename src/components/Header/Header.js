import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="bg-black text-white p-4 flex">
            <h1 className="text-2xl">Some IT Center</h1>
            <div className="ml-auto mr-4 my-auto">
                <NavLink className="border rounded-lg bg-gray-800 hover:bg-gray-700 px-4 py-2 mx-2"  to="/">Home</NavLink>
                <NavLink className="border rounded-lg bg-gray-800 hover:bg-gray-700 px-4 py-2 mx-2"  to="/services">Services</NavLink>
                <NavLink className="border rounded-lg bg-gray-800 hover:bg-gray-700 px-4 py-2 mx-2"  to="/support">Support</NavLink>
                <NavLink className="border rounded-lg bg-gray-800 hover:bg-gray-700 px-4 py-2 mx-2"  to="/about">About</NavLink>
            </div>
        </div>
    );
};

export default Header;