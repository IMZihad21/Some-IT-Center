import React from 'react';

const About = () => {
    return (
        <div className="flex bg-gray-200 rounded-xl shadow-md m-6">
            <section className="w-1/4">
                <img className="w-full" src="https://docs.microsoft.com/en-us/learn/media/topics/azure-card-train.svg" alt="" />
            </section>
            <section className="w-3/4 m-auto">
                <h1 className="text-3xl font-semibold mx-20">We are providing exclusive courses which are essential for new learners.<br/> Azure is a cloud service from Microsoft providing various useful services such as Cloud storage, Database, Virtual machines.</h1>
            </section>
        </div>
    );
};

export default About;