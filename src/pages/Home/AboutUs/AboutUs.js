import React from 'react';
import img from '../../../images/about.jpg';

const AboutUs = () => {
    return (
        <div class="row container mt-3">
            <div class="col-md-6 d-flex  justify-content-center align-items-center">
                <img className='w-100 rounded' src={img} alt="" />
            </div>
            <div class="col-md-6 d-flex align-items-center">
                <div>
                    <h3>About us</h3>
                    <p>Clinics typically provide non-emergency outpatient care that's routine or preventive. Although hospitals can also provide outpatient services, they focus more on providing inpatient care. You'll typically go to a hospital for specialist care, surgery, or for more serious, life-threatening conditions.Some of the services offered at a retail clinic may include:
                        treatment for minor illnesses, such as: colds. ear pain. bug bites. minor cuts or wounds. skin rash. strep throat. UTIs.
                        basic laboratory testing.
                        routine health screenings.
                        vaccinations.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;