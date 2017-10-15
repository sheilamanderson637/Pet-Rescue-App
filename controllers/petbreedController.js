const db = require("../models");

// GUIDANCE 
// req.query comes from query parameters in the URL such as http://foo.com/somePath?name=ted where 
// req.query.name === "ted".

// req.params comes from path segments of the URL that match a parameter in the route definition 
// such as /song/:songid. So, with a route using that designation and a URL such as /song/48586, then 
// req.params.songid === "48586".

// req.body properties come from a form post where the form data (which is submitted in the body contents) 
// has been parsed into properties of the body tag.

module.exports = { 
    
    findallBreedFact: function(req, res) { 
        db.BreedFact
            .find(req.query)
            .then(breeds => res.json(breeds))
            .catch(err => res.status(422).json(err));
    }, 

    breedFactRecord: function(req, res) { 
        db.BreedFact
            .findOne(req.query)
            .then(breed => res.json(breed))
            .catch(err => res.status(422).json) 
    },

}