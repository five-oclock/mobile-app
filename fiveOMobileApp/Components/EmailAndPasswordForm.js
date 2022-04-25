// Stolen from: https://github.com/diegocasmo/expo-firebase-authentication/blob/main/src/components/EmailAndPasswordForm.js

import React from 'react'
import PropTypes from 'prop-types'
import { useFormik, getIn, Field } from 'formik'
import * as Yup from 'yup'
import { Button, TextInput, View } from 'react-native'

const buildValidationSchema = (withPasswordConfirmation) =>
  Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required().min(6),
    // Optionally require password confirmation
    ...(withPasswordConfirmation && {
      passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null])
        .required(),
    }),
  })

const EmailAndPasswordForm = ({
  buttonText = 'Create account',
  isLoading,
  onSubmit,
  withPasswordConfirmation = false,
}) => {
  const { handleChange, handleBlur, handleSubmit, values, touched, errors } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
        ...(withPasswordConfirmation && { passwordConfirmation: '' }),
      },
      validationSchema: buildValidationSchema(withPasswordConfirmation),
      onSubmit // (values) => { console.log(values) },
    })

  return (
    <View>
      <TextInput
        style={{ backgroundColor: getIn(errors, 'email') ? '#FF000055': undefined }}
        name='email'
        placeholder='Email Address'
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
        keyboardType='email-address'/>
      <TextInput
        style={{ backgroundColor: getIn(errors, 'password') ? '#FF000055': undefined }}
        name='password'
        placeholder='Password'
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
        // keyboardType='visible-password'
        secureTextEntry  />

      {
        withPasswordConfirmation && (
          <TextInput
            style={{ backgroundColor: getIn(errors, 'passwordConfirmation') ? '#FF000055': undefined }}
            name='passwordConfirmation'
            placeholder='Confirm Password'
            onChangeText={handleChange('passwordConfirmation')}
            onBlur={handleBlur('passwordConfirmation')}
            value={values.passwordConfirmation}
            // keyboardType='visible-password'
            secureTextEntry  />
        )
      }

      <Button onPress={(event) => { console.log('On Press!'); handleSubmit(event); }} disabled={isLoading} title='Submit'/>
    </View>
  );
}

EmailAndPasswordForm.propTypes = {
  buttonText: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  withPasswordConfirmation: PropTypes.bool,
}

export default EmailAndPasswordForm;