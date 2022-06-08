/* 
    Author: Chiekko Red Alino
    Date Created: 9/13/21
    Updated On: 
    Updated By: 
    Description: All Expense Tab for Expense Screen
*/

// BEGIN: Import dependencies
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../../../../../assets/colors';
import { FontAwesome5 } from '@expo/vector-icons';
import { ExpenseItemComponent } from '../../../../../components/ExpenseComponent';
import { Button } from 'react-native-paper';
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
        fontFamily: 'RobotoBold', 
        fontSize: 36, 
        letterSpacing: 0.5,
    },
    textFilter: {
        fontFamily: 'Roboto', 
        fontSize: 14, 
        letterSpacing: 0.5,
        alignSelf: 'flex-start'
    },
});
// END

// Default or main component
// Parameters: none
export default function AllExpenseScreen() {
    // BEGIN: Local variable declaration

    // END

    // BEGIN: Local methods
    // END

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={{marginTop: 53, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between'}}>
                <Text style={styles.textHeader}>EXPENSE</Text>
                <View style={{flexDirection: 'row'}}>
                    <Button icon="eye" compact color="black" style={styles.textFilter}>SHOW</Button>
                    <Button icon="sort" compact color="black" style={styles.textFilter}>SORT</Button>
                </View>
            </View>

            <ExpenseItemComponent />

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


