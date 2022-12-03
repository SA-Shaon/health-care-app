import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { id, name, img, description } = props.service;
    const navigate = useNavigate();
    const handleDetails = e => {
        navigate(`/services/${e}`);
    }
    return (
        <div className="col card-custom text-bg-secondary">
            <div className="card h-100">
                <img src={img} className="card-img-top card-img-custom" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <button onClick={() => handleDetails(id)} className='btn btn-primary'>Service point</button>
                </div>
            </div>
        </div>

    );
};

export default Service;