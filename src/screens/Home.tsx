import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { COLORS, SIZES } from "../../theme/theme";
import { IMAGES } from "../constants/images";
import { PopularEvent } from "../components";
import { LinearGradient } from "expo-linear-gradient";

interface Navigation {
  navigate(destination: string): void;
}

export const Home = ({ navigation }: { navigation: Navigation }) => {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={[COLORS.darkGrey, COLORS.grey]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.upContainer}>
          {/* <Text style={styles.title}>EVENTS</Text> */}
          <View style={styles.searchMapContainer}>
            <View style={styles.leftContainer}>
              <Text style={styles.mapTitle}>Find through the map</Text>
              <Text style={styles.mapSubtitle}>Tirana, Albania</Text>
            </View>
            <View style={styles.rightContainer}>
              <Image source={IMAGES.mini_map} style={styles.mapImage}></Image>
            </View>
          </View>
        </View>
        <View style={styles.downContainer}>
          {/* <Text style={[styles.title, { marginLeft: 20 }]}>POPULAR</Text> */}
          <View style={styles.popularContainer}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={{
                justifyContent: "space-around",
                alignItems: "center",
              }}
              showsHorizontalScrollIndicator={false}
            >
              <PopularEvent />
              <PopularEvent />
              <PopularEvent />
              <PopularEvent />
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  upContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 0.2,
    marginHorizontal: 10,
  },
  downContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 0.6,
    marginBottom: 80,
  },
  searchMapContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: COLORS.black,
    borderRadius: SIZES.border * 2,
  },
  popularContainer: {
    // justifyContent: "center",
    // alignItems: "center",
  },
  leftContainer: {
    flex: 0.55,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: SIZES.border * 2,
    borderBottomLeftRadius: SIZES.border * 2,
  },
  rightContainer: {
    flex: 0.45,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Lato-Bold",
    fontSize: SIZES.h2,
    paddingBottom: 10,
  },
  mapTitle: {
    paddingBottom: 5,
    color: COLORS.white,
    fontSize: SIZES.body3,
    fontFamily: "Lato-Regular",
  },
  mapSubtitle: {
    color: COLORS.lightGrey,
    fontSize: SIZES.body4,
    fontFamily: "Lato-Light",
  },
  mapImage: {
    borderRadius: SIZES.border,
    width: "85%",
    height: "85%",
  },
});
