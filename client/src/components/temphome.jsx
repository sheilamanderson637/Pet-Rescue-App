import React from 'react'; 
import Petfinder from '../utils/petfinderapi';

let testObj = { 
    age: 'young',
    sex: 'male',
    size: 'small', 
    zip: '60089',
    animaltype: 'dog',
    breed: 'pug'
}

function getPetsToRescue(obj) { 
    console.log(obj);
    Petfinder(obj)
    .then((res) => {
        console.log(res);
        console.log(res.data.petfinder.pets.pet)
    }).catch((err) => console.log(err));
}


// getPetsToRescue(testObj);

const Hometemp = () => (
    <div className='container'>
        <div className="jumbotron">
            <h1 className="display-3">Finding Fido Temp</h1>
            <p>temp component until home page component elements completed. </p>
        </div>
    </div>
); 

export default Hometemp; 