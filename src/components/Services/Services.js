import React from 'react';
import { useServices } from '../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    // Fetch API to load services
    const [ services ] = useServices();
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 m-5">
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;