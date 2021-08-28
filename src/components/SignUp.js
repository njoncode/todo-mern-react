import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useToasts } from 'react-toast-notifications';

import '../styles/signIn.scss';
import '../styles/signUp.scss';
import FormInput from './FormInput';
import CustomButton from './CustomButton';
import { signUpAction, signUpSuccessAction, signUpFailureAction } from '../redux/actions/signUpAction';
import {makeSelectSignUp, makeSelectName, makeSelectEmail, makeSelectPassword, makeSelectConfirmPassword, makeSelectIsSignUpSuccess, makeSelectSignUpFailureMessage} from '../redux/selectors/signUpSelector';
import {signUp} from '../utils/api';

const SignUp = ({ userSignUp, getSignUpDispatch, name, email, password, confirmPassword, signUpSuccessDispatch, isSignUpSuccess, signUpFailureDispatch, signUpFailureMessage }) => {

    const { addToast } = useToasts();

    React.useEffect(() => {
        if (!!isSignUpSuccess) {
          addToast('User has been successfully added', {
            appearance: 'success',
            autoDismiss: true,
          });
        }
      }, [isSignUpSuccess]);
    
  
    const handleOnChange = e => {
        console.log('e.target: ', e.target)
       const { name, value } = e.target;
       getSignUpDispatch({[name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault()

        console.log('userSignUp: ', userSignUp)

        signUp(userSignUp)
            .then(res => {
                console.log(res)
                if(res.status === 200) {
                    signUpSuccessDispatch();
                }
            })
            .catch(err => {
                console.error('ERROR CAUGHT: ', err.response)
                signUpFailureDispatch(err.response.data.message)
                if (signUpFailureMessage) {
                    addToast(signUpFailureMessage, {
                    appearance: 'error',
                    autoDismiss: true,
                    });
              }
            })
    }

        return (
            <div className='sign-up'>
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
            <FormInput 
                type='text'
                name='name'
                value={name}
                onChange={handleOnChange}
                label='Name'
                required
            />
            <FormInput 
                type='text'
                name='email'
                value={email}
                onChange={handleOnChange}
                label='Email'
                required
            />
            <FormInput 
                type='password'
                name='password'
                value={password}
                onChange={handleOnChange}
                label='Password'
                required
            />
            <FormInput 
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={handleOnChange}
                label='Confirm Password'
                required
            />
            <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
            </div>
        )
    }

    const mapStateToProps = createStructuredSelector({
        name: makeSelectName,
        email: makeSelectEmail,
        password: makeSelectPassword,
        confirmPassword: makeSelectConfirmPassword,
        userSignUp: makeSelectSignUp,
        isSignUpSuccess: makeSelectIsSignUpSuccess,
        signUpFailureMessage: makeSelectSignUpFailureMessage
    })
    
    const mapDispatchToProps = dispatch => ({
        getSignUpDispatch: (data) => dispatch(signUpAction(data)),
        signUpSuccessDispatch: (data) => dispatch(signUpSuccessAction(data)),
        signUpFailureDispatch: (data) => dispatch(signUpFailureAction(data)),
      })

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);