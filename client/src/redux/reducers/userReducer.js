import { ADD_NEW_USER, GET_ALL_USERS } from '../types'

export default function userReducer(users = [], action) {
  const { type, payload } = action

  switch (type) {
    case ADD_NEW_USER:
      return [...users, payload];

    case GET_ALL_USERS:
      return users;

    default:
      return users;
  }
}
