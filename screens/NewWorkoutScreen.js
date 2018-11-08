import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createWorkout } from '../actions/WorkoutActions';

class NewWorkoutScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Create New Workout',
      headerStyle: {
        backgroundColor: '#f4511e',
        shadowColor: 'transparent',
        elevation: 0
      }
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.handleCreatePress = this.handleCreatePress.bind(this);
  }

  handleCreatePress(){
    //const { params } = this.props.navigation.state;
    // Send the name
    //params.onWorkoutCreate(this.state.name);
    console.log("Creating");
    var result = this.props.createWorkout(this.state.name);
    console.log(result);
    // Navigate back
    this.props.navigation.goBack();
  }

  render() {
    // Logic!
    return (
        <View style={styles.container}>
          <Text> Workout Name:</Text>
          <TextInput
            style={{height: 70}}
            placeholder="Workout1"
            value={this.state.name}
            onChangeText={(name) => this.setState({name})}
            autoFocus={true}
          />
          <Button
            onPress={() => this.handleCreatePress() }
            title="Create"
            color={Platform.OS === 'ios' ? '#fff' : null}
          />
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
  const { workouts } = state
  return { workouts }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    createWorkout,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NewWorkoutScreen);