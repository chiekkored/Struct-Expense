/* 
    Author: Chiekko Red Alino
    Date Created: 10/13/21
    Updated On: 
    Updated By: 
    Description: Serves as App.js for this file structuring
*/

// BEGIN: Import dependencies
import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigation from './routes/Navigation';
import { AuthProvider } from './contexts/AuthContext';
// END

// BEGIN: Global variables
// Variables first

// Stylesheet
// END

// Default or main component
// Parameters: none
export default function App() {
    // BEGIN: Local variable declaration

    const [loaded] = useFonts({
        Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
        RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
        RobotoBlack: require('./assets/fonts/Roboto-Black.ttf'),
        RobotoMedium: require('./assets/fonts/Roboto-Medium.ttf'),
    });
    // END

    // BEGIN: Local methods
    // END

    if (!loaded) {
        return <AppLoading />;
    }

    return (
        <AuthProvider>
          <Navigation />
        </AuthProvider>
    );
}


