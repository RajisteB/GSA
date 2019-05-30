const { User } = require('../models/User');
const { parseProfile } = require('../lib/request/request');

const saltRounds = 10;

const createUser = async (req, res, next) => {
  const data = req.body;
  const newUser = new User({
    uid: res.locals.token,
    email: data.email,
    firstname: data.firstname,
    lastname: data.lastname
  });

  newUser
    .save()
    .then(async user => {
      res.send(user);
    })
    .catch(err => {
      res.send(err);
    });
};

const getUser = async (req, res, next) => {
  let stats = await parseProfile(req.body.igName);
  await User.findOne({ uid: req.body.uid }, (err, user) => {
    console.log(user);
    let fullProfileData = {
      user,
      stats
    }
    res.send(fullProfileData);
  })
}

const getUsername = (uid) => {
  return User.findOne({ uid: uid }, (err, user) => {
    return user;
  });
}

module.exports = {
  createUser,
  getUser,
  getUsername
}