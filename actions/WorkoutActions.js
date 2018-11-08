export const createWorkout = workoutName => (
  {
    type: 'CREATE_WORKOUT',
    payload: workoutName,
  }
);