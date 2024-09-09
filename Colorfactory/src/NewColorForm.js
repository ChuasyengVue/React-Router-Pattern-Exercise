import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function NewColorForm({ addColor }) {
    const [colorName, setColorName] = useState('');
    const [colorValue, setColorValue] = useState(`#ffffff`);
    const navigate = useNavigate();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(colorName && colorValue){
            addColor ({name: colorName, color: colorValue});
        navigate('/colors');
        }
        
    }

    const handleColorName = (evt) => {
        setColorName(evt.target.value);
    }

    const handleColorValue = (evt) => {
        setColorValue(evt.target.value);
    }

     const rainbowBackgroundStyle = {
        background: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)',
        minHeight: '100vh', 
        padding: '20px',
        boxSizing: 'border-box',
        textAlign: 'center'
     }

    return(
        <div style={rainbowBackgroundStyle}>
            <h1>Add A New Color</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Color Name: 
                        <input type='text' 
                        value={colorName}
                        onChange={handleColorName}
                        placeholder='Enter a Color Name'></input>
                    </label>
                </div>

                <div>
                    <label>Color Value: 
                        <input type='color'
                        value={colorValue}
                        onChange={handleColorValue}></input>
                    </label>
                </div>
                
                <button type='submit'>Add this color</button>

            </form>
        </div>
    )
}
export default NewColorForm;