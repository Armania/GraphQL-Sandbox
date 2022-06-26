import { Friends, Aliens } from './dbconnectors.js';

// resolver Map
export const resolvers = {
  Query: {
      getOneFriend: (root, { id }) => {
        return new Promise((resolve, object) => {
          Friends.findById(id, (err, friend) => {
            if (err) reject(err)
            else resolve(friend)
          })
        })
      },
      getAliens: () => {
        return Aliens.findAll()
      }
    },
    Mutation: {
      createFriend: (root, {input}) => {
        const newFriend = new Friends({
          firstName: input.firstName,
          lastName:input.lastName,
          gender: input.gender,
          age: input.age,
          language: input.language,
          emails: input.emails,
          contacts: input.contacts

        });

        newFriend.id = newFriend._id;

        return new Promise((resolve, object) => {
          newFriend.save((err) => {
            if (err) reject(err)
            else resolve(newFriend)
          })
        })
      },
      updateFriend: (root, {input}) => {
        return new Promise((resolve, object) => {
          Friends.findOneAndUpdate({ _id: input.id },
          input,
          { new: true },
          (err, friend) => {
            if (err) reject(err)
            else resolve(friend)
          })
        })
      },
      deleteFriend: (root, {id}) => {
        return new Promise((resolve, object) => {
          Friends.deleteOne({ _id: id },
          (err) => {
            if (err) reject(err)
            else resolve('Friend has been deleted')
          })
        })
      }
    },
};
