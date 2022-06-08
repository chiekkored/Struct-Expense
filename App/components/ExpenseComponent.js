/* 
    Author: Chiekko Red Alino
    Date Created: 10/15/21
    Updated On: 
    Updated By: 
    Description: Components for Expense Screens
*/

// BEGIN: Import dependencies
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import colors from '../assets/colors';
import { FontAwesome5 } from '@expo/vector-icons';
// END

// BEGIN: Global variables
// Variables at the top


// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  itemContainer: {
    backgroundColor: colors.white,
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'column',
    height: 99,
    width : '100%'
  },
  statusApproved: {
    fontFamily: 'RobotoBold',
    fontSize: 14,
    letterSpacing: 1.35,
    color: colors.approved,
    marginBottom: 8,
  },
  statusPending: {
    fontFamily: 'RobotoBold',
    fontSize: 14,
    letterSpacing: 1.35,
    color: colors.pending,
    marginBottom: 8,
  },
});
// END

// Default or main component
export function ExpenseItemComponent() {
  // BEGIN: Local variable declaration
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      status: 'APPROVED',
      date: '2021/09/27',
      total: '¥ 350,000.00'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      status: 'PENDING',
      date: '2021/09/27',
      total: '¥ 350,000.00'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      status: 'PENDING',
      date: '2021/09/27',
      total: '¥ 350,000.00'
    },
  ];

  // END

  // BEGIN: Local methods
  const Item = ({ status, date, total }) => (
    <View style={styles.itemContainer}>
      <Text style={status == 'APPROVED' ? styles.statusApproved : styles.statusPending}>
          {status}
      </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{backgroundColor: colors.mutedIcon, height: 50, width: 50, alignItems: 'center', justifyContent: 'center'}}>
              <FontAwesome5 name="receipt" size={36} color={colors.black} />
            </View>
            <View style={{flexDirection: 'column', marginLeft: 12}}>
              <Text style={{fontFamily: 'RobotoBold', fontSize: 17, letterSpacing: 0.5}}>
                {date}
              </Text>
              <Text style={{fontFamily: 'Roboto', fontSize: 23, letterSpacing: 0.5}}>
                {total}
              </Text>
            </View>
          </View>
          <FontAwesome5 name="chevron-right" size={36} color={colors.mutedIcon} />
        </View>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item status={item.status} date={item.date} total={item.total} />
  );
  // END

  return (
      <FlatList 
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
  );
}

// BEGIN: Other components
export function FirstComponent() {

}

export function SecondComponent() {

}

// END




