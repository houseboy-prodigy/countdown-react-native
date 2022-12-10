import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Header(props) {
  return (
    <View style={styles.container}>
    <Text style = {styles.paragraph}>
    {props.textinput}
    </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    borderBottomColor: 'lightblue',
    borderBottomWidth: 2,
    color: 'black'
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    padding: 25,
    fontSize: 40,
    color: 'lightblue',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
