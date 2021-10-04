import React from 'react';

const LiveSupport = () => {
    return (
        <div className="bg-gray-200 rounded-xl shadow-md m-6">
            <h1 className="text-3xl font-bold py-4">Fill in the info to start a session with a representative</h1>
            <form className="flex flex-col px-16 py-5 text-center" action="">
                <input className="rounded py-2 my-1 text-center" placeholder="Your Name" type="text" />
                <input className="rounded py-2 my-1 text-center" placeholder="Your Email" type="email" />
                ​<textarea className="rounded text-center" placeholder="Your issue you want to discuss" rows="10" cols="70"></textarea>
                <button className="rounded-lg bg-red-600 text-white hover:bg-red-500 px-12 py-2 m-2">Submit</button>
            </form>
        </div>
    );
};

export default LiveSupport;