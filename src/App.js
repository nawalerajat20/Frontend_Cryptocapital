import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Privacy from './Components/Privacy';
import Feedback from './Components/Feedback';
import Home from './Components/Home';

import Cryptoinfo from './Components/Cryptoinfo';
//import Report_a_bug from './Components/Report_a_bug';
import FAQ from './Components/FAQ';
import Predictions from './Components/Predictions';
import Footer from './Components/Footer';
// import Table from './Components/Table';
import News from './Components/News';
// import Userprofile from './Components/Userprofile';
//import './Report_a_bug.css'
import './Navbar.css';
import './Home.css'
import './App.css';
import './Datatbl.css';
import './Footer.css';
import './Privacy.css';
import './Feedback.css';
import './Card.css';
import './Userprofile.css';



function App() {
  return (
    <div>
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route  path='/' element={<Home/>}></Route>
            {/* <Route path='/Home' element={Home}></Route> */}
            <Route exact path='/cryptoinfo' element={<Cryptoinfo/>}></Route>
            <Route exact path='/predictions' element={<Predictions/>}></Route>
            <Route exact path='/faqs' element={<FAQ/>}></Route>
            <Route exact path='/news' element={<News/>}></Route>
            //<Route exact path='/report_a_bug' element={<Report_a_bug/>}></Route>
            <Route exact path='/privacy' element={<Privacy/>}></Route>
            <Route exact path='/feedback' element={<Feedback/>}></Route>
            {/* <Route exact path='/predictions' element={<Predictions/>}></Route> */}

            
          </Routes>
          <Footer/>
      </BrowserRouter>
      
     {/*  <Report_a_bug/> */}
      {/* <Home/> */}
      {/* <Table/> */}
      {/* <Footer/> */}
      {/* <Privacy/> */}
      {/* <Feedback/> */}
      {/* <Cryptoinfo/> */}
      {/* <FAQ/> */}
      {/* <Predictions/> */}
      {/* <News/> */}
      {/* <Userprofile/> */}
    </div>
  );
}

export default App;
