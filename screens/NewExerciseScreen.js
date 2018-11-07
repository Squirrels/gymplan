import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Platform
} from 'react-native';

import { CreateExercise } from '../components/CreateExercise'

export default class NewExerciseScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Create New Exercise',
      headerStyle: {
        backgroundColor: '#f4511e',
        shadowColor: 'transparent',
        elevation: 0
      },
    };
  };


  constructor(props) {
    super(props);
    this.handleCreatePress = this.handleCreatePress.bind(this);
  }

  handleCreatePress(name){
    const { params} = this.props.navigation.state;
    // Send the name
    params.onExerciseCreate(name);
    // Navigate back
    this.props.navigation.goBack();
  }

  render() {
    var existingExercise = this.props.navigation.getParam('exercise');
    return (
        <View style={styles.container}>
          <CreateExercise existingExercise={existingExercise} onExerciseCreate={this.handleCreatePress.bind(this)}/>
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
