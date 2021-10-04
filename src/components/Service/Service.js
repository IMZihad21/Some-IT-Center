import React from 'react';

const Service = (props) => {
    const { name, cover, duration, price } = props.service;
    return (
        <div className="flex bg-gray-200 shadow-lg rounded-xl">
            <div className="w-1/2 p-3">
                <img className="w-full rounded-xl" src={cover} alt={name} />
            </div>
            <div className="w-1/2 m-auto">
                <h1 className="text-2xl font-bold py-2">{name}</h1>
                <p><span className="text-xl">Course Duration: </span><span className="text-red-700">{duration} Hours</span></p>
                <p><span className="text-xl">Price: </span><span className="text-red-700">{price} USD</span></p>
                <button className="rounded-lg bg-red-600 text-white hover:bg-red-500 px-12 py-2 m-2">More Details</button>
            </div>
        </div>
    );
};

export default Service;