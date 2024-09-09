import React from 'react';
import {Link} from 'react-router-dom'

function DogList({ dogs }) {
    return(
        <div>
            <h1>Homepage</h1>
            <h3>Dog List</h3>

            <ul>
                {dogs.map((dog) => (
                    <li key={dog.name}>
                        <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default DogList;