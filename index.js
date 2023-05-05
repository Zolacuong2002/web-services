const { config } = require('dotenv');
const app = require ('./app');
const connectMongoose = require ('./config/db');
const UserModel = require('./models/user.model')

require('dotenv').config();

connectMongoose();


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });