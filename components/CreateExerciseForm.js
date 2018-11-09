import React from 'react';
import { View, Text, TextInput, Button, Platform } from 'react-native';

export class CreateExerciseForm extends React.Component {
  constructor(props) {
    super(props);
    // Check if we got an exercise from props
    let exercise = props.existingExercise;
    if(exercise !== undefined){
      this.state = {
        name: exercise.name,
        updating: true
      };
    } else {
      this.state = {
        name: '',
        updating:false
      };
    }
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(){
    // Validate data
    this.props.onExerciseSave({workout: this.props.workout, exercise: this.props.existingExercise, new_exercise: {name: this.state.name}});
  }

  render() {
    return (
      <View>
        <Text>Name:</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Exercise1"
          value={this.state.name}
          onChangeText={(name) => this.setState({name})}
          onSubmitEditing={() => this.handlePress() }
          autoFocus={true}
        />
        <Button
          onPress={() => this.handlePress() }
          title={this.state.updating ? "Update" : "Create"}
          color={Platform.OS === 'ios' ? '#fff' : null}
        />
      </View>
    );
  }
}