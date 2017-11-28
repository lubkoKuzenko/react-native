import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

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

