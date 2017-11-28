import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as loginActions from '../../../store/actions/login.actions'
import LoginForm from './LoginForm'
import { View } from 'react-native'
import { Text, Divider, Icon } from 'react-native-elements';
import styles from './styles'

class Login extends Component {

  submit = (values) => {
    return this.props.logIn(values);
  }

  render(){
    console.log(this.props.auth)
    return <View>
      <Text h3 style={styles.title}>Please login</Text>
      <Divider style={{ backgroundColor: 'black' }} />
      <LoginForm onSubmit={ this.submit.bind(this) } />
    </View>
  }
}

export default connect(
  state => ({
    auth: state.auth
  }),
  dispatch => {
    return bindActionCreators({ ...loginActions }, dispatch)
  }
)(Login)