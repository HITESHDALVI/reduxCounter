import {useSelector} from "react-redux";
import "./App.css";
import Account from "./src/Account";
import Bonus from "./src/Bonus";
import Admin from "./src/Admin";

function App() {
  const account = useSelector((state) => state.account);
  const bonus = useSelector((state) => state.bonus);

  return (
    <>
      <div className="card">
        <h2>Counter Redux Typescript</h2>
        <div className="total">
          {account.pending ? (
            <p>Loading...</p>
          ) : account.error ? (
            <p>{account.error}</p>
          ) : (
            <div>Currnet Amount : {account.amount}</div>
          )}
          <div>Points Total : {bonus.points}</div>
        </div>
        <Account />
        <Bonus />
        <Admin />
      </div>
    </>
  );
}

export default App;
