import React, {useState} from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import ColorList from './ColorList';
import ColorDetail from './ColorDetail';
import NewColorForm from './NewColorForm';


function App() {

  const [colors, setColors] = useState([
    { color: 'red', name: 'Red' },
    { color: 'blue', name: 'Blue' },
    { color: 'green', name: 'Green' }
]);

const addColor = (newColor) => {
    setColors([newColor, ...colors]); // Add new color to the top
};
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/colors' element={<ColorList colors={colors} />}></Route>
          <Route path='/colors/:name' element={<ColorDetail colors={colors}/>}/>
          <Route path='/colors/new' element={<NewColorForm addColor={addColor}/>} />

          <Route path='*' element={<Navigate to='/colors'  />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

