/* 
    Author: Chiekko Red Alino
    Date Created: 9/13/21
    Updated On: 
    Updated By: 
    Description: Parent Expense Screen
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
export default function ExpenseScreen() {
    // BEGIN: Local variable declaration

    // END

    // BEGIN: Local methods
    // END

    return (
        <Tab.Navigator 
            initialRouteName="Home" 
            backBehavior='none'
            screenOptions=
            {{
                headerShown: false, 
                tabBarActiveTintColor: colors.white,
                tabBarInactiveTintColor: colors.textLight,
                tabBarStyle: {backgroundColor: colors.black}
            }} 
        >
            <Tab.Screen name="Drafts" 
                component={DraftsExpenseScreen}
                options = 
                    {{ tabBarLabel: 'DRAFTS', 
                        tabBarIcon: (tabInfo) => 
                            (<FontAwesome5 name="file-signature" size={24} color={tabInfo.color} />),
                    }}
            />
            <Tab.Screen name="Home" 
                component={HomeExpenseScreen} 
                options = 
                    {{ tabBarLabel: 'HOME',
                        tabBarIcon: (tabInfo) => 
                            (<FontAwesome5 name="home" size={24} color={tabInfo.color} />),
                    }}
            />
            <Tab.Screen name="ExpenseTab" 
                component={AllExpenseScreen} 
                options = 
                    {{ tabBarLabel: 'EXPENSE', 
                        tabBarIcon: (tabInfo) => 
                            (<FontAwesome5 name="inbox" size={24} color={tabInfo.color} />),
                    }}
            />
        </Tab.Navigator>
    );
}


