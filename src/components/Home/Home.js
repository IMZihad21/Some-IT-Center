import React from 'react';
import { useServices } from '../../hooks/useServices';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';

const Home = () => {
    // Fetch API to load services
    const [ services ] = useServices();
    // Slice to only 4 items
    const slicedServices = services.slice(0,4);

    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section className="grid grid-cols-2 gap-5 m-5 p-2">
                {
                    slicedServices.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </section>
        </div>
    );
};

export default Home;