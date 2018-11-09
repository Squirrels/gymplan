export const createWorkout = workoutName => (
  {
    type: 'CREATE_WORKOUT',
    payload: workoutName
  }
);

export const addExercise = (data) => (
  {
    type: 'ADD_EXERCISE',
    payload: data
  }
);

export const editExercise = (data) => (
  {
    type: 'EDIT_EXERCISE',
    payload: data
  }
);

export const deleteWorkout = (workoutName) => (
  {
    type: 'DELETE_WORKOUT',
    payload: workoutName
  }
);