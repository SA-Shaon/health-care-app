import React from 'react';
import img1 from '../../../images/doctors/alexandr-podvalny-tE7_jvK-_YU-unsplash.jpg';
import img2 from '../../../images/doctors/bruno-rodrigues-279xIHymPYY-unsplash.jpg';
import img3 from '../../../images/doctors/rian-ramirez-rm7rZYdl3rY-unsplash.jpg';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
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

    const handleDoctor = (id) => {
        const selectedDoctor = doctors.find((doctor) => doctor.id === id);
        <Doctor doctor={selectedDoctor}></Doctor>
    }
    return (
        <div className='container'>
            <h1>Doctors</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    doctors.map(doctor => <Doctor
                        handleDoctor={handleDoctor}
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;