import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { container, header } = styles;
    const { title } = this.props;

    return (
      <View style={container}>
        <Text style={header}>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    height: 40, 
    width: '100%',
    padding: 20,
    backgroundColor: '#f8f8f8',
    justifyContent: "center",
    alignItems: "center",
    shadowColor: '#000',
    shadowOffset:{
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5,
    position: 'relative'
  },
  header: {    
    color: 'black',
    textAlign: 'center'
  }
});