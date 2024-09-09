import React, { useEffect } from 'react';
import {useParams, Navigate, useNavigate} from 'react-router-dom';

function ColorDetail({colors}) {
    const {name} = useParams();
    const color = colors.find((c) => c.name === name);
    const navigate = useNavigate();

    // add color to body background
    useEffect(() => {
        if(color) {
            document.body.style.backgroundColor = color.color;
        }
        return ()=> {
            document.body.style.backgroundColor ='';
        }
    },[color]);

    // if color page doesn't exists
    if(!color) return <Navigate to="/colors"/>;

    const handleBack = () => {
        navigate('/colors');
    }

    return(
        <div style={{textAlign:'center', fontSize: '5rem'}}>  
            <p>This is {color.name}</p>
            <p>Isn't it beautiful?</p>
           <button onClick={handleBack}>GO BACK</button>
        </div>
    )
}

export default ColorDetail;