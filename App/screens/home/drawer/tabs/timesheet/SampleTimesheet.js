/* 
    Author: Chiekko Red Alino
    Date Created: 10/15/21
    Updated On: 
    Updated By: 
    Description: Sample Timesheet Screen
*/

// BEGIN: Import dependencies
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../../../../../assets/colors';
import { FontAwesome5 } from '@expo/vector-icons';
// END

// BEGIN: Global variables
// Variables first

const Tab = createBottomTabNavigator();


// Stylesheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        width: '100%',
    },
    textHeader: {
        marginTop: 53,
        fontFamily: 'RobotoBold', 
        fontSize: 36, 
        letterSpacing: 0.5,
    },
    expenseButton: {
        height: 90,
        // width: 382,
        marginVertical: 16,
        backgroundColor: colors.add,
        color: colors.white,
        // alignItems: 'center',
        // justifyContent: 'center',
        borderRadius: 8,
        marginBottom: 26,
    },
});
// END

// Default or main component
// Parameters: none
export default function SampleTimesheetScreen() {
    // BEGIN: Local variable declaration

    // END

    // BEGIN: Local methods
    // END

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.textHeader}>TIMESHEET</Text>

            {/* <TouchableOpacity
                // onPress={() => navigation.navigate("Forgot Username")}
                style={styles.expenseButton}
            >
                <View style={{flexDirection: 'row', marginHorizontal: 32, marginVertical: 4, alignItems: 'center', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={{ fontFamily: 'RobotoBold', fontSize: 30, letterSpacing: 0.5, color: colors.white}}>CREATE</Text>
                        <Text style={{ fontFamily: 'RobotoBold', fontSize: 30, letterSpacing: 0.5, color: colors.white}}>EXPENSE</Text>
                    </View>
                    <FontAwesome5 name="plus" size={60} color="white" />
                </View>
            </TouchableOpacity> */}

        </View>
    );
}


