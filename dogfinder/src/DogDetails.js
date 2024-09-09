import React from 'react';
import { useParams , Navigate, useNavigate} from 'react-router-dom';

function DogDetails({dogs}) {
    const { name } = useParams();
    const dog = dogs.find((d) => d.name === name);
    const navigate = useNavigate();

    // if not dog return to homepage
    if(!dog) return <Navigate to={'/dogs'} />;

    // back button
    const handleBack = () => {
        navigate('/dogs');
    }

    return(
        <div>
            <h1>Homepage</h1>
            <h3>Dog List</h3>

            <ul>
                {dog.facts.map((fact, index) => (
                    <li key={index}>{fact}</li>
                ))}
            </ul>
            <button onClick={handleBack}>Go back</button>
        </div>
    )
}
export default DogDetails;