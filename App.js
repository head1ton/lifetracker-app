import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MoodScreen from "./pages/Mood";
import ReasonsScreen from "./pages/Reasons";

class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
            title="Go to Mood"
            onPress={() => this.props.navigation.navigate('Mood')}
          />
        </View>
      );
    }
  }

const AppNavigator = createStackNavigator(
  {
    Mood: MoodScreen,
    Reasons: ReasonsScreen,
  },
  {
    initialRouteName: 'Reasons',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}