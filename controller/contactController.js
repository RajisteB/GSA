const axios = require('axios');
const { appConfig } = require('../config/config');

const createHubspotUser = (req, res, next) => {
  const URL = `https://api.hubapi.com/contacts/v1/contact/?hapikey=${appConfig.hapi_key}&scope=contacts`;
  return axios.post(URL, {
    properties: [
      {
        property: "firstname",
        value: req.body.firstname
      },
      {
        property: "lastname",
        value: req.body.lastname
      },
      {
        property: "email",
        value: req.body.email
      }
    ]
  }).then((res) => {
    next();
  }).catch(err => {
    if (err.response.status === 409) {
      res.send({ error: `Sorry, that email already exists! Please try again.`})
    } else {
      res.send({ error: err.message })
    }
  });
}

module.exports = {
  createHubspotUser
};