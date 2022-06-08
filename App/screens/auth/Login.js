/* 
    Author: Chiekko Red Alino
    Date Created: 10/5/21
    Updated On: 
    Updated By: 
    Description: Login screen
*/

// BEGIN: Import dependencies
import React, { useState, useRef, useContext } from 'react';
import { Dimensions, View, StyleSheet, Text, TouchableOpacity, Image, Platform} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../assets/colors';
import { FontAwesome5 } from '@expo/vector-icons';
import { TextInput, Button, Provider, Portal, Modal, HelperText, Checkbox} from 'react-native-paper';
import { AuthContext, useAuth } from '../../contexts/AuthContext';
import AppLoading from 'expo-app-loading';
import LoadingComponent from '../../components/LoadingComponent';
// END

// BEGIN: Global variables
// Variables first
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

// Stylesheet
const styles = StyleSheet.create({
    safeareaContainer: {
      flex: 1,
      backgroundColor: colors.white,
    },
    container: {
      flex: 1,
    },
    textLanguage: {
        fontFamily: 'RobotoMedium', 
        fontSize: 14, 
        letterSpacing: 0.5,
        alignSelf: 'center'
    },
    centerContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    loginContainer: {
        width: '100%',
        flexDirection: 'column'
    },
    titleContainer: {
        flexDirection: 'column',
        marginBottom: 54,
    },
    textTitle: {
        fontFamily: 'RobotoBold', 
        fontSize: 48, 
        letterSpacing: 0.45
    },
    textSubTitle: {
        fontFamily: 'Roboto', 
        fontSize: 18, 
        letterSpacing: 0.45
    },
    input: {
        backgroundColor: "transparent",
        color: colors.black,
        // padding: 8,
        borderBottomWidth: 0.5,
        borderColor: colors.black,
        marginBottom: 16,
    },
    textLabel: {
        fontFamily: 'RobotoBold', 
        fontSize: 13, 
        letterSpacing: 0.45,
        color: colors.offWhite
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 26,
        alignItems: 'center',
    },
    checkbox: {
        borderWidth: 0.5,
    },
    loginButton: {
        height: 49,
        width: '100%',
        backgroundColor: colors.red,
        color: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginBottom: 26,
    },
    forgotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    helpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 26 ,
        marginBottom: 16,
    },
    textHelp: {
        fontFamily: 'Roboto', 
        fontSize: 14, 
        letterSpacing: 0.5,
        color: colors.offWhite,
        textDecorationLine: 'underline'
    },
  });
// END

// Default or main component
// Parameters: none
export default function LoginScreen({navigation}) {
    // BEGIN: Local variable declaration
    const { login, loading, errors } = useContext(AuthContext);

    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSelected, setSelection] = useState(false);

    const passwordRef = useRef();
    // END

    // BEGIN: Local methods
    const attempt_login = () => {
        login({username: username, password: password});
    }

    const hasErrors = () => {
        return (errors != '');
      };
    // END

    

    return (
        <Provider>
            <SafeAreaView style={styles.safeareaContainer}>
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={{backgroundColor: 'white', padding: 20, margin: 16}}>
                        <Text style={{marginBottom: 5}}>ENGLISH</Text>
                        <Text style={{borderTopWidth: 0.5, borderColor: colors.black, paddingTop: 5}}>JAPANESE</Text>
                    </Modal>
                </Portal>
                <View style={styles.container}>
                    
                    <View style={{flexDirection: 'row', alignSelf: 'flex-end', paddingRight: 16}}>
                        <Button icon="translate" onPress={showModal} compact color="black" style={styles.textLanguage}>ENG</Button>
                    </View>

                    <View style={styles.centerContainer}>

                        <Image style={{height: 43, width: 220, alignSelf: 'center', marginBottom: 70}} source={require('../../assets/images/CARTRIDGE_Logo_R.png')}></Image>

                        <View style={styles.loginContainer}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.textTitle}>LOGIN</Text>
                                <Text style={styles.textSubTitle}>WITH YOUR COMPANY</Text>
                            </View>

                            <TextInput
                                // placeholder="jane@example.com"
                                label="USERNAME"
                                onChangeText={ (value) =>  setUsername(value)}
                                style={styles.input}
                                // keyboardType="email-address"
                                right={<TextInput.Icon name="office-building" color="#BCBCBC" />}

                                returnKeyType="next"
                                onSubmitEditing={() => {
                                    passwordRef.current.focus();
                                  }}
                                blurOnSubmit={false}
                            />
                            
                            <TextInput
                                // placeholder="jane@example.com"
                                label="PASSWORD"
                                onChangeText={ (value) =>  setPassword(value)}
                                ref={passwordRef}

                                style={styles.input}
                                secureTextEntry
                                right={<TextInput.Icon name="key-variant" color="#BCBCBC" />}

                                onSubmitEditing={() => attempt_login()}
                            />

                            <View style={styles.checkboxContainer}>
                                <View style={{borderRadius: 8, backgroundColor: Platform.OS === 'android' ? 'transparent' : colors.offWhite1}}>
                                    <Checkbox
                                        status={isSelected ? 'checked' : 'unchecked'}
                                        onPress={() => {
                                            setSelection(!isSelected);
                                        }}
                                    />
                                </View>
                                <Text style={{ fontFamily: 'Roboto', fontSize: 14, letterSpacing: 0.5, }}> REMEMBER USERNAME</Text>
                            </View>

                            <HelperText type="error" visible={hasErrors()}>
                                {errors}
                            </HelperText>
                            

                            <TouchableOpacity
                                onPress={() => attempt_login()}
                                style={styles.loginButton}
                                disabled={loading}
                            >
                                <Text style={{ fontFamily: 'RobotoBlack', fontSize: 24, color: colors.white}}>{loading ? (<LoadingComponent size={'large'} color={colors.white} />) : 'LOGIN'}</Text>
                            </TouchableOpacity>

                            <View style={styles.forgotContainer}>
                                <Text style={styles.textHelp}>FORGOT USERNAME</Text>
                                <Text style={{color: colors.offWhite}}> | </Text>
                                <Text style={styles.textHelp}>FORGOT PASSWORD</Text>
                            </View>

                        </View> 
                        
                        <View style={styles.helpContainer}>
                            <Text style={styles.textHelp}>NEED HELP?</Text>
                        </View>
                    </View> 
                </View> 
            </SafeAreaView>
        </Provider>
      )
}


