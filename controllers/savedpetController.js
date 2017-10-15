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
    
    findAll: function(req, res) {
        db.Pet
          .find(req.query)
          .sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },

    //   findById: function(req, res) {
    //     db.Pet
    //       .findById(req.params.id)
    //       .then(dbModel => res.json(dbModel))
    //       .catch(err => res.status(422).json(err));
    //   },

      create: function(req, res) {
        db.Pet
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },

    //   update: function(req, res) {
    //     db.Pet
    //       .findOneAndUpdate({ _id: req.params.id }, req.body)
    //       .then(dbModel => res.json(dbModel))
    //       .catch(err => res.status(422).json(err));
    //   },

      remove: function(req, res) {
        db.Pet
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
}