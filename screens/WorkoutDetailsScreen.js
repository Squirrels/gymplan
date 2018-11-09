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
import { connect } from 'react-redux';
import Exercise from '../models/Exercise.js'

class WorkoutDetailsScreen extends React.Component {
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
    // Get the active one
    this.state = {
      workout: this.props.navigation.getParam('workout')
    };
  }

  // _onExerciseCreate(data){
  //   console.log(data.name);
  //   // Create new Exercise
  //   var newExercise = new Exercise(data.name);
  //   // Add it
  //   let workout = this.state.workout;
  //   workout.exercises = workout.exercises.concat([newExercise]);
  //   this.setState({workout: workout});
  //   console.log("Added");
  // }

  // _onExerciseUpdate(data){
  //   console.log("Oh damn");
  //   // Find the old one
  //   var oldExercise = data.exercise;
  //   var exercises = this.state.workout.exercises;
  //   for(var i=0; i<exercises.length; i++){
  //     if(exercises[i] === oldExercise){
  //       exercises[i].name = data.name;
  //     }
  //   }
  //   // Update the workout
  //   var workout = this.state.workout;
  //   workout.exercises = exercises;
  //   this.setState({workout: workout});
  // }

  render() {
    // Get exercises
    const currentWorkout  = this.state.workout;
    const exercises       = currentWorkout.exercises;
    const navigation      = this.props.navigation;
    return (
        <View style={styles.container}>
          <ExercisesListView navigation={navigation} workout={currentWorkout} exercises={exercises} />
          <ActionButton buttonColor="rgba(231,76,60,1)" onPress={() => navigation.navigate('NewExercise', {workout: currentWorkout})}>
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

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(WorkoutDetailsScreen);