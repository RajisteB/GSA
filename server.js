const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const { appConfig } = require('./config/config');
const userRoutes = require('./routes/user');
const port = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/user', userRoutes);

mongoose
  .connect(appConfig.mongoURI, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));