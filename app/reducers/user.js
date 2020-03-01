import axios from 'axios';
const GET_USER = 'GET_USER';
const REMOVE_USER = 'REMOVE_USER';
const getUser = userData => {
  return {
    type: GET_USER,
    userData,
  };
};
const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};
export const me = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/auth/me');
      dispatch(getUser(data)); //dispatched the data to store
    } catch (err) {
      console.log('there is a an error in gathering user info', err);
    }
  };
};
//method string is smth like login or signup
export const auth = (email, password, method) => {
  return async dispatch => {
    let res;
    try {
      res = await axios.post(`/auth/${method}`, { email, password });
    } catch (authError) {
      return dispatch(getUser({ error: authError }));
    }
    try {
      dispatch(getUser(res.data));
      history.push('/home');
    } catch (dispatchOrHistoryErr) {
      console.error(dispatchOrHistoryErr);
    }
  };
};
export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout');
    dispatch(removeUser());
    history.push('/login');
  } catch (err) {
    console.error(err);
  }
};
const initialState = {};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case REMOVE_USER:
      return initialState;
    default:
      return state;
  }
};
