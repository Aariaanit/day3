import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

class Home extends Component {
  render() {
    let name = "Arianit";
    const x = 29;

    const style = StyleSheet.create(
        {
        container: {
          flex: 1,
          backgroundColor: 'lightblue',
          justifyContent:'flex-start',
          alignItems:'center'
        },
        text:{
            fontSize:30,
            color:"black"
        }
      });
    return (
      <View style={style.container}>
        <Text style={style.text}>Home</Text>
        
        <Text>{name}</Text>

        <Text>{x}</Text>
      </View>
    )
  }
}
export default Home;