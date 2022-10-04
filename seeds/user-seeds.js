const { User } = require('../models');

const userData = [
  {
    username: 'Albert Einstein',
    email: 'albertein@gmail.com',
    password: 'born genius'
  },
  {
    username: 'Marie Curie',
    email: 'curimari@yahoo.fr',
    password: 'sciencefr'
  },
  {
    username: 'Nikola Tesla',
    email: 'nikotesla@example.com',
    password: 'nkengineer'
  },
  {
    username: 'Isaac Newton',
    email: 'sirisaac89@yahoo.com',
    password: 'popandbrain'
  },
  {
    username: 'Bocar Ly',
    email: 'bldiallo@yahoo.fr',
    password: 'computer'
  },
  
];

const seedCategories = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedCategories;
