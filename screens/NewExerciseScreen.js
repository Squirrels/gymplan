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
    if(this.props.navigation.getParam('exercise') !== undefined){
      this.props.navigation.setParams({headerTitle:'Update Exercise'});
    }
    this.handleSavePress = this.handleSavePress.bind(this);
  }

  handleSavePress(data){
    const { params} = this.props.navigation.state;
    // Send the name
    params.onExerciseSave(data);
    // Navigate back
    this.props.navigation.goBack();
  }

  render() {
    var existingExercise = this.props.navigation.getParam('exercise');
    return (
        <View style={styles.container}>
          <CreateExercise existingExercise={existingExercise} onExerciseSave={this.handleSavePress.bind(this)}/>
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
