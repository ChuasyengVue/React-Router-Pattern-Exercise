import React from 'react';
import {Link} from 'react-router-dom'



function ColorList({colors }) {
    
    
    return(
        <div>
            <h1>Welcome to the color factory!</h1>
            
                <Link to={`/colors/new`}>Add A New Color.</Link>
            
            <h3>Please Select A Color.</h3>
            
            <ul>
                {colors.map((color, index) => (
                    <p key={index}>
                        <Link to={`/colors/${color.name}`}>{color.name}</Link>
                    </p>
                ))}
            </ul>
        </div>
    )
}

export default ColorList;

