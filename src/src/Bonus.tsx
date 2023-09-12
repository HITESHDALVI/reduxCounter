import "../App.css";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {increment} from "../utiis/slice/BonusSlice";
type bonusType = {
  points: number;
};

type points = {
  state: {
    points: number;
  };
};
const Bonus = () => {
  const dispatch = useDispatch();
  const points = useSelector((state: points) => state.bonus.points);

  return (
    <>
      <h4>Bonus</h4>
      <div className="count">Bonus is {points}</div>
      <div>
        <button
          className="action-button inc"
          onClick={() => dispatch(increment())}
        >
          Bonus Increment
        </button>
      </div>
    </>
  );
};

export default Bonus;
