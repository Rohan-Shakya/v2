import { GET_INFO, POST_INFO, ERROR_INFO } from './types';

export default (state, action) => {
  switch (action.type) {
    case GET_INFO:
      return {
        ...state,
        user: action.payload,
      };
    case POST_INFO:
      return {
        ...state,
        msg: action.payload.msg,
      };
    case ERROR_INFO:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
