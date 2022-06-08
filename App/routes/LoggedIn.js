/* 
    Author: Chiekko Red Alino
    Date Created: 11/11/21
    Updated On:
    Updated By: 
    Description: Stack Screen for Logged In user
*/

// BEGIN: Import dependencies
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from '../screens/home/Home';
import AddExpenseScreen from '../screens/home/drawer/tabs/expense/includes/AddExpense';
import SnapReceiptScreen from '../screens/home/drawer/tabs/expense/includes/snapreceipt/SnapReceipt';
import ScannedReceiptScreen from '../screens/home/drawer/tabs/expense/includes/snapreceipt/ScannedReceipt';
import AddExpenseItemScreen from '../screens/home/drawer/tabs/expense/includes/AddExpenseItem';
import { createStackNavigator } from '@react-navigation/stack';
// END

// BEGIN: Global variables
// Variables first
const Stack = createStackNavigator();


// Stylesheet
// END

// Default or main component
// Parameters: none
export default function LoggedInNavigation() {
    // BEGIN: Local variable declaration

    // END

    // BEGIN: Local methods
    // END

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
            <Stack.Screen name="Create New Expense" component={AddExpenseScreen} />
            <Stack.Screen name="Snap Receipt" component={SnapReceiptScreen}/>
            <Stack.Screen name="Scanned Receipt" component={ScannedReceiptScreen}/>
            <Stack.Screen name="Add Expense Item" component={AddExpenseItemScreen} options={{headerTitle: 'Expense Item'}}/>
        </Stack.Navigator>
    );
}


