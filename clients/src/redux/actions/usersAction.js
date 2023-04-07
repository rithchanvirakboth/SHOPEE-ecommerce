import ACTIONS from './index';
import axios from 'axios';

export const fetchAllUsers = async (token) => {
  const res = await axios.get('/user/admin', {
    headers: { Authorization: token }
  })

  return res
}

export const dispatchGetAllUsers = (res) => {
  return {
    type: ACTIONS.GET_ALL_USERS,
    payload: res.data
  }
}