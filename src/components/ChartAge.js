import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ChartAge = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.title}>AGE GROUP</Text>
      </View>
      <View style={styles.chartContainer}>
        {Array(7)
          .fill(0)
          .map((e, i) => {
            const h = 30 + Math.random() * 70;
            return (
              <View
                key={i}
                style={[styles.chartCol, i == 6 && { marginRight: 0 }]}
              >
                <Text style={styles.percent}>{h.toFixed(0)}%</Text>
                <View
                  style={[styles.col, { height: 30 + Math.random() * 70 }]}
                ></View>
                <Text style={styles.titleCol}>
                  {i + 1}0-{i + 2}0
                </Text>
              </View>
            );
          })}
      </View>
    </View>
  );
};

export default ChartAge;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  percent: {
    color: "gray",
    textAlign: "center",
  },
  titleCol: {
    color: "gray",
    fontWeight: "500",
    fontSize: 12,
    marginTop: 6,
    textAlign: "center",
  },
  col: {
    height: 40,
    width: 40,
    backgroundColor: "#AEBBC9",
  },
  chartContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: 10,
    height: 150,
  },
  chartCol: {
    marginRight: 8,
  },
});
