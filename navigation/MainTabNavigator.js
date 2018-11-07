import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import WorkoutDetailsScreen from '../screens/WorkoutDetailsScreen';
import ActiveWorkoutScreen from '../screens/ActiveWorkoutScreen';
import NewWorkoutScreen from '../screens/NewWorkoutScreen';
import NewExerciseScreen from '../screens/NewExerciseScreen';

export default createStackNavigator({
  Home: HomeScreen,
  WorkoutDetails: WorkoutDetailsScreen,
  ActiveWorkout: ActiveWorkoutScreen,
  NewWorkout: NewWorkoutScreen,
  NewExercise: NewExerciseScreen
});
