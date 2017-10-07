import axios from 'axios';

export default function callWolframApi (pettype, breed) { 

     const wolframBaseUrlStart = 'http://api.wolframalpha.com/v2/query?input=';
     const wolframBaseUrlEnd = '%20dog&appid=2TT3R3-JA5HLQH996&output=json';
         
    console.log('*******************************');
    console.log('Wolfram API get request info');
    console.log(`pettype = ${pettype}`);
    console.log(`breed = ${breed}`); 

    var wolframApiUrl = wolframBaseUrlStart + "WHAT TO CONCAT?" + wolframBaseUrlEnd;

    console.log(wolframApiUrl); 

    axios.get(wolframApiUrl)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
}
