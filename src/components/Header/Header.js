import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="bg-gray-200 p-4 flex">
            <h1 className="text-2xl">Some IT Center</h1>
            <div className="ml-auto mr-4 my-auto">
                <NavLink className="rounded-lg bg-gray-300 hover:bg-gray-100 px-4 py-2 mx-2" activeClassName="bg-red-500 hover:bg-red-500 text-white" to="/home">Home</NavLink>
                <NavLink className="rounded-lg bg-gray-300 hover:bg-gray-100 px-4 py-2 mx-2" activeClassName="bg-red-500 hover:bg-red-500 text-white" to="/services">Services</NavLink>
                <NavLink className="rounded-lg bg-gray-300 hover:bg-gray-100 px-4 py-2 mx-2" activeClassName="bg-red-500 hover:bg-red-500 text-white" to="/support">Support</NavLink>
                <NavLink className="rounded-lg bg-gray-300 hover:bg-gray-100 px-4 py-2 mx-2" activeClassName="bg-red-500 hover:bg-red-500 text-white" to="/about">About</NavLink>
            </div>
        </div>
    );
};

export default Header;