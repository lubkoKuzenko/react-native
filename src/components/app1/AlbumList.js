import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail'

export default class AlbumList extends Component {
  state = {
    albums: []
  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => {
      this.setState({
        albums: response.data
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }

  renderAlbums(){
    return this.state.albums.map(album=> <AlbumDetail key={album.title} album={album} />)
  }

  render () {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>      
    );
  }
}