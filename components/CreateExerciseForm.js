import React from 'react';
import { View, Text, TextInput, Button, Platform } from 'react-native';
import { RadioGroup } from 'react-native-btr';

export class CreateExerciseForm extends React.Component {
  constructor(props) {
    super(props);
    // Check if we got an exercise from props
    let exercise = props.existingExercise;
    if(exercise !== undefined){
      this.state = {
        name: exercise.name,
        sets: exercise.sets,
        config: exercise.config,
        updating: true,
      };
    } else {
      this.state = {
        name: '',
        sets: '',
        config: '',
        updating:false
      };
    }
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(){
    // Validate data
    this.props.onExerciseSave({workout: this.props.workout, exercise: this.props.existingExercise, new_exercise: this.state});
  }

  render() {
    return (
      <View>
        <Text style={{fontSize: 20}} >Name:</Text>
        <TextInput
          style={{height: 80, fontSize: 30}}
          placeholder="Exercise1"
          value={this.state.name}
          onChangeText={(name) => this.setState({name})}
          autoFocus={true}
        />
        <Text style={{fontSize: 20}} >Sets:</Text>
        <TextInput
          style={{height: 80, fontSize: 30 }}
          placeholder="Option"
          value={this.state.sets}
          onChangeText={(sets) => this.setState({sets})}
        />
        <Text style={{fontSize: 20}} >Config:</Text>
        <TextInput
          style={{height: 80, fontSize: 30 }}
          placeholder="Value"
          value={this.state.config}
          onChangeText={(config) => this.setState({config})}
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