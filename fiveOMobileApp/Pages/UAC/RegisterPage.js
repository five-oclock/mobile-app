import React, { useState } from 'react'

import { View } from 'react-native';

import { ErrorMessage } from '../../Components/ErrorMessage'
import EmailAndPasswordForm from '../../Components/EmailAndPasswordForm'

import { signUp as signUpFirebase } from '../../api/user'
import { SafeAreaView } from 'react-native-safe-area-context';

const useSignUp = () => {
    const [state, setState] = useState({
        isLoading: false,
        error: null,
    })

    const handleSignUp = async (values) => {
        console.log('handleSignUp', values);

        setState({ isLoading: true, error: null })

        try {
            await signUpFirebase(values)
            setState({ isLoading: false, error: null })
        } catch (error) {
            setState({ isLoading: false, error })
        }
    }

    return [handleSignUp, { ...state }]
}

const RegisterPage = () => {
    const [signUp, { isLoading, error }] = useSignUp();

    return (
        <SafeAreaView>
            <ErrorMessage error={error} />
            <View>
                <View>
                    <ErrorMessage error={error} />
                    <EmailAndPasswordForm
                        onSubmit={ signUp }
                        isLoading={ isLoading }
                        withPasswordConfirmation={ true } />
                </View>
            </View>
        </SafeAreaView>
  )
}

export default RegisterPage;