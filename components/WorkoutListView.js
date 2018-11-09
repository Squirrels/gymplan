import React from 'react';
import { FlatList, Text, View, StyleSheet, ScrollView, Alert } from 'react-native';
import {List, ListItem} from 'react-native-elements';

export class WorkoutListView extends React.Component {
	constructor(props) {
    super(props);
    this._onLongPress = this._onLongPress.bind(this);
  }

  _onLongPress(workout){
    Alert.alert(
      'Delete workout?',
      'Are you sure you want to delete the workout "' + workout.name + '"?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'OK', onPress: () => this.props.onDeletePress(workout.name)},
      ],
      { cancelable: false }
    );
  }
  render() {
  	// Get the list of all workouts from the props
    const workouts  = this.props.workouts;
  	return (
      <ScrollView>
        <List style={styles.container}>
          {
  			    workouts.map((workout) => (
  			      <ListItem
  			        key={workout.name}
  			        title={workout.name}
  			        subtitle={workout.exercises.length + " exercises"}
  			        onPress={() => this.props.navigation.navigate('WorkoutDetails', {workout: workout})}
                onLongPress={() => this._onLongPress(workout)}
  			      />
  			    ))
  			  }
        </List>
    </ScrollView>);
  }
}

const styles = StyleSheet.create({
  container: {
  	marginTop: 100,
    flex: 1,
    backgroundColor: '#fff',
   }
});

