import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Platform
} from 'react-native';

import { CreateExerciseForm } from '../components/CreateExerciseForm'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addExercise, editExercise } from '../actions/WorkoutActions';

class NewExerciseScreen extends React.Component {
  // headerTitle: 'Create New Exercise',
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.getParam('title'),
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
      this.state = {editing: true}
      //this.props.navigation.setParams({headerTitle:'Update Exercise'});
    }
    this.handleSavePress = this.handleSavePress.bind(this);
  }

  handleSavePress(data){
    // Get the workout from the params
    if(this.state && this.state.editing !== null){
      this.props.editExercise(data);
    } else{
      this.props.addExercise(data);
    }
    
    
    //const { params} = this.props.navigation.state;
    // Send the name
    //params.onExerciseSave(data);
    // Navigate back
    this.props.navigation.goBack();
  }

  render() {
    var existingExercise = this.props.navigation.getParam('exercise');
    return (
        <View style={styles.container}>
          <CreateExerciseForm workout={this.props.navigation.getParam('workout')} existingExercise={existingExercise} onExerciseSave={this.handleSavePress.bind(this)}/>
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


const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addExercise,editExercise
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(NewExerciseScreen);