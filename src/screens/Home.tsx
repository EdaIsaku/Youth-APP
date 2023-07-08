import { useCallback } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { COLORS, SIZES, POSITION } from "../../theme/theme";
import { IMAGES, EVENTS, ICONS, CATEGORY } from "../constants";
import { PopularEvent, Category } from "../components";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { STYLES } from "../navigation/RootTabStyles";
import openMap from "react-native-open-maps";

interface Navigation {
  navigate(destination: string): void;
}

export const Home = ({ navigation }: { navigation: Navigation }) => {
  const customNavigation = useNavigation();
  useFocusEffect(
    useCallback(() => {
      customNavigation.getParent()?.setOptions({
        tabBarStyle: {
          ...STYLES.tabBarStyle,
          display: "flex",
        },
      });
    }, [])
  );

  const _goToYosemite = () => {
    openMap({
      latitude: 41.3275,
      longitude: 19.8187,
      waypoints: [],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upContainer}>
        <Text style={styles.title}>YOUTH</Text>
        <TouchableOpacity
          onPress={() => {
            _goToYosemite();
            // navigation.navigate("Map");
          }}
          style={styles.searchMapContainer}
        >
          <View style={styles.leftContainer}>
            <Text style={styles.mapTitle}>Find through the map</Text>
            <Text style={styles.mapSubtitle}>Tirana, Albania</Text>
          </View>
          <View style={styles.rightContainer}>
            <Image source={IMAGES.mini_map} style={styles.mapImage}></Image>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.middleContainer}>
        <Text style={styles.subtitle}>Collections</Text>
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
                eventType={el.eventType}
                image={el.image}
              />
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.downContainer}>
        <Text style={styles.subtitle}>Discover</Text>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.categoryContainer}
          showsHorizontalScrollIndicator={false}
        >
          {CATEGORY.map((el, idx) => {
            return (
              <Category
                key={idx}
                fillColor={el.fillColor}
                fontColor={el.fontColor}
                info={el.info}
                icon={el.icon}
              />
            );
          })}
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
    backgroundColor: "#ffffff",
  },
  upContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 0.2,
    paddingHorizontal: 15,
  },
  middleContainer: {
    flex: 0.55,
    marginTop: 40,
  },
  downContainer: {
    flex: 0.25,
    alignItems: "flex-start",
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    marginBottom: 80,
  },
  searchMapContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    borderRadius: SIZES.border * 2,
    shadowColor: COLORS.lightGrey,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  popularContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 40,
  },
  categoryContainer: {
    paddingLeft: 15,
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
    color: COLORS.black,
    fontFamily: "Lato-Regular",
    fontSize: SIZES.h1,
    paddingBottom: 15,
    marginTop: 25,
  },
  mapTitle: {
    paddingBottom: 5,
    color: COLORS.black,
    fontSize: SIZES.body2,
    fontFamily: "Lato-Regular",
  },
  mapSubtitle: {
    color: COLORS.darkGrey,
    fontSize: SIZES.body3,
    fontFamily: "Lato-Light",
  },
  mapImage: {
    borderRadius: SIZES.border,
    width: "80%",
    height: "80%",
  },
  subtitle: {
    color: COLORS.darkGrey,
    fontFamily: "Lato-Regular",
    fontSize: SIZES.h1 - 4,
    paddingLeft: 15,
  },
});
