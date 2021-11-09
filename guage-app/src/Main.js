import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import SignUpGeneral from './sections/SignUp/SignUpGeneral';
import SignUpBusiness from './sections/SignUp/SignUpBusiness';
import SignUpIndividual from './sections/SignUp/SignUpIndividual';



function Main ()
{
    return (
        <Routes> {/* The Switch decides which component to show based on the current URL.*/}
            <Route path='/signup' element={<SignUpGeneral />}></Route>
            <Route path='/signup/business' element={<SignUpBusiness />}></Route>
            <Route path='/signup/individual' element={<SignUpIndividual />}></Route>
        </Routes>
    );
}

export default Main;