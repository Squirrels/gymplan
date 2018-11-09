import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight
} from 'react-native';

export default class ActiveWorkoutScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Running " + navigation.getParam('workout').name,
      headerStyle: {
        backgroundColor: '#f4511e',
        shadowColor: 'transparent',
        elevation: 0
      },
    };
  };


  constructor(props) {
    super(props);
    // Set initial exercise
    var exercises = this.props.navigation.getParam('workout').exercises;
    if(exercises.length == 0){
      this.state = {
        exercises: exercises,
        current_exercise: {
          counter: 0,
          text: 'No Exercises!'
        }
      };
    } else{
      // Build text
      var exerciseText = exercises[0].name;
      exerciseText += exercises[0].sets ? "\n"+exercises[0].sets : "";
      exerciseText += exercises[0].config ? "\n"+exercises[0].config : "";
      this.state = {
        exercises: exercises,
        current_exercise: {
          counter: 0,
          text: exerciseText
        }
      };
    }
    this._onExercisePress = this._onExercisePress.bind(this);
  }

  _onExercisePress(){
    // Move to next
    var exercises = this.state.exercises;
    if(exercises.length > this.state.current_exercise.counter+1){
      var counter = this.state.current_exercise.counter + 1;
      // Get the text
      var exerciseText = exercises[counter].name;
      exerciseText += exercises[counter].sets ? "\n"+exercises[counter].sets : "";
      exerciseText += exercises[counter].config ? "\n"+exercises[counter].config : "";
      this.setState({current_exercise: {
        counter: counter,
        text: exerciseText
      }})
    }
    else{
      this.setState({current_exercise: {text: 'Done!'}});
    }
  }

  render() {
    const currentExerciseText = this.state.current_exercise.text;
    return (
        <View style={styles.container}>
          <TouchableHighlight onPress={this._onExercisePress} style={styles.button} underlayColor="white">
            <Text style={styles.exerciseText}>
              {currentExerciseText}
            </Text>
          </TouchableHighlight>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 10
   },
  button: {
    alignItems: 'center',
    padding: 10
  },
  exerciseText: {
    fontSize: 30
  }
});
