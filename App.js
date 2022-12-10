import {Text,Image,StyleSheet, View, TouchableOpacity, Modal, Button,TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React,{Component, useState,useEffect} from 'react'
import Header from './components/header'
import Container from './components/container'




const App = () => {
  const [time, setTime] = useState(null);
  const [input, setInput] = useState();
  //const [interval, setInterval] = useState(false);

  useEffect(() => {
    // Start the countdown if the time is not null
    if (time>0) {
      const interval = setInterval(() => {
        // Decrement the time by
        setTime(time - 1);
      }, 1000);
      return () => clearInterval(interval);
      // Save the timeout to the countdown state
    } 
  }, [time]);

  if(time==null){
    return(
      <Container>
    <Header textinput='Countdown App'/>
    <Text style={{color: 'white', fontSize:50}}>{time}</Text>
    <TextInput style={{color: 'white', fontSize:30}}
      placeholder="Enter a time value"
      placeholderTextColor='white'
      onChangeText={(text) => {
        // Update the time state with the user-entered value
        setInput(Number(text));
      }}
    />
    <Button
    title="Submit"
    onPress={() => {
     setTime(input)
    }}
  />
  </Container>
  )

  }
  else if(time>0){
    return (
      <Container>
        <Header textinput='Countdown App'/>
        <Text style={{color: 'white', fontSize:50}}>{time}</Text>
        
      </Container>
    );
  }
  else{
    return (
      <Container>
        <Header textinput='Countdown App'/>
        <Text style={{color: 'white', fontSize:50}}>done!</Text>
        <Button title="do it again" onPress={() => setTime(null)}/>
        
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    borderBottomColor: 'lightblue',
    borderBottomWidth: 2,
    backgroundColor: 'black',
    color: 'black',
  },
  timertext: {
  color: 'white',
  marginTop: 20,
  fontSize: 20
  },
  mainHeading: {
    fontSize: 48,
    alignItems: 'left',
    padding: 0,
    alignContent: 'left',
    color: "white" 
  }
});

export default App;