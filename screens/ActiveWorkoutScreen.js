import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class ActiveWorkoutScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.getParam('trititle', 'Running!'),
      headerStyle: {
        backgroundColor: '#f4511e',
        shadowColor: 'transparent',
        elevation: 0
      },
    };
  };


  constructor(props) {
    super(props);
  }

  render() {
    // Logic!
    return (
        <View style={styles.container}>
          <Text> Running activity 1</Text>
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
