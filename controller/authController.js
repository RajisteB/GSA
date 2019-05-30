const firebase = require("firebase");
const { appConfig } = require('../config/config');
const { getUsername } = require("./userController");

firebase.initializeApp(appConfig.firebase.config);


const signupUser = async (req, res, next) => {
  let { email, password } = req.body;
  await firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(err => {
      res.status(400).send({ error: err.message });
    });
  await next();
}

const updateSignupName = (req, res, next) => {
  let user = firebase.auth().currentUser;
  let { firstname, lastname } = req.body;
  user.updateProfile({
    displayName: `${firstname} ${lastname}`
  })
  .then(() => {
    next();
  })
  .catch(err => {
    res.status(400).send({ error: err.message });
  });
  
}

const observeSignup = (req, res, next) => {
  firebase.auth().onAuthStateChanged(async user => {
    if (user) {
      // let validUser = await {
      //   firstname: user.firstname,
      //   lastname: user.lastname,
      //   email: user.email,
      //   emailVerified: user.emailVerified,
      //   uid: user.uid,
      //   signedIn: true,
      // }
      // await res.send({user: validUser})
      res.locals.token = await user.uid;
      await next();
    }
  });
}

const observeLogin = (req, res, next) => {
  firebase.auth().onAuthStateChanged(async user => {
    if (user) {
      let userProfile = await getUsername(user.uid);
      let validUser = await {
        firstname: user.firstname,
        lastname: user.lastname,
        igName: userProfile.igName,
        email: user.email,
        emailVerified: user.emailVerified,
        uid: user.uid,
        signedIn: true,
      }
      await res.send({user: validUser})
    }
  });
}

const loginUser = (req, res, next) => {
  firebase.auth()
    .signInWithEmailAndPassword(req.body.email, req.body.password)
    .catch(err => {
      res.status(400).send({ error: err.message });
    });
    next();
}

const logoutUser = (req, res, next) => {
  firebase.auth().signOut()
    .then(() => {
      res.send("You have been logged out.");
      })
    .catch(err => {
      res.status(400).send({ error: err.message });
    });
}

module.exports = {
  logoutUser,
  loginUser,
  observeSignup,
  observeLogin,
  signupUser,
  updateSignupName
}