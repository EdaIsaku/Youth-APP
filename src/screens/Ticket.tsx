import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { EventTicket } from "../components";
import { COLORS, SIZES } from "../../theme/theme";

export const Ticket = () => {
  const [isSelected, setIsSelected] = useState([true, false]);
  const category = ["Bought", "History"];

  const handleCategoryPress = (idx: number) => {
    const newSelected = isSelected.map((_, id) => {
      if (id === idx) {
        return true;
      } else {
        return false;
      }
    });
    setIsSelected(newSelected);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.categoryContainer}>
        {category.map((el, idx) => {
          return (
            <TouchableOpacity
              style={[
                styles.categoryButton,
                isSelected[idx] ? styles.activeCategoryButton : {},
              ]}
              key={idx}
              onPress={() => handleCategoryPress(idx)}
            >
              <Text
                style={[
                  styles.category,
                  isSelected[idx] ? styles.activeCategory : {},
                ]}
              >
                {el}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.ticketsContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
        >
          <EventTicket />
          <EventTicket />
          <EventTicket />
          <EventTicket />
          <EventTicket />
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
    backgroundColor: COLORS.white,
  },
  categoryContainer: {
    flex: 0.1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  ticketsContainer: {
    flex: 0.9,
    width: "100%",
  },
  contentContainerStyle: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryButton: {
    flexShrink: 0,
    flexGrow: 1,
    alignItems: "center",
  },
  activeCategoryButton: {
    borderBottomColor: COLORS.secondary,
    borderBottomWidth: 2,
  },
  category: {
    fontFamily: "Lato-Bold",
    fontSize: SIZES.h2,
    paddingBottom: SIZES.padding,
  },
  activeCategory: {
    color: COLORS.secondary,
  },
});
