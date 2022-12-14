import { useState } from 'react';
import './App.css';
import Courses from './Components/Navigation/Courses';
import Navigation from './Components/Navigation/Navigation';
import CustomCarousel from './Components/Navigation/CustomCarousel';
import Dashboard from './Components/Navigation/Dashboard';
import Footer from './Components/Navigation/Footer';
import Button from 'react-bootstrap/Button';
// import {BrowserRouter,Routes,Route} from "react-router-dom";
// import FormOne from './Components/Forms/FormOne';
// import FormTwo from './Components/Forms/FormTwo';
// import FormThree from './Components/Forms/FormThree';
// import Summary from './Components/Summary';

function App() {
  const [show , setShow]=useState(false);
  return (
    <div className="App">

      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<FormOne/>} />
        <Route path='/formtwo' element={<FormTwo/>} />
        <Route path='/formthree' element={<FormThree/>} />
        <Route path='/summary' element={<Summary/>} />
      </Routes>
      </BrowserRouter> */}

<Button variant="primary"  onClick={()=>setShow(!show)}>Dashboard</Button>

{show && <Dashboard/>}
<hr></hr>
<Navigation/>
<hr></hr>
<CustomCarousel/>
<hr></hr>
<Courses/>
<hr></hr>
<Footer/>
    </div>
  );
}

export default App;
