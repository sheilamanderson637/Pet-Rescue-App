const db = require("../models");

module.exports = { 
    
    findallBreedInfo: function(req, res) { 
        db.BreedInfo
            .find(req.query)
            .then(breeds => res.json(breeds))
            .catch(err => res.status(422).json(err));
    }, 

    breedInfoRecord: function(req, res) { 
        db.BreedInfo
            .findOne(req.query)
            .then(breed => res.json(breed))
            .catch(err => res.status(422).json) 
    },

    findallBreedlookups: function(req, res) { 
        db.BreedLookup
            .find(req.query)
            .then(breeds => res.json(breeds))
            .catch(err => res.status(422).json(err));
    }, 

    findbreedMatch: function(req, res) { 
        db.BreedLookup
            .findOne(req.query)
            .then(breed => res.json(breed))
            .catch(err => res.status(422).json) 
    },


}