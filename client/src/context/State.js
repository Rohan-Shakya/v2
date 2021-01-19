import React, { useReducer } from 'react';
import axios from 'axios';
import Context from './Context';
import Reducer from './Reducer';

import { GET_INFO, POST_INFO, ERROR_INFO } from './types';

const State = (props) => {
  const initialState = {
    user: {},
    msg: '',
    error: '',
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const getInfo = async () => {
    try {
      const res = await axios.get(
        'https://rohan-personal.herokuapp.com/api/user'
      );
      dispatch({
        type: GET_INFO,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_INFO,
        payload: err.response.msg,
      });
    }
  };

  const postInfo = async (info) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post(
        'https://rohan-personal.herokuapp.com/api/contacts',
        info,
        config
      );
      dispatch({ type: POST_INFO, payload: res.data });
    } catch (err) {
      dispatch({
        type: ERROR_INFO,
        payload: err.response.msg,
      });
    }
  };

  return (
    <Context.Provider value={{ getInfo, data: state, postInfo }}>
      {props.children}
    </Context.Provider>
  );
};

export default State;
