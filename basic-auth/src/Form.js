import React, { useState } from 'react'
import { Auth } from 'aws-amplify'
import SignIn from './SignIn'
import SignUp from './SignUp'
import ConfirmSignUp from './ConfirmSignUp'
import ForgotPassword from './ForgotPassword'
import ForgotPasswordSubmit from './ForgotPasswordSubmit'

async function signIn({ username, password }, setUser) {
    try {
        const user = await Auth.signIn(username, password)
        const userInfo = { username: user.username, ...user.attributes }
        setUser(userInfo)
    } catch (err) {
        console.log('error signing up..', err)
    }
}

async function signUp({ username, password, email }, updateFormType) {
    try {
        await Auth.signUp({
            username, password, attributes: { email }
        })
        console.log('sign up success!')
        updateFormType('confirmSignup')
    } catch (err) {
        console.log('error signing up..', err)
    }
}

async function confirmSignUp({ username, confirmationCode }, updateFormType) {
    try {
        await Auth.confirmSignUp(username, confirmationCode)
        updateFormType('signIn')
    } catch (err) {
        console.log('error signing up..')
    }
}

async function forgotPassword({ username }, updateFormType) {
    try {
      await Auth.forgotPassword(username)
      updateFormType('forgotPasswordSubmit')
    } catch (err) {
      console.log('error submitting username to reset password...', err)
    }
  }

async function forgotPasswordSubmit(
    { username, confirmationCode, password }, updateFormType
) {
    try {
        await Auth.forgotPasswordSubmit(username, confirmationCode, password)
        updateFormType('signIn')
    } catch (err) {
        console.log('error updating password... :', err)
    }
}

const initialFormState = {
  username: '', password: '', email: '', confirmationCode: ''
}

function Form(props) {
  const [formType, updateFormType] = useState('signIn')
  const [formState, updateFormState] = useState(initialFormState)
  function updateForm(event) {
      const newFormState = {
          ...formState,
          [event.target.name]: event.target.value
      }
      updateFormState(newFormState)
  }
  function renderForm() {}
  return (
    <div>
      {renderForm()}
    </div>
  )
}