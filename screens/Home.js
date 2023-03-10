import React, { useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";

import { Card, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, RESTData } from "../constants";

const Home = () => {
  const [restaurantData, setNftData] = useState(RESTData);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setNftData(RESTData);
    }

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setNftData(RESTData);
    } else {
      setNftData(filteredData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={restaurantData}
            renderItem={({ item }) => <Card data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View
            style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.primary }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;