import axios from 'axios';

export default {
    
    registerUser: function (...user) { 
        console.log('in axios register new user');
        console.log(user[0]);
        console.log(user[0].firstName);
        
        const newUser = { 
            firstName: user[0].firstName,
            lastName: user[0].lastName,
            address: user[0].address,
            addressTwo: user[0].addressTwo,
            city: user[0].city,
            state: user[0].state,
            zip: user[0].zip,
            phone: user[0].phone,
            email: user[0].email,
            password: user[0].password
        }

        return axios.post('/api/signup', newUser)
            .then((res) => console.log(res))
            .catch((err) => console.log(err.response));
    },

    savePet: function (...user) { 
        console.log('in axios save pet');
        console.log(user[0]);
        console.log(user[0].firstName);
        
        const newPet = { 
            petType: '', //insert variable name of pet type from front end
            petId: this.id.$t, //response.petfinder.pets.pet[i].id.$t,
            name: this.name.$t, //response.petfinder.pets.pet[i].name.$t,
            age: this.age.$t, //response.petfinder.pets.pet[i].age.$t,
            city: this.contact.city.$t, //response.petfinder.pets.pet[i].contact.city.$t,
            email: this.contact.email.$t, //response.petfinder.pets.pet[i].contact.email.$t,
            sex: this.sex.$t, //response.petfinder.pets.pet[i].sex.$t,
            size: this.size.$t, //response.petfinder.pets.pet[i].size.$t,
            description: this.description.$t, //response.petfinder.pets.pet[i].description.$t,
            image: this.media.photos.photo[3].$t //response.petfinder.pets.pet[i].media.photos.photo[3].$t,
        },

        return axios.post('/api/savepet', newPet)
            .then((res) => console.log(res))
            .catch((err) => console.log(err.response));
    },
    
    getBreedMatch: function() {
        console.log('in axios petbreedmatch');
        return axios.get("/api/petbreedmatch");
    },
    // // Gets the book with the given id
    // getBook: function(id) {
    //   return axios.get("/api/books/" + id);
    // },
    // // Deletes the book with the given id
    // deleteBook: function(id) {
    //   return axios.delete("/api/books/" + id);
    // },
    // // Saves a book to the database
    // saveBook: function(bookData) {
    //   return axios.post("/api/books", bookData);
    // }
};

/*
// `auth` indicates that HTTP Basic auth should be used, and supplies credentials. 
  // This will set an `Authorization` header, overwriting any existing 
  // `Authorization` custom headers you have set using `headers`. 
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },
 
  // `responseType` indicates the type of data that the server will respond with 
  // options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream' 
  responseType: 'json', // default 
 
  // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token 
  xsrfCookieName: 'XSRF-TOKEN', // default 
 
  // `xsrfHeaderName` is the name of the http header that carries the xsrf token value 
  xsrfHeaderName: 'X-XSRF-TOKEN', // default 

  */