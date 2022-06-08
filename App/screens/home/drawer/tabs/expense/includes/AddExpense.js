/* 
    Author: Chiekko Red Alino
    Date Created: 10/19/21
    Updated On: 
    Updated By: 
    Description: Add Expense Screen
*/

// BEGIN: Import dependencies
import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, CheckBox, ScrollView } from 'react-native';
import colors from '../../../../../../assets/colors';
import custom from '../../../../../../assets/custom';
import { Modal, Portal, TextInput, Provider } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';
// END

// BEGIN: Global variables
// Variables first


// Stylesheet
const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        marginTop: 47,
        padding: 16,
        backgroundColor: colors.white,
        width: '100%',
    },
    shadowProp: {
      shadowColor: '#171717',
      elevation: 3
    },
    textLabel: {
        fontFamily: 'RobotoBold',
        fontSize: 13,
        letterSpacing: 0.5,
        marginBottom: 2,
        color: colors.offWhite
    },
    input: {
        height: 36,
        marginBottom: 16,
    },
    innerInputColumnContainerLeft: {
        flexDirection: 'column', 
        flex: 0.5, 
        marginRight: 6
    },
    innerInputColumnContainerRight: {
        flexDirection: 'column', 
        flex: 0.5, 
        marginLeft: 6
    },
    inputDescription: {
        height: 36,
        marginBottom: 16,
        backgroundColor: "transparent",
        color: colors.black,
        // padding: 8,
        borderBottomWidth: 0.5,
        borderColor: colors.black,
    },
    inputMemo: {
        // height: 36,
        marginBottom: 16,
        backgroundColor: "transparent",
        color: colors.black,
        // padding: 8,
        borderBottomWidth: 0.5,
        borderColor: colors.black,
    },
    textSubTitle: {
        fontFamily: 'RobotoMedium',
        fontSize: 14,
        marginTop: 28,
        color: colors.offWhite2,
        letterSpacing: 0.5,
    },
    addExpenseItemButton: {
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.offWhite1,
        borderRadius: 8,
        marginVertical: 12
    },
    addExpenseItemContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    addIconContainer: {
        height: 45, 
        width: 45, 
        borderRadius: 45, 
        backgroundColor: colors.btnAdd,
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom: 8
    },
    textAddExpenseLabel: {
        fontFamily: 'RobotoMedium',
        fontSize: 14,
        color: colors.offWhite2,
        letterSpacing: 0.5,
    },
    addExpenseItemModal: {
        backgroundColor: colors.white,
        marginHorizontal: 16,
        paddingHorizontal: 16,
        paddingVertical: 36,
        borderRadius: 25
    },
    modalAddNewItemButton: {
        flex: 0.5, 
        margin: 7, 
        height: 130,
        backgroundColor: colors.btnAdd,
        borderRadius: 8,
        flexDirection: 'column',
        padding: 14
    },
    modalSnapReceiptButton: {
        flex: 0.5, 
        margin: 7, 
        height: 130,
        backgroundColor: colors.btnProceed,
        borderRadius: 8,
        flexDirection: 'column',
        padding: 14
    },
    modalScanMobileIcCardButton: {
        flex: 0.5, 
        margin: 7, 
        height: 130,
        backgroundColor: colors.btnPurple,
        borderRadius: 8,
        flexDirection: 'column',
        padding: 14
    },
    modalScanIcCardButton: {
        flex: 0.5, 
        margin: 7, 
        height: 130,
        backgroundColor: colors.btnDanger,
        borderRadius: 8,
        flexDirection: 'column',
        padding: 14
    },
    modalButtonText: {
        fontFamily: 'RobotoBold',
        fontSize: 18,
        letterSpacing: 0.5,
        color: colors.white
    },
    expenseItemContainer: {
        width: '100%', 
        backgroundColor: 
        colors.white, 
        borderRadius: 8,
        marginBottom: 24
    },
    expenseItemHeader: {
        flex: 1, 
        flexDirection: 'row', 
        backgroundColor: colors.offWhite2, 
        borderTopLeftRadius: 8, 
        borderTopRightRadius: 8
    },
    expenseItemHeaderText: {
        marginHorizontal: 16, 
        marginVertical: 4, 
        color: colors.white
    },
    expenseItemContent: {
        margin: 16
    },
    textExpenseItemAmount: {
        fontFamily: 'Roboto',
        fontSize: 20,
    },
    textExpenseItemType: {
        fontFamily: 'RobotoMedium',
        fontSize: 18,
        letterSpacing: 0.5,
        marginBottom: 16
    },
    textExpenseItemAttachments: {
        fontFamily: 'RobotoMedium',
        fontSize: 20,
        marginBottom: 16
    },
    expenseItemOpenButton: {
        borderRadius: 8,
        backgroundColor: colors.white,
        borderWidth: 3,
        borderColor: colors.btnProceed,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textExpenseItemOpenButton: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: colors.btnProceed,
        marginVertical: 14
    },
    textFooterTotal: {
        fontFamily: 'RobotoMedium',
        fontSize: 28,
    }
});
// END

