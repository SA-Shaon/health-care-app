import React from 'react';

const Footer = () => {
    return (
        <div className='text-center'>
            <small>Copyright © {(new Date().getFullYear())}</small>
        </div>
    );
};

export default Footer;