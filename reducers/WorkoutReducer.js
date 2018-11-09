"use strict";

import { combineReducers } from 'redux';
import Workout from '../models/Workout.js'
import Exercise from '../models/Exercise.js'

const INITIAL_STATE = { all: [] };

function findByName(elements, name) { 
    for(var i=0; i<elements.length; i++){
      if(elements[i].name == name){
        return elements[i];
      }
    }
}

function updateExerciseValues(exercise, data){
  exercise.name = data.name;
  exercise.sets = data.sets;
  exercise.config = data.config;
}

const workoutReducer =  (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CREATE_WORKOUT':
      //const current = state;
      const newWorkout = new Workout(action.payload);
      //current.push(newWorkout);
      var newState = {all: state.all.concat([newWorkout])};
      //console.log(newState);
      return {state, ...newState};
    case 'ADD_EXERCISE':
      var newState = state;
      // Iterate
      newState.all.find( workout => workout.name === action.payload.workout.name )
        .exercises.push(new Exercise(action.payload.new_exercise)
      );
      return { ...state, ...newState };
    case 'EDIT_EXERCISE':
      var newState = state;
      // Find the workout
      var workout = findByName(newState.all, action.payload.workout.name);
      var exercise =   findByName(workout.exercises, action.payload.exercise.name);
      updateExerciseValues(exercise, action.payload.new_exercise);
      return { ...state, ...newState };
    case 'DELETE_WORKOUT':
      // Find workout, then delete it
      var newState = state;
      var workout = findByName(newState.all, action.payload);
      newState.all.splice( newState.all.indexOf(workout), 1 );
      return { ...state, ...newState };
    default:
      return state
  }
};

export default combineReducers({
  workouts: workoutReducer
});