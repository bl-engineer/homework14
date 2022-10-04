const { Post } = require('../models');

const postData = [
  {
    post_title: 'Why MVC is important',
    post_content: `MVC allows developers to maintain a true separation of concerns, devising their code between the Model
    layer for data, the View layer for design, and the controller layer for application logic.`,
    user_id: 1
  },
  {
    post_title: 'Authentication vs. Authorization',
    post_content: `There is a difference between authentication and authorization. Authentication
    means confirming your own identity whereas authorization means being allowed access to the system.`,
    user_id: 1
  },
  {
    post_title: 'Object-Relational Mapping',
    post_content: `I have really loved learning about ORMs. It's really simplified the way
    I create queries in SQL!`,
    user_id: 2
  },
  {
    post_title: 'How deeper crossing borders transend differences between cultures?',
    post_content: `An advantures man is better than based knowledgable personne who never crosses any border`,
    user_id: 3
  },
  {
    post_title: `Science sans conscience est ruine de l'ame`,
    post_content: `La science nous ouvres les portes les sophistiquees de notre existance mais si elle n'ai pas
    controlee, elle nous poussera a notre propre destruction`,
    user_id: 5
  }
];

const seedCategories = () => Post.bulkCreate(postData);

module.exports = seedCategories;
