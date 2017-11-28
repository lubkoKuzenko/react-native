import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store'
import { View } from 'react-native';
import { Header }from './components/Header';
// import AlbumList from './components/app1/AlbumList'
// import LibraryList from './components/app2/LibraryList'
import RouterComponent from './components/app3/Router'

export default AndroidProject = () => {
  return (<Provider store={store}>
    <View style={{flex: 1}}>
      {/* <Header title="Header"/> */}
      {/* <AlbumList /> */}
      {/* <LibraryList /> */}
      <RouterComponent />
    </View>
  </Provider>)
}
