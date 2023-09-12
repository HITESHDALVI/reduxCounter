import axios from "axios";

export const INCREMENT = "ACCOUNT/INCREMENT";
export const INITACCOUNT = "ACCOUNT/INITACCOUNT";
export const DECREMENT = "ACCOUNT/DECREMENT";
export const INCREMENTBY10 = "ACCOUNT/INCREMENTBY10";
export const DECREMENTBY10 = "ACCOUNT/DECREMENTBY10";
export const GETACCOUNTSUCCESS = "ACCOUNT/GETACCOUNTSUCCESS";
export const GETACCOUNTFAILURE = "ACCOUNT/GETACCOUNTFAILURE";
export const GETACCOUNTPENDING = "ACCOUNT/GETACCOUNTPENDING";
export const INCREMENTBONUS = "BONUS/INCREMENTBONUS";
type GETACCOUNTFAILURE = {
  type: string;
  error: string;
};
type GETACCOUNTSUCCESS = {
  type: string;
  payload: Array<T>;
};
// Action creators
export const increment = () => {
  return {type: INCREMENT};
};
export const incrementBonus = () => {
  return {type: INCREMENTBONUS};
};
export const decrement = () => {
  return {type: DECREMENT};
};
export const incrementByAmount = (value: number) => {
  return {type: INCREMENTBY10, payload: value};
};
export const decrementByAmount = (value: number) => {
  return {type: DECREMENTBY10, payload: value};
};
export const initAccount = (value: number) => {
  return {type: INITACCOUNT, payload: value};
};

export const getUser = (id: number) => {
  return async (dispatch, getState) => {
    try {
      dispatch(getAccountPending());
      const {data} = await axios.get(`http://localhost:8080/account/${id}`);
      dispatch(getAccountSuccess(data.amount));
    } catch (error) {
      console.log({error});
      dispatch(getAccountFailed(error.message));
    }
  };
};

export const getAccountSuccess = (value: Array<T>): GETACCOUNTSUCCESS => {
  return {type: GETACCOUNTSUCCESS, payload: value};
};
export const getAccountFailed = (error: string): GETACCOUNTFAILURE => {
  return {type: GETACCOUNTFAILURE, error: error};
};
export const getAccountPending = () => {
  return {type: GETACCOUNTPENDING};
};
