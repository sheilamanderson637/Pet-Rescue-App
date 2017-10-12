import axios from 'axios';

export default {
    
    registerUser: function (...user) { 
        console.log('in axios register mew user');
        console.log(user[0]);
        console.log(user[0].firstName);
        
        const newUser = { 
            firstName: user[0].firstName,
            lastName: user[0].lastName,
            password: user[0].password,
            email: user[0].email,
            zip: user[0].zip
        }

        return axios.post('/api/signup', newUser);
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