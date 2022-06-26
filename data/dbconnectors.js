import mongoose from "mongoose";
import Sequelize from 'sequelize';
import _ from 'lodash';
import casual from 'casual';

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://db-admin:admin@cluster0.d4klr.mongodb.net/friends?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const friendSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  age: {
    type: Number
  },
  gender: {
    type: String
  },
  language: {
    type: String
  },
  emails: {
    type: Array
  },
  contacts: {
    type: Array
  }
});

const Friends = mongoose.model('friends', friendSchema);

// sql connections
const sequelize = new Sequelize('database', null, null, {
  dialect: 'sqlite',
  storage: './alien.sqlite',
});

const Aliens = sequelize.define('aliens', {
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
  planet: { type: Sequelize.STRING },
});

Aliens.sync({ force: true}).then(() => {
  _.times(10, (i) => {
    Aliens.create({
      firstName: casual.first_name,
      lastName: casual.last_name,
      planet: casual.word,
    });
  })
})

export {Friends, Aliens};
