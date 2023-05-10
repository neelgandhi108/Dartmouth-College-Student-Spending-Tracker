import React, { useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";

import { RESTAURANTCard, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, RESTAURANTData } from "../constants";

const Home = () => {
  const [nftData, setNftData] = useState(RESTAURANTData);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setNftData(RESTAURANTData);
    }

    const filteredData = RESTAURANTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setNftData(RESTAURANTData);
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
            data={nftData}
            renderItem={({ item }) => <RESTAURANTCard data={item} />}
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
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
