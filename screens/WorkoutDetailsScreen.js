import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import ActionButton from 'react-native-action-button';

import { ExercisesListView } from '../components/ExercisesListView'

import Exercise from '../models/Exercise.js'

export default class WorkoutDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.getParam('workout').name,
      headerRight: (
          <Button
            onPress={() => navigation.navigate('ActiveWorkout')}
            title="Start"
            color={Platform.OS === 'ios' ? '#fff' : null}
          />
      ),
      headerStyle: {
        backgroundColor: '#f4511e',
        shadowColor: 'transparent',
        elevation: 0
      },
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      workout: this.props.navigation.getParam('workout')
    };
  }

  _onExerciseCreate(data){
    console.log(data.name);
    // Create new Exercise
    var newExercise = new Exercise(data.name);
    // Add it
    let workout = this.state.workout;
    workout.exercises = workout.exercises.concat([newExercise]);
    this.setState({workout: workout});
    console.log("Added");
  }

  _onExerciseUpdate(data){
    console.log("Oh damn");
    // Find the old one
    var oldExercise = data.exercise;
    var exercises = this.state.workout.exercises;
    for(var i=0; i<exercises.length; i++){
      if(exercises[i] === oldExercise){
        exercises[i].name = data.name;
      }
    }
    // Update the workout
    var workout = this.state.workout;
    workout.exercises = exercises;
    this.setState({workout: workout});
  }

  render() {
    // Get exercises
    const exercises = this.state.workout.exercises;
    const navigation = this.props.navigation;
    return (
        <View style={styles.container}>
          <ExercisesListView navigation={navigation} exercises={exercises} onExerciseSave={this._onExerciseUpdate.bind(this)}/>
          <ActionButton buttonColor="rgba(231,76,60,1)" onPress={() => navigation.navigate('NewExercise', {onExerciseSave: this._onExerciseCreate.bind(this)})}>
          </ActionButton>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   }
});
