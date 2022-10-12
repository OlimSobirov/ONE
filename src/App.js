
import './App.scss';
import Header from "./components/Header/Header";
import Home from './pages/Home/Home';
import Destination from './pages/Destination/Destination';
import {Route, Routes} from 'react-router-dom'
import Marc from './pages/mars/Marc';


function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/destination'element={<Destination/>}/>
      <Route path='/destination/mars'element={<Marc/>}/>

      
    </Routes>
  

    </div>
  );
}

export default App;
  
