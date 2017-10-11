var request = require('request');

var dogBreedArray = ['Bulldog', 'Labrador Retriever'];
var wolframBaseUrlStart = 'http://api.wolframalpha.com/v2/query?input=';
var wolframBaseUrlEnd = '%20dog&appid=2TT3R3-JA5HLQH996&output=json';

for (var i = 0; i < dogBreedArray.length; i++) {
    var searchTerm = wolframBreed(dogBreedArray[i]);
    var wolframQueryUrl = wolframBaseUrlStart + searchTerm + wolframBaseUrlEnd; 
    console.log(wolframQueryUrl); 
    getDogBreedData(wolframQueryUrl);
}


function wolframBreed(dogBreed) {
    var replaced = dogBreed.split(' ').join('%20');
    return replaced;
}

function getDogBreedData(url) {
    request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var results = JSON.parse(response);
      console.log(results)
    }
  })
}
            

