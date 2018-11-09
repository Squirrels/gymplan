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
        updating: true,
        radioButtons: [
          {
            label: 'In Progress',
            value: 'stage-1',
            checked: true,
            color: '#484',
            disabled: true,
            flexDirection: 'row',
            size: 14
          },
          {
            label: 'Completed',
            flexDirection: 'row',
          }
        ]
      };
    } else {
      this.state = {
        name: '',
        sets: {},
        updating:false,
        radioButtons: [
          {
            label: 'In Progress',
            value: 'stage-1',
            checked: true,
            flexDirection: 'row',
            size: 14
          },
          {
            label: 'Completed',
            value: 'stage-2',
            size: 14
          }
        ]
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
          autoFocus={true}
        />
        <Text>Sets:</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Option"
          value={this.state.name}
          onChangeText={(name) => this.setState({name})}
          autoFocus={true}
        />
        <TextInput
          style={{height: 40}}
          placeholder="Value"
          value={this.state.name}
          onChangeText={(name) => this.setState({name})}
          autoFocus={true}
        />
        <TextInput
          style={{height: 40}}
          placeholder="Unit"
          value={this.state.name}
          onChangeText={(name) => this.setState({name})}
          autoFocus={true}
        />
        <RadioGroup 
          color='#484'
          labelStyle={{fontSize: 14}}
          radioButtons={this.state.radioButtons}
          onPress={radioButtons => this.setState({radioButtons})}
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