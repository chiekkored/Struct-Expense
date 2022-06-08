/* 
    Author: Chiekko Red Alino
    Date Created: 10/22/21
    Updated On: 
    Updated By: 
    Description: For snap receipt screen using Camera Module and Text Recognition
*/

// BEGIN: Import dependencies
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import colors from '../../../../../../../assets/colors';
import { FontAwesome5 } from '@expo/vector-icons';
import { SnapReceiptController } from '../../../../../../../controller/SnapReceiptController';
// END

// BEGIN: Global variables
// Variables first


// Stylesheet
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      justifyContent: 'center',
      margin: 20,
    },
    snapButtonContainer: {
      position: 'absolute',
      bottom: 20
    },
    snapButton: {
      width: 70,
      height: 70,
      bottom: 0,
      borderRadius: 50,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center'
    },
    snapCountContainer: {
      position: 'absolute', 
      bottom: 35,
      right: 10, 
      height: 40, 
      width: 40, 
      borderRadius: 20, 
      backgroundColor: colors.btnProceed, 
      elevation: 3
    },
    snapCountButton: {
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100%'
    },
    // snapBorderButton: {
    //   width: 50,
    //   height: 50,
    //   borderRadius: 30,
    //   borderColor: colors.offWhite,
    //   borderWidth: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center'
    // },

  });
// END

// Default or main component
// Parameters: none
export default function SnapReceiptScreen({ navigation }) {
    // BEGIN: Local variable declaration

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    
    const cameraRef = useRef();
    const [captures, setCaptures] = useState([]);

    // END

    // BEGIN: Local methods

    useEffect(() => {
        (async () => {
          const { status } = await Camera.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);

    const snapPicture = async () => {
      if (cameraRef) {
        photo = await cameraRef.current.takePictureAsync();
        const source = photo.uri;
        
        setCaptures([...captures,{source}]);
      }
    }

    // END

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
    return <Text>No access to camera</Text>;
    }
    return (
    <View style={styles.container}>
        <Camera ref={cameraRef} style={styles.camera} type={type} flashMode={Camera.Constants.FlashMode.on} autoFocus={Camera.Constants.AutoFocus.on}>
        <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.snapButtonContainer}
              onPress={snapPicture}>
              <View style={styles.snapButton}>
                <FontAwesome5 name="camera" size={36} color="black" />
              </View>
            </TouchableOpacity>
            {captures.length > 0 ? (<TouchableOpacity style={styles.snapCountContainer} onPress={() => navigation.navigate('Scanned Receipt', {photosURI: captures})}>
              <View style={styles.snapCountButton}>
                <Text style={{}}>{captures.length}</Text>
              </View>
            </TouchableOpacity>) : <View></View>}
        </View>
        </Camera>
    </View>
    );
}


