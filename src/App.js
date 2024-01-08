
// import Card from './components/Card';
import './App.css';
import Home from './components/Home';
import Add from './components/Add';
import Singleview from './components/Singleview';
import { Route, Routes } from 'react-router-dom';
import Edit from './components/Edit';
import Cardview from './components/Cardview';


function App() {
  return (
    <div className="App">
     
    
    
    
     <Routes>
       <Route path='/' element={ <Home />} />
       <Route path='/add' element={ <Add/>} />
       <Route path='/card' element={ <Cardview/>} />
       <Route path='/singleview/:id' element={<Singleview/>}/>
       <Route path='/edit/:id' element={<Edit/>}/>
     </Routes>
    </div>
  );
}

export default App;
