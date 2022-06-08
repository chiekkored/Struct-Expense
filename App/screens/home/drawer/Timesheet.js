/* 
    Author: Chiekko Red Alino
    Date Created: 10/15/21
    Updated On: 
    Updated By: 
    Description: Parent Timesheet Screen
*/

// BEGIN: Import dependencies
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../../../assets/colors';
import { FontAwesome5 } from '@expo/vector-icons';
import HomeExpenseScreen from './tabs/expense/HomeExpense';
import DraftsExpenseScreen from './tabs/expense/DraftsExpense';
import AllExpenseScreen from './tabs/expense/AllExpense';
import SampleTimesheetScreen from './tabs/timesheet/SampleTimesheet';
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
export default function TimesheetScreen() {
    // BEGIN: Local variable declaration

    // END

    // BEGIN: Local methods
    // END

    return (
        <Tab.Navigator initialRouteName="Sample" screenOptions={{headerShown: false}}>
            <Tab.Screen name="Sample" component={SampleTimesheetScreen} options = {{ tabBarLabel: 'TIMESHEET'}}/>
            {/* <Tab.Screen name="Home" component={HomeExpenseScreen} options = {{ tabBarLabel: 'HOME'}}/>
            <Tab.Screen name="ExpenseTab" component={AllExpenseScreen} options = {{ tabBarLabel: 'EXPENSE'}}/> */}
        </Tab.Navigator>
    );
}


