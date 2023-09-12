import {createStore, applyMiddleware, combineReducers} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import {accountReducer} from "../reducer/AccountReducers";
import {bonusReducer} from "../reducer/BonusReducer";
export const store = createStore(
  combineReducers({account: accountReducer, bonus: bonusReducer}),
  applyMiddleware(logger, thunk)
);
