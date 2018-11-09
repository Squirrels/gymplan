import React from 'react';
import { FlatList, Text, View, StyleSheet, ScrollView } from 'react-native';
import {List, ListItem} from 'react-native-elements';

export class WorkoutListView extends React.Component {
	constructor(props) {
    super(props);
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