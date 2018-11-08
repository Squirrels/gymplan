import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Button
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { WorkoutListView } from '../components/WorkoutListView'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

import Workout from '../models/Workout.js';
import Exercise from '../models/Exercise.js'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "GymPlan",
    headerStyle: {
      backgroundColor: '#f4511e',
      shadowColor: 'transparent',
      elevation: 0
    },
    headerTintColor: '#fff',
    cardStyle: {
      shadowColor: 'transparent',
    }
  };

  constructor(props) {
    super(props);
    // Get the data
    // var initialWorkout = new Workout("Workout 1");
    // initialWorkout.exercises.push(new Exercise("Sample Exercise"))
  }

  _onWorkoutCreate(data){
    console.log("Creating workout called " + data.name);
    // Add it to state
    const workouts  = this.state.workouts;
    //this.setState({workouts: [..this.state.workouts]});
    var newWorkout = new Workout(data.name);
    this.setState({
      workouts: workouts.concat([newWorkout])
    });
  }

  render() {
    const workouts  = this.props.workouts;
    console.log("Workouts render: ");
    console.log(workouts);
    //console.log(workouts);
    return (
        <View style={styles.container}>
          <WorkoutListView navigation={this.props.navigation} workouts={workouts} />
          <ActionButton buttonColor="rgba(231,76,60,1)" onPress={() => this.props.navigation.navigate('NewWorkout', {onWorkoutCreate: this._onWorkoutCreate.bind(this)})}>
          </ActionButton>
        </View>
    );
  }

  // _maybeRenderDevelopmentModeWarning() {
  //   if (__DEV__) {
  //     const learnMoreButton = (
  //       <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
  //         Learn more
  //       </Text>
  //     );

  //     return (
  //       <Text style={styles.developmentModeText}>
  //         Development mode is enabled, your app will be slower but you can use useful development
  //         tools. {learnMoreButton}
  //       </Text>
  //     );
  //   } else {
  //     return (
  //       <Text style={styles.developmentModeText}>
  //         You are not in development mode, your app will run at full speed.
  //       </Text>
  //     );
  //   }
  // }

  // _handleLearnMorePress = () => {
  //   WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  // };

  // _handleHelpPress = () => {
  //   WebBrowser.openBrowserAsync(
  //     'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
  //   );
  // };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

const mapStateToProps = (state) => {
  console.log("Mapping");
  console.log(state);
  const { workouts } = state
  return { workouts }
};

export default connect(mapStateToProps)(HomeScreen);