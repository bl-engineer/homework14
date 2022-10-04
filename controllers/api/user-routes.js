const router = require('express').Router();
const { User } = require('../../models');

// Creates a new user
router.post('/', async (req, res) => {
  try {
    const data = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password.toString(),
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = data.id;
      req.session.username = data.username;

      res.status(200).json(data);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const data = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!data) {
      res
        .status(400)
        .json({ message: 'Wrong email address. Please try again!' });
      return;
    }

    const validPassword = await data.checkPassword(req.body.password.toString());

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = data.id;
      req.session.username = data.username;

      res
        .status(200)
        .json({ user: data, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
