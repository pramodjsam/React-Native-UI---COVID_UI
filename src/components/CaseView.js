import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const CaseView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.title}>ACTIVE CASE</Text>
        <Text style={styles.num}>206,557</Text>
      </View>
      <View style={styles.right}>
        <View style={styles.itemRight}>
          <AntDesign size={30} name="arrowdown" color="#6AB276" />
          <View style={styles.itemRightFill}>
            <Text style={styles.itemRightFillTitle}>95%</Text>
            <Text style={styles.itemRightFillDesc}>Mild Condition</Text>
          </View>
        </View>

        <View style={styles.itemRight}>
          <AntDesign name="arrowup" color="#E35757" size={30} />
          <View style={styles.itemRightFill}>
            <Text style={styles.itemRightFillTitle}>5%</Text>
            <Text style={styles.itemRightFillDesc}>Critical</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CaseView;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  left: {
    flex: 2,
    marginLeft: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 15,
    color: "gray",
    fontWeight: "500",
  },
  num: {
    fontSize: 42,
    fontWeight: "500",
  },
  itemRight: {
    flexDirection: "row",
    marginTop: 10,
  },
  itemRightFill: {
    marginLeft: 6,
  },
  itemRightFillTitle: {
    fontSize: 15,
    fontWeight: "600",
  },
  itemRightFillDesc: {
    marginTop: 5,
    color: "#CCCDCE",
  },
});
