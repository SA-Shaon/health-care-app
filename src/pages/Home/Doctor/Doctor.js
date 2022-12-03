import React from 'react';
import { useNavigate } from 'react-router-dom';


const Doctor = (props) => {
    const { id, name,
        typesOf,
        experience,
        language,
        speaciality,
        img } = props.doctor;
    const navigate = useNavigate();
    const handleDetails = e => {
        navigate(`/doctors/${e}`);
    }
    return (
        <div className="col card-custom  text-bg-secondary text-center">
            <div className="card h-100">
                <img src={img} className="card-img-top card-img-custom" alt="..." />
                <div className="card-body doctor-body">
                    <h5 className="card-title">{name}</h5>
                    <p style={{ margin: '2px' }} className="card-text">Types : {typesOf}</p>
                    <p style={{ margin: '2px' }} className="card-text">Experience : {experience}</p>
                    <p style={{ margin: '2px' }} className="card-text">Language : {language}</p>
                    <p style={{ margin: '2px' }} className="card-text">Speciality : {speaciality}</p>
                    <div onClick={() => handleDetails(id)} className="btn btn-primary">Visit</div>
                </div>
            </div>
        </div>

    );
};

export default Doctor;