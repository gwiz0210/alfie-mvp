import React from 'react'
import {Text, View,SafeAreaView, FlatList} from 'react-native';
import { useState } from 'react';
import {COLORS, NFTData} from '../constants';
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';

const Home = () => {
  return (
    <SafeAreaView style={{ flex:1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{flex: 1}}>
        <View style={{zIndex: 0}}>
          <FlatList
          data={NFTData}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home;