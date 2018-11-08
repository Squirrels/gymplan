import React from 'react';
import { FlatList, Text, View, StyleSheet, ScrollView } from 'react-native';
import {List, ListItem} from 'react-native-elements';

export class ExercisesListView extends React.Component {
	constructor(props) {
    super(props);
  }

  render() {
  	// Get the list of all exercises from the props
    const exercises  = this.props.exercises;
    if (exercises.length === 0){
      return(
        <Text> No Exercises! </Text>
      );
    } else {
      return (
        <ScrollView>
          <List style={styles.container}>
            {
              exercises.map((exercise) => (
                <ListItem
                  key={exercise.name}
                  title={exercise.name}
                  subtitle={exercise.name}
                  onPress={() => this.props.navigation.navigate('NewExercise', {exercise: exercise, onExerciseSave: this.props.onExerciseSave.bind(this)})}
                />
              ))
            }
          </List>
        </ScrollView>);
    }
  	
  }
}

const styles = StyleSheet.create({
  container: {
  	marginTop: 100,
    flex: 1,
    backgroundColor: '#fff',
   }
});
