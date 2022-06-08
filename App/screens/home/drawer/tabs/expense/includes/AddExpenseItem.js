/* 
    Author: Chiekko Red Alino
    Date Created: 10/28/21
    Updated On: 
    Updated By: 
    Description: Expense Item List Screen
*/

// BEGIN: Import dependencies
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import colors from '../../../../../../assets/colors';
import custom from '../../../../../../assets/custom';
// END

// BEGIN: Global variables
// Variables first


// Stylesheet
const styles = StyleSheet.create({
    buttonGroupContainer: {
        paddingHorizontal: 41,
        paddingVertical: 21,
        marginBottom: 8,
        elevation: 3,
        backgroundColor: colors.white
    },
    detailsContainer: {
        paddingHorizontal: 16,
        marginBottom: 8,
        elevation: 3,
        backgroundColor: colors.white
    },
    btnGroupLabel: {
        fontFamily: 'RobotoBold',
        fontSize: 14,
        letterSpacing: 0.5,
        color: colors.white,
        marginTop: 8
    }
});
// END

// Default or main component
// Parameters: none
export default function AddExpenseItemScreen() {
    // BEGIN: Local variable declaration

    const [selected, setSelected] = useState(0);

    // END

    // BEGIN: Local methods
    const buttonLabel = ['INTERNAL', 'COMPANY', 'EXTERNAL']
    const btnLeft = () => (<View style={{flexDirection: 'column', alignItems: 'center'}}><FontAwesome5 name="briefcase" size={36} color="white" /><Text style={styles.btnGroupLabel}>{buttonLabel[0]}</Text></View>)
    const btnCenter = () => (<View style={{flexDirection: 'column', alignItems: 'center'}}><FontAwesome name="building" size={36} color="white" /><Text style={styles.btnGroupLabel}>{buttonLabel[1]}</Text></View>)
    const btnRight = () => (<View style={{flexDirection: 'column', alignItems: 'center'}}><FontAwesome5 name="handshake" size={36} color="white" /><Text style={styles.btnGroupLabel}>{buttonLabel[2]}</Text></View>)
    const buttons = [{ element: btnLeft }, { element: btnCenter }, { element: btnRight }]

    // END

    return (
        <View style={custom.container}>
            <View style={styles.buttonGroupContainer}>
                <ButtonGroup
                    onPress={setSelected}
                    selectedIndex={selected}
                    buttons={buttons}
                    containerStyle={{height: 103, backgroundColor: colors.offWhite3, borderRadius: 8}}
                    selectedButtonStyle={{backgroundColor: colors.btnProceed}}
                    textStyle={{color: colors.white}}
                />
            </View>
                <View style={styles.detailsContainer}>
                    <Text>wassup</Text>
                </View>
        </View>
    );
}


