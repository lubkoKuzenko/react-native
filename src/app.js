import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store'
import { View } from 'react-native';
import { Header }from './components/Header';
import AlbumList from './components/AlbumList'
import LibraryList from './components/LibraryList'

export default AndroidProject = () => {
  return (<Provider store={store}>
    <View style={{flex: 1}}>
      <Header title="Header"/>
      {/* <AlbumList /> */}
      <LibraryList />
    </View>
  </Provider>)
}
