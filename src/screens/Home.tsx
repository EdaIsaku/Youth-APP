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

interface Navigation {
  navigate(destination: string): void;
}

export const Home = ({ navigation }: { navigation: Navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>EVENTS</Text>
      <View style={styles.searchMapContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.mapTitle}>Find through the map</Text>
          <Text style={styles.mapSubtitle}>Tirana, Albania</Text>
        </View>
        <View style={styles.rightContainer}>
          <Image source={IMAGES.mini_map} style={styles.mapImage}></Image>
        </View>
      </View>
      <Text style={styles.title}>FEATURED</Text>
      <View style={styles.featuredContainer}>
        <View style={styles.featuredImageContainer}>
          <Image style={styles.featuredImage} source={IMAGES.mini_map}></Image>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>31 Dec</Text>
          </View>
        </View>
        <View style={styles.featuredInfo}>
          <Text>Dua Lipa Concert</Text>
          <Text>Skanderbag Square</Text>
        </View>
      </View>
      <Text style={styles.title}>POOPULAR</Text>
      <View style={styles.popularContainer}>
        <ScrollView
          bounces={true}
          contentContainerStyle={{
            backgroundColor: COLORS.black,
          }}
        >
          <Text>Lorem Ipsum</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  searchMapContainer: {
    flex: 0.1,
    width: "90%",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: COLORS.black,
    borderRadius: SIZES.border * 2,
  },
  featuredContainer: {
    flex: 0.25,
    width: "90%",
    borderRadius: SIZES.border * 2,
    backgroundColor: COLORS.black,
  },
  popularContainer: {
    flex: 0.5,
    width: "90%",
    borderRadius: SIZES.border * 2,
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
  featuredImageContainer: {
    borderTopLeftRadius: SIZES.border * 2,
    borderTopRightRadius: SIZES.border * 2,
    flex: 0.75,
  },
  featuredInfo: {
    flex: 0.25,
    backgroundColor: "red",
    borderBottomLeftRadius: SIZES.border * 2,
    borderBottomRightRadius: SIZES.border * 2,
  },
  dateContainer: {},
  featuredImage: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: SIZES.border * 2,
    borderTopRightRadius: SIZES.border * 2,
  },
  date: {},
  title: {
    fontFamily: "Lato-Bold",
    fontSize: SIZES.h2,
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
