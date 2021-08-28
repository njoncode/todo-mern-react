import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useToasts } from 'react-toast-notifications';
import { withRouter } from 'react-router';
import { useHistory } from "react-router-dom";

import '../styles/signIn.scss';
import {signIn} from '../utils/api';
import FormInput from './FormInput';
import CustomButton from './CustomButton';
import { signInAction, signInSuccessAction, signInFailureAction } from '../redux/actions/signInAction';
import {makeSelectSignIn, makeSelectEmail, makeSelectPassword, makeSelectIsSignInSuccess, makeSelectSignInFailureMessage} from '../redux/selectors/signInSelector';

const SignIn = ({ email, password, userSignIn, signInDispatch, signInSuccessDispatch, isSignInSuccess, signInFailureDispatch, signInFailureMessage }) => {
   
    const { addToast } = useToasts();

    let history = useHistory();

    const handleOnChange = e => {
        const { name, value } = e.target;
        signInDispatch({[name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault();
 
        signIn(userSignIn)
        .then(res => {
            console.log('res: ', res.data)
            if(res.status === 200) {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('user', res.data.user.email)
                signInSuccessDispatch();
                if (isSignInSuccess) {
                    addToast('You have been successfully signed-in', {
                      appearance: 'success',
                      autoDismiss: true,
                    });
                  }
                history.push('/todos')
            }
        })
        .catch(err => {
            console.error('ERROR CAUGHT: ', err.response)
            signInFailureDispatch(err.response.data.message)
            if (signInFailureMessage) {
                addToast(signInFailureMessage, {
                  appearance: 'error',
                  autoDismiss: true,
                });
              }
        })
    }

        return (
            <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
        
            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email' 
                    type='email' 
                    onChange={handleOnChange}
                    value={email} 
                    label='Email'
                    required 
                />
                <FormInput
                    name='password' 
                    type='password' 
                    value={password} 
                    onChange={handleOnChange}
                    label='Password'
                    required 
                />
                <div className='buttons'>
                    <CustomButton type='submit'>Sign in</CustomButton >
                </div>
            </form>
        </div>
        )
}

const mapStateToProps = createStructuredSelector({
    email: makeSelectEmail,
    password: makeSelectPassword,
    userSignIn: makeSelectSignIn,
    isSignInSuccess: makeSelectIsSignInSuccess,
    signInFailureMessage: makeSelectSignInFailureMessage
})

const mapDispatchToProps = dispatch => ({
    signInDispatch: (data) => dispatch(signInAction(data)),
    signInSuccessDispatch: () => dispatch(signInSuccessAction()),
    signInFailureDispatch: (data) => dispatch(signInFailureAction(data))
  })

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);