/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Logo from "../../../images/Gaged-images/Blue Logo.png";
import {Link} from 'react-router-dom'

function Desktop() {
    return (
        <div className='flex justify-between items-center mx-auto py-4 md:px-10 lg:px-10 bg-white'>
            <Link to="/"><img src={Logo} className='' /></Link>
           
        </div>
    )
}

export default Desktop
