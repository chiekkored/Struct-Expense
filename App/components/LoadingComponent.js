import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import colors from '../assets/colors';

export default LoadingComponent = (props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={props.size} color={props.color} />
    </View>
  );
};