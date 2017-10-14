const mongoose = require("mongoose");
const db = require("../../models");
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/petrescuers",
    {
      useMongoClient: true
    }
  );

const newUser = [
    {
        firstName: 'Homer',
        lastName: 'Simpson',
        address: '742 Evergreen Terrace',
        addressTwo: '',
        city: 'Springfield',
        state: 'IL',
        zip: 62629,
        phone: 5556667777,
        email: 'homer@gmail.com',
        password: 'password'
    },
    {
        firstName: 'Al',
        lastName: 'Bundy',
        address: '9764 Jeopardy Lane',
        addressTwo: '',
        city: 'Chicago',
        state: 'IL',
        zip: 60642,
        phone: 3122143355,
        email: 'al@gmail.com',
        password: 'password123'
    },
    {
        firstName: 'Peggy',
        lastName: 'Hill',
        address: '84 Rainey Street',
        addressTwo: 'Apt 2',
        city: 'Arlen',
        state: 'TX',
        zip: 73301,
        phone: 5551234567,
        email: 'kingofthehill@gmail.com',
        password: 'password1234'
    }
];

db.User
.remove({})
.then(() => db.User.collection.insertMany(newUser))
.then(data => {
  console.log(data.insertedIds.length + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});

