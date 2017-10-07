import axios from 'axios';

export default function petfinderApiCall(formObj, animaltype, breed) { 
    const petfinderapistr = makePFQueryString(formObj, animaltype, breed);    
    return axios.get(petfinderApiCall);
}

const makePFQueryString = function(formObj, animaltype, breed) { 
    console.log(formObj); 
    
    if (breed.includes(" ")) { 
        breed = breed.split(' ').join('+');
    }

    let adjustDogSex = function () {
        let sex = ''
        if (formObj.dogGender === "male") {
            sex = "&sex=M"; 
        } else if ( formObj.dogGender === "female") {  
            sex = "&sex=F"; 
            return sex;
        } else {
            return sex;
        } 
    }
    
    let adjustDogSize = function () {
        let size = ''

        if (formObj.dogSize === "small") { 
            size = "&size=S";
            return size;
        } else if (formObj.dogSize === "medium") { 
            size = "&size=M";
            return size;
        } else { 
            size = "&size=L";
            return size;
        }
    } 
    // example query string; http://api.petfinder.com/pet.find?key=e5b1a397d213021b27e64c70bbd8ee34&animal=dog&breed=Chihuahua&size=S&sex=&age=young&location=60657&output=full&format=json
    let petfinderBaseUrl = `http://api.petfinder.com/pet.find?key=e5b1a397d213021b27e64c70bbd8ee34&animal=${animaltype}&breed=` 
    + breed 
    + adjustDogSex() 
    + "&age=" + formObj.dogAge
    + adjustDogSize()
    + "&location=" + formObj.zip 
    + "&output=full&format=json";   

    return petfinderBaseUrl; 
}