/* 
    Author: Chiekko Red Alino
    Date Created: 9/13/21
    Updated On: 
    Updated By: 
    Description: Parent Screen that consist of the drawer in and its screens
*/

// BEGIN: Import dependencies
import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import ExpenseScreen from './drawer/Expense';
import colors from '../../assets/colors';
import { Divider, IconButton } from 'react-native-paper';
import TimesheetScreen from './drawer/Timesheet';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import AddExpenseScreen from './drawer/tabs/expense/includes/AddExpense';
import { AuthContext } from '../../contexts/AuthContext';
// END

// BEGIN: Global variables
// Variables first

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


// Stylesheet
const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        marginVertical: 54,
        marginHorizontal: 10
    },
    headerImageContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    headerImage: {
        width: 220,
        height: 43,
    },
    userInfoContainer: {
        flexDirection: 'column',
        marginVertical: 33,
    },
    textUserInfoCompany: {
        fontFamily: 'RobotoBold', 
        fontSize: 18, 
        letterSpacing: 0.10,
        textDecorationLine: 'underline',
        marginBottom: 2
    },
    textUserInfoUsername: {
        fontFamily: 'Roboto',
        fontSize: 18, 
        letterSpacing: 0.5,
        marginBottom: 2
    },
    logoutButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    logoutButton: {
        height: 49,
        width: '100%',
        backgroundColor: colors.btnDanger,
        color: colors.black,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    textDrawerItem: {
        fontFamily: 'RobotoBold',
        fontSize: 18, 
        letterSpacing: 0.5,
        color: colors.black
    },
});
// END

// Default or main component
// Parameters: none
export default function HomeScreen({ navigation }) {
    // BEGIN: Local variable declaration

    
    const { logout } = useContext(AuthContext);

    // END

    // BEGIN: Local methods
    const attempt_logout = () => {
        logout();
    }


    const CustomDrawerContent = (props) => {
        return (
            <View style={styles.drawerContainer}>
                <View style={styles.headerImageContainer}>
                    <Image style={styles.headerImage} source={require('../../assets/images/CARTRIDGE_Logo_R.png')}></Image>
                </View>
                <View style={styles.userInfoContainer}>
                    <Text style={styles.textUserInfoCompany}>Company Name</Text>
                    <Text style={styles.textUserInfoUsername}>Hello, <Text style={{fontFamily: 'RobotoMedium'}}>username!</Text></Text>
                </View>
                <View style={styles.logoutButtonContainer}>
                    <TouchableOpacity
                        onPress={() => attempt_logout()}
                        style={styles.logoutButton}
                    >
                        <Text style={{ fontFamily: 'RobotoBlack', fontSize: 18, color: colors.white}}>LOGOUT</Text>
                    </TouchableOpacity>
                </View>
                <Divider style={{marginVertical: 44}} />
                
                <DrawerItemList {...props} />
            </View>
        );
      }
    // END

    return (
        <Drawer.Navigator 
                    screenOptions={{drawerLabelStyle: styles.textDrawerItem}} 
                    drawerContent={props => <CustomDrawerContent {...props} />}
                >
                <Drawer.Screen name="ExpenseDrawer" component={ExpenseScreen}
                options={({route}) => ({
                    drawerIcon: config => <FontAwesome5 name="receipt" size={18} />,
                    headerTitle: '',
                    drawerLabel: 'Expense',
                    headerRight: () => <View style={{marginRight: 16}}><FontAwesome name="user-circle" size={24} /></View>
                })}/>
                <Drawer.Screen name="TimesheetDrawer" component={TimesheetScreen} 
                options={({route}) => ({
                    drawerIcon: config => <FontAwesome5 name="calendar-day" size={18} />,
                    headerTitle: '',
                    drawerLabel: 'Timesheet',
                    headerRight: () => <View style={{marginRight: 16}}><FontAwesome name="user-circle" size={24} /></View>
                })}/>

                
                
        </Drawer.Navigator>
    );
}