import React from 'react';

const LiveSupport = () => {
    return (
        <div className="flex bg-gray-200 rounded-xl shadow-md m-6">
            <div className="hidden md:block w-1/4">
                <img className="w-full" src="https://docs.microsoft.com/en-us/learn/media/topics/azure-card-balloon.svg" alt="" />
            </div>
            <div className="md:w-3/4">
                <h1 className="text-3xl font-bold py-4">Fill in the info to start a session with a representative</h1>
                <form className="flex flex-col px-4 md:px-16 py-5 text-center" action="">
                    <input className="rounded py-2 my-1 text-center" placeholder="Your Name" type="text" />
                    <input className="rounded py-2 my-1 text-center" placeholder="Your Email" type="email" />
                    <textarea className="rounded text-center" placeholder="Your issue you want to discuss" rows="10"></textarea>
                    <button className="rounded-lg bg-red-600 text-white hover:bg-red-500 md:px-12 py-2 m-2">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default LiveSupport;