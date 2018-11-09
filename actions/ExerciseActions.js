export const createExercise = (workout, data) => (
  {
    type: 'CREATE_EXERCISE',
    payload: {workout: workout, data: data},
  }
);