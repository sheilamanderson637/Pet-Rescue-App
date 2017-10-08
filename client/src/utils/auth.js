export default class Auth {
    
    // Authenticate a user. Save a token string in Local Storage
    static authenticateUser(token) { 
        localStorage.setItem('token', token);
    }

    // Check if user is authenticated by checking if token stored 
    // in local storage
    static isUserAuthenticated() { 
        return localStorage.getItem('token') !== null;
    }

    //Remove token from localstory to deauthenticate user
    static deauthenticateUser() { 
        localStorage.removeItem('token');
    }

    // get a token value
    static getToken() { 
        return localStorage.getItem('token');
    }
}