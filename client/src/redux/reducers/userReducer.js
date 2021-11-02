import { ADD_NEW_USER } from '../types'

export default function userReducer(user = [], action) {
  const { type, payload } = action

  switch (type) {
    case ADD_NEW_USER:
      return [...user, payload];

    default:
      return user;
  }
}
