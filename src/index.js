import React from 'react';
import { View } from 'react-native';
import Header from './components/header';
import AlbumList from './components/AlbumList'

export default AndroidProject = () => {
  return (<View style={{flex: 1}}>
    <Header title="Header"/>
    <AlbumList />
  </View>)
}
