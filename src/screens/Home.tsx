import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { COLORS, SIZES } from "../../theme/theme";
import { IMAGES, EVENTS } from "../constants";
import { PopularEvent } from "../components";
import { LinearGradient } from "expo-linear-gradient";

interface Navigation {
  navigate(destination: string): void;
}

export const Home = ({ navigation }: { navigation: Navigation }) => {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={[COLORS.grey, COLORS.grey]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.7, y: 1 }}
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.upContainer}>
          <Text style={styles.title}>YOUTH</Text>
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
          <Text style={styles.subtitle}>Explore al the events</Text>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.popularContainer}
            showsHorizontalScrollIndicator={false}
          >
            {EVENTS.map((el, idx) => {
              return (
                <PopularEvent
                  key={idx}
                  eventName={el.eventName}
                  place={el.place}
                  time={el.time}
                  image={el.image}
                />
              );
            })}
          </ScrollView>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
    flex: 0.7,
    marginBottom: 80,
  },
  searchMapContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: COLORS.black,
    borderRadius: SIZES.border * 2,
    shadowColor: COLORS.white,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  popularContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 40,
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
    alignSelf: "center",
    color: COLORS.white,
    fontFamily: "Lato-Bold",
    fontSize: SIZES.h1,
    paddingBottom: 15,
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
  subtitle: {
    color: COLORS.white,
    alignSelf: "center",
    fontFamily: "Lato-Bold",
    fontSize: SIZES.h2,
    paddingTop: 30,
    paddingBottom: 15,
  },
});
