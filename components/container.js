import {View,Text,StyleSheet} from 'react-native'

export default function Container(props){
  return(
    <View style={styles.container}>
    {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
})