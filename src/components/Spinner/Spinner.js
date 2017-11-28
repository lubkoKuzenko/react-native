import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles'

export default Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};