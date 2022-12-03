import React from 'react';
import { useParams } from 'react-router-dom';
import img2 from '../../images/doctors/bruno-rodrigues-279xIHymPYY-unsplash.jpg';
import img1 from '../../images/doctors/alexandr-podvalny-tE7_jvK-_YU-unsplash.jpg';
import img3 from '../../images/doctors/rian-ramirez-rm7rZYdl3rY-unsplash.jpg';

const DetailsDoctor = () => {
    const id = useParams();
    const doctors = [
        {
            id: 1,
            name: 'Dr. David jr',
            typesOf: 'Surgeon',
            experience: '19 Years+',
            language: 'English, Spanish',
            speaciality: 'Dentist, Cardiologist, Chiropractor, Pediatrician',
            img: img1
        },
        {
            id: 2,
            name: 'Dr. Michel Jordan',
            typesOf: 'Medicine',
            experience: '12 Years+',
            language: 'English, German',
            speaciality: 'Dentist, Cardiologist, Chiropractor, Pediatrician',
            img: img2
        },
        {
            id: 3,
            name: 'Dr. Ashley Willson',
            typesOf: 'Surgeon',
            experience: '15 Years+',
            language: 'English',
            speaciality: 'Dentist, Cardiologist, Chiropractor, Pediatrician',
            img: img3
        }

    ];

    const selectedDoctor = doctors.find((doctor) => doctor.id === parseInt(id.id));
    const { img, name, typesOf, experience, language, speaciality } = selectedDoctor;
    return (
        <div className="col   text-bg-secondary text-center">
            <div className="card h-100">
                <img src={img} className="card-img-top w-25 mx-auto " alt="..." />
                <div className="card-body doctor-body">
                    <h5 className="card-title">{name}</h5>
                    <p style={{ margin: '2px' }} className="card-text">Types : {typesOf}</p>
                    <p style={{ margin: '2px' }} className="card-text">Experience : {experience}</p>
                    <p style={{ margin: '2px' }} className="card-text">Language : {language}</p>
                    <p style={{ margin: '2px' }} className="card-text">Speciality : {speaciality}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailsDoctor;