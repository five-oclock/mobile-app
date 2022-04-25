import React from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'react-native'


export const ErrorMessage = ({ error }) => {
    if (!error) return null

    // return (
    //     <Alert status="error">
    //         <Alert.Icon />
    //         <Alert.Title>{error.message}</Alert.Title>
    //     </Alert>
    // )

    Alert.alert(
        "Error",
        error.message,
        [
            {
                text: "Ok",
                onPress: () => {}
            }
        ]
    );

    return null;
}

ErrorMessage.propTypes = {
    error: PropTypes.object,
}