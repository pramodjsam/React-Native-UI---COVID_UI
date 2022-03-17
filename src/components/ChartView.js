import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ChartLine = ({ height, color, style }) => {
  return (
    <View style={[styles.line, { height }, style]}>
      <View style={[styles.fill, { height: "25%", backgroundColor: color }]} />
    </View>
  );
};

const ChartView = ({ title, num, color }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.number, { color }]}>{num}</Text>
      </View>
      <View style={styles.chart}>
        <View style={styles.chartContainer}>
          {Array(15)
            .fill(0)
            .map((e, i) => (
              <ChartLine
                key={i}
                height={30 + 30 * Math.random()}
                color={color}
                style={[i == 14 && { marginRight: 0 }]}
              />
            ))}
          {/* <ChartLine height={60} color="red" /> */}
        </View>
      </View>
    </View>
  );
};

export default ChartView;

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    height: 190,
    backgroundColor: "#fff",
    // backgroundColor: "red",
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderRadius: 10,
  },
  header: {
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  number: {
    fontSize: 40,
    fontWeight: "500",
  },
  chart: {
    // backgroundColor: "red",
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  chartContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    alignSelf: "center",
  },
  line: {
    width: 2,
    backgroundColor: "#EAEAE8",
    justifyContent: "flex-end",
    marginRight: 8,
  },
});
