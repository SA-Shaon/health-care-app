import React from 'react';
import img1 from '../../../images/services/hush-naidoo-jade-photography-9ROuHJ25XVc-unsplash.jpg';
import img2 from '../../../images/services/jc-gellidon-UIp163xCV6w-unsplash.jpg';
import img3 from '../../../images/services/owen-beard-DK8jXx1B-1c-unsplash.jpg';
import img4 from '../../../images/services/philippe-spitalier-P_YA5TsPD4Y-unsplash.jpg';
import img5 from '../../../images/services/toa-heftiba-v1NeSutzVIA-unsplash.jpg';
import img6 from '../../../images/services/tom-claes-HIdUiamYIs0-unsplash.jpg';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const services = [
        {
            id: 1,
            name: 'Curative Spin',
            description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
            img: img1
        },
        {
            id: 2,
            name: 'Curative Spin',
            description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
            img: img2
        },
        {
            id: 3,
            name: 'Curative Spin',
            description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
            img: img3
        },
        {
            id: 4,
            name: 'Curative Spin',
            description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
            img: img4
        },
        {
            id: 5,
            name: 'Curative Spin',
            description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
            img: img5
        },
        {
            id: 6,
            name: 'Curative Spin',
            description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
            img: img6
        },
    ]
    return (
        <div className='container'>
            <h1>Our services</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;