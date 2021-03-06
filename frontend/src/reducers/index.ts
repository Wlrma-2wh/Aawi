import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return { ...(state as object), ...action.payload };
      default:
        return state;
    }
  },
});

export default rootReducer;
