const express = require('express');
const router = express.Router(); 
const request = require('request');
const querystring = require('querystring');


router.get('/get', function(req, res) { 
    console.log('in petfinder call');
    // console.log(req.query);
    // console.log ( makePFQueryString(req.query)); 
    const petfinderapistr = makePFQueryString(req.query);
    request(petfinderapistr, function(error, response, body) { 
        
        if (!error && response.statusCode === 200) {
           
            // console.log(JSON.parse(body).petfinder.pets);
            // console.log("petfinder data: " + JSON.parse(body).petfinder.pets.pet[0].age.$t);
            // console.log("petfinder data: " + JSON.parse(body).petfinder.pets.pet[0].size.$t); 

            var results = JSON.parse(body); 
            // console.log(results);
            res.json(results);
        }
    });
});

const makePFQueryString = function(formObj) { 
    console.log(formObj);
    // console.log(animaltype); 
    // console.log(breed);
    
    if (formObj.breed.includes(" ")) { 
        formObj.breed = formObj.breed.split(' ').join('+');
    }

    let adjustSex = function () {
        let sex = '' 
        if (formObj.gender === "male") {
            sex = "&sex=M"; 
        } else if ( formObj.gender === "female") {  
            sex = "&sex=F"; 
            return sex;
        } else {
            return sex;
        } 
    }
    
    let adjustSize = function () {
        let size = ''
        if (formObj.animaltype === 'dog') { 
            if (formObj.size === "small") { 
                size = "&size=S";
                return size;
            } else if (formObj.size === "medium") { 
                size = "&size=M";
                return size;
            } else { 
                size = "&size=L";
                return size;
            }
        } else if (formObj.breed === 'cat') { 
            console.log('cat chosen')
            console.log(formObj);
            if (formObj.size === "small") { 
                size = "&size=S";
                return size;
            } else if (formObj.size === "medium") { 
                size = "&size=M";
                return size;
            } else { 
                size = "&size=L";
                return size;
            }
        } else {
            console.log(`uh oh, a breed wasn't selected`);
        }

    } 

    const crossoriginme = 'https://crossorigin.me/';
    // example query string; http://api.petfinder.com/pet.find?key=e5b1a397d213021b27e64c70bbd8ee34&animal=dog&breed=Chihuahua&size=S&sex=&age=young&location=60657&output=full&format=json
    let petfinderBaseUrl = `http://api.petfinder.com/pet.find?key=e5b1a397d213021b27e64c70bbd8ee34&animal=${formObj.animaltype}&breed=` 
    + formObj.breed 
    + adjustSex() 
    + "&age=" + formObj.age
    + adjustSize()
    + "&location=" + formObj.zip 
    + "&output=full&format=json";   
    console.log(petfinderBaseUrl);
    return petfinderBaseUrl; 
} 



module.exports = router;