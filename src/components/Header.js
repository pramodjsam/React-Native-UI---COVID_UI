import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const Header = ({ onPress }) => {
  return (
    <View>
      <View style={styles.header}>
        <AntDesign onPress={onPress} name="arrowleft" size={30} />
        <Image
          style={styles.icon}
          resizeMode="contain"
          source={require("../assets/cast.png")}
        />
      </View>
      <View style={styles.headerContent}>
        <Text style={styles.headerDate}>Mar 22, 2020, 12:48 GMT</Text>
        <Text style={styles.headerTitle}>Corona Virus Case</Text>
        <Text style={styles.headerNumber}>316,067</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerContent: {
    marginTop: 10,
  },
  headerDate: {
    fontSize: 14,
    fontWeight: "400",
    color: "#35343A",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "500",
    color: "#35343A",
    // marginVertical: 8,
  },
  headerNumber: {
    fontSize: 35,
    fontWeight: "500",
    color: "#35343A",
  },
});
