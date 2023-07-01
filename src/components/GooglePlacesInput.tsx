import React from "react";
import { SafeAreaView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { COLORS } from "../../theme/theme";

export const GooglePlacesInput = () => {
  return (
    <SafeAreaView>
      <GooglePlacesAutocomplete
        placeholder="Search places ..."
        fetchDetails={true}
        styles={{
          textInputContainer: {
            // backgroundColor: "rgba(255,255,255,0.2)",
          },
          textInput: {
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
          predefinedPlacesDescription: {
            color: "#1faadb",
          },
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log("data", data, details);
        }}
        onFail={(err) => console.log(err)}
        query={{
          key: "AIzaSyDd9biFt3pu4Y_hYZswRkmtTWOg-tzB04k",
          language: "en",
        }}
      />
    </SafeAreaView>
  );
};
