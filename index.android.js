import React from 'react';
import { AppRegistry, UIManager } from 'react-native';

import AndroidProject from './src/app'

//Setting UIManager Flag in order to get LayoutAnimation work on android.
UIManager.setLayoutAnimationEnabledExperimental && 
UIManager.setLayoutAnimationEnabledExperimental(true);

export const AwesomeProject = () => {
  return <AndroidProject />
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
