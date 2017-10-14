import axios from 'axios';


export default function petfinderApiCall(formObj) { 
    console.log('in axios petfinder proxy call');
    console.log(formObj);
    return axios.get('/api/petfinder/get', { 
        params: { 
            age: formObj.age,
            sex: formObj.sex,
            size: formObj.size, 
            zip: formObj.zip,
            animaltype: formObj.animaltype,
            breed: formObj.breed
        }
    }); 
    // const petfinderapistr = makePFQueryString(formObj, animaltype, breed);    
    // return jsonp(petfinderapistr, function (err, data) { 
    //     if (err) return console.log(err) 
    //     console.log(data);
    // });
}

// const makePFQueryString = function(formObj, animaltype, breed) { 
//     console.log(formObj);
//     console.log(animaltype); 
//     console.log(breed);
    
//     if (breed.includes(" ")) { 
//         breed = breed.split(' ').join('+');
//     }

//     let adjustSex = function () {
//         let sex = '' 
//         if (formObj.gender === "male") {
//             sex = "&sex=M"; 
//         } else if ( formObj.gender === "female") {  
//             sex = "&sex=F"; 
//             return sex;
//         } else {
//             return sex;
//         } 
//     }
    
//     let adjustSize = function () {
//         let size = ''
//         if (animaltype === 'dog') { 
//             if (formObj.dogSize === "small") { 
//                 size = "&size=S";
//                 return size;
//             } else if (formObj.dogSize === "medium") { 
//                 size = "&size=M";
//                 return size;
//             } else { 
//                 size = "&size=L";
//                 return size;
//             }
//         } else if (breed === 'cat') { 
//             console.log('cat chosen')
//             console.log(formObj);
//         } else {
//             console.log(`uh oh, a breed wasn't selected`);
//         }

//     } 

//     const crossoriginme = 'https://crossorigin.me/';
//     // example query string; http://api.petfinder.com/pet.find?key=e5b1a397d213021b27e64c70bbd8ee34&animal=dog&breed=Chihuahua&size=S&sex=&age=young&location=60657&output=full&format=json
//     let petfinderBaseUrl = `${crossoriginme}http://api.petfinder.com/pet.find?key=e5b1a397d213021b27e64c70bbd8ee34&animal=${animaltype}&breed=` 
//     + breed 
//     + adjustSex() 
//     + "&age=" + formObj.age
//     + adjustSize()
//     + "&location=" + formObj.zip 
//     + "&output=full&format=json";   

//     return petfinderBaseUrl; 
// } 