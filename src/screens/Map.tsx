import { useCallback, useEffect, useState } from "react";
import { COLORS, POSITION, SIZES } from "../../theme/theme";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { ICONS, MAPSTYLE } from "../constants";
import * as Location from "expo-location";
import { GooglePlacesInput } from "../components";

export const Map = () => {
  const navigation = useNavigation();
  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: "none",
        },
      });
    }, [])
  );
  const [initiaLocation, setInitialLocation] = useState({
    latitude: 41.3275,
    longitude: 19.8187,
    latitudeDelta: 0.001,
    longitudeDelta: 0.01,
  });

  useEffect(() => {
    const getLocation = async () => {
      let location = await Location.getCurrentPositionAsync();
      return location;
    };
    getLocation().then((res) => {
      const { latitude } = res.coords;
      const { longitude } = res.coords;
      setInitialLocation({
        ...initiaLocation,
        latitude,
        longitude,
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initiaLocation}
        showsUserLocation={true}
        provider={PROVIDER_GOOGLE}
        customMapStyle={MAPSTYLE}
        onPress={(e) => {
          console.log("press", e.nativeEvent.coordinate);
        }}
      >
        <Marker coordinate={initiaLocation} />
      </MapView>
      <View
        style={{
          position: "absolute",
          top: "50%",
          width: 50,
          height: 50,
        }}
      >
        <Image
          source={ICONS.pin}
          style={{
            width: "100%",
            height: "100%",
            tintColor: COLORS.secondary,
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.backContainer}
        onPress={navigation.goBack}
      >
        <Image
          style={{
            width: "60%",
            height: "60%",
            tintColor: COLORS.white,
          }}
          source={ICONS.left}
        />
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        {/* <TextInput
          style={styles.input}
          placeholder={"Search places . . ."}
          placeholderTextColor={"#ccc"}
        /> */}
        {/* <GooglePlacesInput /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...POSITION.center,
  },
  map: {
    ...SIZES.fullSize,
  },
  backContainer: {
    position: "absolute",
    top: 30,
    left: 20,
    width: 30,
    height: 30,
    borderRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  inputContainer: {
    position: "absolute",
    top: 70,
    width: "100%",
  },
  input: {
    borderRadius: 20,
    marginHorizontal: 20,
    color: COLORS.white,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderColor: "#fff",
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 20,
    fontSize: 20,
    fontFamily: "Lato-Regular",
  },
});
