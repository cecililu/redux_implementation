
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Homepage } from './Homepage.js';
import { buyCarAction, sellCarAction } from './Global-States/Action-Creator/reducer1Action';
import { Button, Card, Paper, Typography } from '@mui/material';
import { BuyCar } from './components/BuyCar';
import { Listcar } from './components/Listcar';


//start


function App() {
 
  return (
   
    <div className="App">
      
      <BuyCar/>
      <Listcar/>
      
    </div>

  );
}

export default App;
