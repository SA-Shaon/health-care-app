import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import CarouselCompo from '../Carousel/CarouselCompo';
import Doctors from '../Doctors/Doctors';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <CarouselCompo></CarouselCompo>
            <AboutUs></AboutUs>
            <Services></Services>
            <Doctors></Doctors>
            <Footer></Footer>
        </div>
    );
};

export default Home;