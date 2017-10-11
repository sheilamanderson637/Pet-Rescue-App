// // axios get request returns a promise which resolves with SpaceX API results
// axios.get('https://api.spacexdata.com/v1/launches')
// // arrow function to resolve the promise, handle the response from the API
// .then(response => getFailureData(response.data))
// .catch(err => console.log(err));

// Instructions:
var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];
var random_value = 34;
// var random_value = stuff[ Math.floor( Math.random() * 14 ) ];
// Write a for loop that looks at each index of the array to see if it matches the random value
// If it does match the random value display an alert box with the index of the array and the value

for (var index = 0; index < stuff.length; index++) {
    var element = stuff[index];
    if (element === random_value) {
        console.log('The position is ' + element + 'and the number is ' + index);
    }   
}