// Default or main component
// Parameters: none
export default function AddExpenseScreen({ navigation }) {
    // BEGIN: Local variable declaration
    const scrollViewRef = useRef();

    const [isSelected, setSelection] = useState(false);

    const [rows, setRows] = useState([]);
    const [total, setTotal] = useState(0);

    // Add Expense Modal
    const [visible, setVisible] = useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    // END

    // BEGIN: Local methods
    const btnAddExpenseItem = () => {
        setRows([...rows,{number:rows.length}]);
        setTotal((rows.length + 1) * 888);
        setVisible(false);
        // scrollViewRef.current.scrollToEnd({animated: true})
        navigation.navigate('Add Expense Item');
    }

    // END

    return (
        <Provider>
            <ScrollView style={custom.containerWithHpadding} ref={scrollViewRef}>
                <StatusBar style="auto" />

                {/* Add Expense Modal */}
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.addExpenseItemModal}>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity style={styles.modalAddNewItemButton} onPress={btnAddExpenseItem}>
                                <FontAwesome5 name="plus" size={48} color="white" />
                                <Text style={styles.modalButtonText}>ADD NEW</Text>
                                <Text style={styles.modalButtonText}>ITEM</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalSnapReceiptButton} onPress={() => navigation.navigate('Snap Receipt')}>
                                <FontAwesome5 name="camera" size={48} color="white" />
                                <Text style={styles.modalButtonText}>SNAP</Text>
                                <Text style={styles.modalButtonText}>RECEIPT</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity style={styles.modalScanMobileIcCardButton}>
                                <FontAwesome5 name="train" size={48} color="white" />
                                <Text style={styles.modalButtonText}>SCAN MOBILE</Text>
                                <Text style={styles.modalButtonText}>IC CARD</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalScanIcCardButton}>
                                <FontAwesome5 name="credit-card" size={48} color="white" />
                                <Text style={styles.modalButtonText}>SCAN IC</Text>
                                <Text style={styles.modalButtonText}>CARD</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </Portal>

                <View style={[styles.inputContainer, styles.shadowProp]}>
                    <Text style={styles.textLabel}>CREATE DATE</Text>
                    <TextInput
                        style={styles.input}
                    />
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.innerInputColumnContainerLeft}>
                            <Text style={styles.textLabel}>SUBMIT DATE</Text>
                            <TextInput
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.innerInputColumnContainerRight}>
                            <Text style={styles.textLabel}>APPROVAL DATE</Text>
                            <TextInput
                                style={styles.input}
                            />
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.innerInputColumnContainerLeft}>
                            <Text style={styles.textLabel}>CLOSING DATE</Text>
                            <TextInput
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.innerInputColumnContainerRight}>
                            <Text style={styles.textLabel}>PAYMENT DATE</Text>
                            <TextInput
                                style={styles.input}
                            />
                        </View>
                    </View>
                    <Text style={styles.textLabel}>EXPENSE DESCRIPTION</Text>
                    <TextInput
                        style={styles.inputDescription}
                    />
                    <Text style={styles.textLabel}>EXPENSE MEMO</Text>
                    <TextInput
                        style={styles.inputMemo}
                        multiline={true}
                    />
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            // style={styles.checkbox}
                            // tintColors={{ true: 'red' }}
                        />
                        <Text>Foreign Currency</Text>
                    </View>
                </View>
                <Text style={styles.textSubTitle}>EXPENSE ITEM LIST</Text>
                <TouchableOpacity 
                    style={styles.addExpenseItemButton}
                    onPress={showModal}    
                >
                    <View style={styles.addExpenseItemContainer}>
                        <View style={styles.addIconContainer}>
                            <FontAwesome5 name="plus" size={33} color="white" />
                        </View>
                        <Text style={styles.textAddExpenseLabel}>ADD EXPENSE ITEM</Text>
                    </View>
                </TouchableOpacity>

                {rows.map((item) => 
                    (
                        <View key={item.number} style={styles.expenseItemContainer}>
                            <View style={styles.expenseItemHeader}>
                                <Text style={styles.expenseItemHeaderText}>Expense Item {item.number+1}</Text>
                            </View>
                            <View style={styles.expenseItemContent}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16}}>
                                    <Text style={styles.textLabel}>Amount</Text>
                                    <Text style={styles.textExpenseItemAmount}>¥ 888.00</Text>
                                </View>
                                <Text style={styles.textLabel}>Expense Type</Text>
                                <Text style={styles.textExpenseItemType}>TRAIN EXPENSE</Text>
                                <Text style={styles.textExpenseItemAttachments}>No Attachments</Text>
                                <TouchableOpacity style={styles.expenseItemOpenButton}>
                                    <Text style={styles.textExpenseItemOpenButton}>OPEN EXPENSE ITEM</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                )}
            </ScrollView>
            <View style={{paddingBottom: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.white, borderBottomRightRadius: 8, borderBottomLeftRadius: 8, elevation: 3}}>
                <View style={{marginVertical: 10, alignItems: 'center'}}>
                    <Text style={styles.textFooterTotal}>¥ {total}</Text>
                    <Text style={styles.textLabel}>EXPENSE TOTAL</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 12}}>
                    <TouchableOpacity style={{marginRight: 39, backgroundColor: colors.btnDraft, borderRadius: 8}} onPress={() => navigation.navigate('Drafts')}>
                        <Text style={{marginHorizontal: 17, marginVertical: 14}}>Save as draft</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 39, backgroundColor: colors.btnProceed, borderRadius: 8}}>
                        <Text style={{marginHorizontal: 17, marginVertical: 14}}>Send Application</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Provider>
    );
}


