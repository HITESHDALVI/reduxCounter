import {INCREMENTBONUS} from "../actions/Actions";
import {actionType} from "./reducer-type";

export const bonusReducer = (state = {points: 1}, action: actionType) => {
  switch (action.type) {
    case INCREMENTBONUS:
      return {points: state.points + 1};
    default:
      return state;
  }
};
