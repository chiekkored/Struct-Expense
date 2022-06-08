/* 
    Author: Chiekko Red Alino
    Date Created: 11/8/21
    Updated On: 
    Updated By: 
    Description: Image Carousel Component
*/

// BEGIN: Import dependencies
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, FlatList } from 'react-native';
import colors from '../assets/colors';
// END

// BEGIN: Global variables
// Variables at the top


// Stylesheet
const styles = StyleSheet.create({
    bottomContainer: {
        bottom: 0, 
        position: 'absolute', 
        paddingBottom: 20, 
        width: '100%', 
        backgroundColor: colors.white, 
        borderTopRightRadius: 16, 
        borderTopLeftRadius: 16, 
        elevation: 3
    },
    receiptLabelText: {
        fontFamily: 'RobotoBold',
        fontSize: 12,
        color: colors.offWhite
    },
    receiptDataText: {
        fontFamily: 'RobotoMedium',
        fontSize: 28,
        color: colors.black
    },
})
// END

// Default or main component
export default function CarouselComponent( props ) {
  // BEGIN: Local variable declaration
  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
  // END

  // BEGIN: Local methods
  useEffect(() => {
    console.log(props);
});
    const Slide = ({ data }) => (
        <View>
            <View style={{ height: '90%', width: '100%'}}>
                <Image source={{ uri: data.uri }} style={{ width: windowWidth, height: windowHeight * 0.9}}></Image>
            </View>
            <View style={styles.bottomContainer}>
                <View style={{marginVertical: 20, marginHorizontal: 16, flexDirection: 'column', alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: 16}}>
                        <Text style={styles.receiptLabelText}>RECEIPT OVERALL TOTAL</Text>
                        <Text style={styles.receiptDataText}>¥{data.pred_amount}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                        <Text style={styles.receiptLabelText}>RECEIPT DATE</Text>
                        <Text style={styles.receiptDataText}>{data.pred_date}</Text>
                    </View>
                </View>
            </View>
        </View>
      );

  // END

  return (
    <FlatList
      data={props.props.photo_details}
      style={{ flex: 1 }}
      keyExtractor={item => item.id}
      renderItem={({ item }) => {
        return <Slide data={item} />;
      }}
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}

// BEGIN: Other components

// END




