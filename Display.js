import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react';
import { StatusBar } from 'react-native';

export default function Display({image}) {
  return (
    <View>
        <StatusBar />
        <Image
        source={image}
        style={{height: 480, width: 300, borderRadius: 15}}/>
    </View>
  )
}

const styles = StyleSheet.create({})