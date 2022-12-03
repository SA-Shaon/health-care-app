import React from 'react';
import { useParams } from 'react-router-dom';
import img1 from '../../images/services/hush-naidoo-jade-photography-9ROuHJ25XVc-unsplash.jpg';
import img2 from '../../images/services/jc-gellidon-UIp163xCV6w-unsplash.jpg';
import img3 from '../../images/services/owen-beard-DK8jXx1B-1c-unsplash.jpg';
import img4 from '../../images/services/philippe-spitalier-P_YA5TsPD4Y-unsplash.jpg';
import img5 from '../../images/services/toa-heftiba-v1NeSutzVIA-unsplash.jpg';
import img6 from '../../images/services/tom-claes-HIdUiamYIs0-unsplash.jpg';

const DetailsService = () => {
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
    const id = useParams()
    const selectedService = services.find((service) => service.id === parseInt(id.id));
    const { name, img, description } = selectedService;
    return (
        <div className="col   text-bg-secondary text-center">
            <div className="card h-100">
                <img src={img} className="card-img-top w-25 mx-auto " alt="..." />
                <div className="card-body doctor-body">
                    <h5 className="card-title">{name}</h5>
                    <p style={{ margin: '2px' }} className="card-text">Types : {description}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailsService;