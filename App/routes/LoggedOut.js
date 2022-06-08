/* 
    Author: Chiekko Red Alino
    Date Created: 11/11/21
    Updated On:
    Updated By: 
    Description: Stack Screen for No authorized user
*/

// BEGIN: Import dependencies
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from '../screens/auth/Login';
import ForgotUsernameScreen from '../screens/auth/ForgotUsername';
import { createStackNavigator } from '@react-navigation/stack';
// END

// BEGIN: Global variables
// Variables first
const Stack = createStackNavigator();


// Stylesheet
// END

// Default or main component
// Parameters: none
export default function LoggedOutNavigation() {
    // BEGIN: Local variable declaration

    // END

    // BEGIN: Local methods
    // END

    return (
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={LoginScreen} options={{headerShown: false}} />
            <Stack.Screen name="Forgot Username" component={ForgotUsernameScreen} options={{headerShown: false}} />
        </Stack.Navigator>
    );
}


