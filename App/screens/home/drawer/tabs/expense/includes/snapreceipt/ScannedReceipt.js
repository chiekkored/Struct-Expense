/* 
    Author: Chiekko Red Alino
    Date Created: 11/8/21
    Updated On: 
    Updated By: 
    Description: Preview Snapped and Scanned Receipt Screen
*/

// BEGIN: Import dependencies
import AppLoading from 'expo-app-loading';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import custom from '../../../../../../../assets/custom';
import { SnapReceiptController } from '../../../../../../../controller/SnapReceiptController';
import colors from '../../../../../../../assets/colors';
import CarouselComponent from '../../../../../../../components/CarouselComponent';
// END

// BEGIN: Global variables
// Variables first


// Stylesheet

// END

// Default or main component
// Parameters: none
export default function ScannedReceiptScreen({ route, navigation }) {
    // BEGIN: Local variable declaration
    const [isUploading, setIsUploading] = useState(true);
    const [details, setDetails] = useState([]);

    // END

    // BEGIN: Local methods
    useEffect(() => {
        (async function() {
            try {
                const status = await SnapReceiptController.proceedScanReceipt(route.params.photosURI);
                setDetails(status);
                setIsUploading(status ? false : true);
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);
    // END


    if (isUploading === true) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" />
                <Text style={{margin: 16}}>SCANNING RECEIPT/S</Text>
            </View>
        );
    }
    
    return (
        <View style={custom.container}>
            <CarouselComponent props={{photo_details: details}} />
        </View>
    );
}


