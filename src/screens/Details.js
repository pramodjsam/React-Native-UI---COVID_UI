import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ChartAffected from "../components/ChartAffected";
import ChartAge from "../components/ChartAge";
import ChartLine from "../components/ChartLine";
import Header from "../components/Header";

const Details = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Header onPress={() => navigation.goBack()} />
      <ChartAffected />
      <ChartLine />
      <ChartAge />
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
});
