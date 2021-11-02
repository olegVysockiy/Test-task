import { ADD_NEW_USER, GET_ALL_USERS } from "../types"

export const addNewUserAction = (newUser) => ({
  type: ADD_NEW_USER,
  payload: newUser,
})

export const getAllUsersAction = () => ({
  type: GET_ALL_USERS,
})



