
import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Footer from './component/Footer/Footer';
import Intervetion from './component/Intervetion/Intervetion';
import About from './component/About/About';
import Region from './component/Region/Region';


function App() {
  return (
    <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Intervetion" element={<Intervetion/>}/>
      <Route path="/Region" element={<Region/>}/>
    </Routes>
  <Footer/>
   </Router>
  );
}

export default App;
