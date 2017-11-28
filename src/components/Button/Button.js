import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './styles'

export default Button = ({ onPress, children }) => {
  const { buyButton, buyButtonText } = styles;

  return (
    <TouchableOpacity style={buyButton} onPress={onPress}>
      <Text style={buyButtonText}>{children}</Text>
    </TouchableOpacity>
  );
}