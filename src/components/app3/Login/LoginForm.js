import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { validate } from './validation'
import styles from './styles'

import {
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';


const renderField = ({ placeholder, input: { onChange, ...restInput }, label, type, meta: { touched, error, warning }}) => {
  return <View>
    <FormInput onChangeText={onChange} {...restInput} placeholder={placeholder} shake={(touched && error) ? true : false} />
    {touched && ((error && <FormValidationMessage> {error} </FormValidationMessage>))}
  </View>
}

class LoginForm extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const { handleSubmit, valid, email, password, pristine, submitting } = this.props
    const { container, button, input } = styles;

    return <View>
      <FormLabel>Email:</FormLabel>
      <Field name="email" component={renderField} placeholder="test@test.com" />

      <FormLabel>Password:</FormLabel>
      <Field name="password" component={renderField}  placeholder="Password"/>

      <Button
        raised
        disabled={pristine || submitting} 
        onPress={handleSubmit}
        buttonStyle={button}
        textStyle={{textAlign: 'center'}}
        title={`Login`}
      />
    </View>
  }
}

export default reduxForm({
  form: 'login',       // a unique identifier for this form
  validate,            // validation function given to redux-form
})(LoginForm)