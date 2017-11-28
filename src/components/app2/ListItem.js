import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../store/actions/selectedItem.action';

class ListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription(){
    const { library, expanded } = this.props;
    
    if (expanded) {
      return <Text style={{ paddingTop: 10,paddingBottom: 10 }}>{library.description}</Text>
    }
  }

  render() {
    const { itemContainer, titleStyle, descriptionStyle } = styles;
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <View style={itemContainer}>
            <Text style={titleStyle}>
              {title}
            </Text>
          </View>
          <View style={descriptionStyle}>
            {this.renderDescription()}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  itemContainer:{
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    paddingLeft: 20,
    paddingRight: 20
  }
};

const mapStateToProps = (state, ownProps) => {
  return { expanded: state.selectedItem === ownProps.library.id };
};

export default connect(mapStateToProps, actions)(ListItem);