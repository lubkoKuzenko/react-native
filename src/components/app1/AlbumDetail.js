import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { Button } from '../Button'

export default class AlbumDetail extends Component {
  constructor(props) {
    super(props);
  }

  _onPressHandler = (album) => {
    Linking.openURL(album.url)
  };

  render () {
    const { album } = this.props
    const { title, image, thumbnail, albumTitle, card } = styles

    return (
      <View style={card}>
        <View style={title}>
          <Image style={thumbnail} source={{uri:album.thumbnail_image}} />
          <View>
            <Text style={albumTitle}>Title: {album.title}</Text>
            <Text>Artist: {album.artist}</Text>
          </View>
        </View>
        <Image style={image} source={{uri:album.image}} />
        <Button onPress={ () => this._onPressHandler(album) }>Buy Now</Button>
      </View>
    );
  }
}

const styles = {
  card: {
    marginBottom: 15,
    paddingBottom: 2,
    borderColor: '#ccc',
    borderBottomWidth: 1
  },
  title:{
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  image:{
    height: 350, 
    width: null
  },
  thumbnail:{
    width: 50,
    height: 50,
    marginRight: 10
  },
  albumTitle:{
    fontSize: 18
  }
}