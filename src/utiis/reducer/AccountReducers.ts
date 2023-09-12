import {
  DECREMENT,
  DECREMENTBY10,
  GETACCOUNTFAILURE,
  GETACCOUNTPENDING,
  GETACCOUNTSUCCESS,
  INCREMENT,
  INCREMENTBY10,
} from "../actions/Actions";
import {actionType, initialAccountType} from "./reducer-type";

const initialState: initialAccountType = {
  amount: 0,
  pending: false,
  error: "",
};

export const accountReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case INCREMENT:
      return {amount: state.amount + 1};
    case DECREMENT:
      return {amount: state.amount > 0 ? state.amount - 1 : state.amount};
    case INCREMENTBY10:
      if (typeof action.payload === "number")
        return {amount: state.amount + action.payload};
      break;
    case DECREMENTBY10:
      if (typeof action.payload === "number") {
        return {
          amount:
            state.amount > 0 ? state.amount - action.payload : state.amount,
        };
      }
      break;
    case GETACCOUNTSUCCESS:
      return {amount: action.payload, error: "", pending: false};
    case GETACCOUNTPENDING:
      return {amount: null, error: "", pending: true};
    case GETACCOUNTFAILURE:
      return {amount: null, error: action.error, pending: false};
    default:
      return state;
  }
};
