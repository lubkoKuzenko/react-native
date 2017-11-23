import React from 'react';
import { AppRegistry } from 'react-native';

import AndroidProject from './src'

export const AwesomeProject = () => {
  return <AndroidProject />
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
