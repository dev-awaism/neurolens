import Home from './Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Form from './Form';
import BackgroundWithGradient from './BackgroundWithGradient';
import Nav from './Nav';
import Graph from './Graph';
import Signup from './Signup'
import Report from './Report';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import ProtectedRoute from './ProtectedRoute';


function App() {
  return (

    <>
      <Nav />
      <Routes>
        <Route path='/' element={<BackgroundWithGradient />}></Route>
        <Route path='/Form' element={<Form />}></Route>
        <Route path="/Home" element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                } />
        <Route path='Signup' element={<Signup />}></Route>
        <Route path='Report' element={<Report />}></Route>

        <Route path='About' element={<About />}></Route>
        <Route path='Contact' element={<Contact />}></Route>
        <Route path='Services' element={<Services />}></Route>

      </Routes>
    </>
  );
}

export default App;
// Updated on Sun Jul  6 12:57:27 CDT 2025
// Updated on Sun Jul  6 12:57:28 CDT 2025
