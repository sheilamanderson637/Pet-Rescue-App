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
    
    getBreedMatch: function(breedMatchVal) {
        console.log('in axios petbreedmatch');
        console.log("breedmatch val: " + breedMatchVal);
        return axios.get("/api/petbreedmatch", { 
            params: { 
                breedMatchVal: breedMatchVal
            }
        });
    },

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