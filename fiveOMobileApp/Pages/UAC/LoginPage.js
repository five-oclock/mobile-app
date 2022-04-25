import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { signIn as firebaseSignIn } from '../../api/user';
import EmailAndPasswordForm from '../../Components/EmailAndPasswordForm';
import { ErrorMessage } from '../../Components/ErrorMessage';

const useSignIn = () => {
    const [state, setState] = useState({
        isLoading: false,
        error: null,
    })

    const handleSignIn = async (values) => {
        setState({ isLoading: true, error: null })

        try {
            await firebaseSignIn(values)
            setState({ isLoading: false, error: null })
        } catch (error) {
            setState({ isLoading: false, error })
        }
    }

    return [handleSignIn, { ...state }]
}

const LoginPage = ({ navigation, ...props }) => {

    const [signIn, { isLoading, error }] = useSignIn();

    return (
        <SafeAreaView>
            <ErrorMessage error={error} />
            <EmailAndPasswordForm
                onSubmit={signIn}
                isLoading={isLoading}
                buttonText="Log In" />
        </SafeAreaView>
    )

}

export default LoginPage;

LoginPage.propTypes = {
    navigation: PropTypes.object.isRequired,
}