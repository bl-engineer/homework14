const { Comment } = require('../models');

const commentData = [
  {
    comment_content: 'Beyond borders is beyond knowledge. Curious of what what planet Mars kept for us!',
    user_id: 1,
    post_id: 4
  },
  {
    comment_content: 'The computional evolution has given us better tools. Thanks to those great minds',
    user_id: 5,
    post_id: 3
  },
  {
    comment_content: 'Security is the new trend in cyber and database management',
    user_id: 4,
    post_id: 2
  },
  {
    comment_content: 'Organization is the key in everything',
    user_id: 3,
    post_id: 1
  },
  {
    comment_content: `Le nuclaire est l'example frappant`,
    user_id: 2,
    post_id: 5
  },
  {
    comment_content: 'Learning is the answer',
    user_id: 2,
    post_id: 4
  },
  {
    comment_content: 'preserve loyalty. be wise!',
    user_id: 4,
    post_id: 1
  },
  {
    comment_content: 'Discussion will give us better understanding, Good job!',
    user_id: 1,
    post_id: 5
  },
  {
    comment_content: 'Late night work is peaceful',
    user_id: 4,
    post_id: 1
  },
  {
    comment_content: 'The greatest scientist who changed the world',
    user_id: 1,
    post_id: 1
  },
  {
    comment_content: 'Gave us his piece of cake',
    user_id: 1,
    post_id: 1
  },
  {
    comment_content: 'Honesty is money',
    user_id: 5,
    post_id: 3
  },
  {
    comment_content: 'Galileo',
    user_id: 1,
    post_id: 4
  },
  {
    comment_content: 'Is that true?',
    user_id: 2,
    post_id: 7
  },
  {
    comment_content: 'I hate the hidden thoughts. Lets teach',
    user_id: 6,
    post_id: 7
  },
  {
    comment_content: 'Touch the moon and see the power of God',
    user_id: 1,
    post_id: 4
  }
];

const seedCategories = () => Comment.bulkCreate(commentData);

module.exports = seedCategories;
