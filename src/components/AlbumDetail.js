import React, { Component } from 'react';
import { Text, View, Button, Image } from 'react-native';

export default class AlbumDetail extends Component {
  constructor(props) {
    super(props);
    this.onPressHandler = this.onPressHandler.bind(this)
  }

  onPressHandler = (album) => {
    console.log(album.title);
    // "title": "Fearless",
    // "artist": "Taylor Swift",
    // "url": "https://www.amazon.com/Fearless-Enhanced-Taylor-Swift/dp/B001EYGOEM",
    // "image": "https://images-na.ssl-images-amazon.com/images/I/51qmhXWZBxL.jpg",
    // "thumbnail_image": "https://i.imgur.com/K3KJ3w4h.jpg"
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
        <Button onPress={() => this.onPressHandler(album)} title="Buy" color="#841584" />
      </View>
    );
  }
}

const styles = {
  card: {
    marginBottom: 15,
    borderBottomWidth: 1,
    paddingBottom: 1,
    borderColor: 'gray'
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