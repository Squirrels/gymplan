import { combineReducers } from 'redux';
import Workout from '../models/Workout.js'

const INITIAL_STATE = [];

const workoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CREATE_WORKOUT':
      const current = state;
      const newWorkout = new Workout(action.payload);
      current.push(newWorkout);
      const newState = current;
      return newState;
    default:
      return state
  }
};

export default combineReducers({
  workouts: workoutReducer,
});