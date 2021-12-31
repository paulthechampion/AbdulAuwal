import './css/App.css';
import {BrowserRouter, Route,Routes} from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import TagCase from "./components/TagCase"
import Footer from "./components/Footer"
import WeeCount from "./components/WeeCount"
import Sapay from "./components/Sapay"
import PhoneMenu from './components/PhoneMenu';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
              <div className="main-content">
                  <Header/>
                  <PhoneMenu/>
                  <Routes>
                      <Route exact path="/" element={<Home/>}/>   
                      <Route exact path="/tag-case" element={<TagCase/>}/> 
                      <Route exact path="/wee'count" element={<WeeCount/>}/> 
                      <Route exact path="/sapay" element={<Sapay/>}/> 
                  </Routes>    
              </div>
              <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
