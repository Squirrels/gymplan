import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button
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
    this.state = {
      workout: this.props.navigation.getParam('workout'),
      current_exercise: 0
    };
  }

  render() {
    const exercises = this.state.workout.exercises;
    const currentExercise = exercises[this.state.current_exercise];
    return (
        <View style={styles.container}>
          <Text
            onPress={() => console.log("YEAH")}
          >
            {currentExercise.name}
          </Text>
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
