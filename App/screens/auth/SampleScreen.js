/* 
    Author: John Paul Navaja
    Date Created: 9/10/21
    Updated On: 9/10/21
    Updated By: John Paul Navaja
    Description: sample screen
*/

// BEGIN: Import dependencies
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// END

// BEGIN: Global variables
// Variables first
const sampleVariable = 'This is an example';


// Stylesheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
// END

// Default or main component
// Parameters: none
export default function SampleScreen() {
    // BEGIN: Local variable declaration
    const a = 'A';
    const [state, setstate] = useState(initialState);

    // END

    // BEGIN: Local methods
    function sampleMethod(){

    }

    async function sampleAsync(){

    }
    // END

    return (
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" />
        </View>
    );
}


