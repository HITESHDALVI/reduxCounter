import "../App.css";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

import {initialAccountType} from "../utiis/reducer/reducer-type";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "../utiis/slice/AccountSlice";
import {getUser} from "../utiis/actions/Actions";
import {getUserById} from "../utiis/thunk/asyncThunk";

const Account = () => {
  const dispatch = useDispatch();
  const amount = useSelector(
    (state: initialAccountType) => state.account.amount
  );

  return (
    <>
      <h4>Account</h4>
      <div className="count">count is {amount}</div>
      <div>
        <button
          className="action-button inc"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="action-button dec"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="action-button ib-10"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          Increment By 10
        </button>
        <button
          className="action-button db-10"
          onClick={() => dispatch(decrementByAmount(10))}
        >
          Decrement By 10
        </button>
        <button
          className="action-button db-10"
          onClick={() => dispatch(getUserById(10))}
        >
          Async thunk Increment
        </button>
      </div>
    </>
  );
};

export default Account;
