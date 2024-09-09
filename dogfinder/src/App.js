import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DogList from './DogList';
import DogDetails from './DogDetails';

function App() {
  const dogs =
  [
    {
      name: "Whiskey",
      age: 5,
      src: "https://optimeal.com/cdn/shop/articles/dog_popcorn.jpg?v=1653048706",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: "https://media-be.chewy.com/wp-content/uploads/2023/02/02150759/samoyed-snow-dog.jpg",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: "https://cdn-ghckb.nitrocdn.com/ywsRCaHzPZOrRGmIQthcAKzblzYFHUKW/assets/images/optimized/rev-d3835d7/blog.myollie.com/wp-content/uploads/2020/12/grumpy-french-bulldog-stands-in-the-rain.jpg",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: "https://www.dogster.com/wp-content/uploads/2013/11/Shiba-Inu-resisting-to-walk_katsunori_Shutterstock-600x399.jpg",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ];

return(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path='/dogs' element={<DogList dogs={dogs}/>}></Route>
        <Route path='/dogs/:name' element={<DogDetails dogs={dogs} />}/>
      </Routes>
    </BrowserRouter>
  </div>
)
}
export default App;
