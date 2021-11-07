/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './componenets/landing-pages-components/LandingPage';
import SignUpGeneral from './sections/SignUp/SignUpGeneral';
import SetUpProfile1 from './sections/SignUp/SetUpProfile-1';
import SetUpProfile2Individual from './sections/SignUp/SetUpProfile-2-individual';
import SetUpProfile2Business from './sections/SignUp/SetUpProfile-2-business';
import Login from './sections/Login';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/signup' element={<SignUpGeneral/>} />
        <Route path='/signup/1' element={<SetUpProfile1/>} />
        <Route path='/signup/2/individual' element={<SetUpProfile2Individual/>} />
        <Route path='/signup/2/business' element={<SetUpProfile2Business/>} />
        <Route path='/login' element={<Login/>} />

      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
