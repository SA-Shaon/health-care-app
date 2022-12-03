import { Route, Routes } from 'react-router-dom';
import './App.css';
import DetailsDoctor from './pages/DetailsDoctor/DetailsDoctor';
import DetailsService from './pages/DetailsService/DetailsService';
import AboutUs from './pages/Home/AboutUs/AboutUs';
import Contact from './pages/Home/Contact/Contact';
import Doctors from './pages/Home/Doctors/Doctors';
import Header from './pages/Home/Header/Header';
import Home from './pages/Home/Home/Home';
import Services from './pages/Home/Services/Services';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/doctors' element={<Doctors></Doctors>}></Route>
        <Route path='/services/:id' element={<PrivateRoute><DetailsService></DetailsService></PrivateRoute>} />
        <Route path='/doctors/:id' element={<PrivateRoute><DetailsDoctor></DetailsDoctor></PrivateRoute>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
