// user.js
import request from './request'

export const getUserName = (userID) => request('/users/' + userID).then(user => user.name)
