import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import ChartView from "../components/ChartView";
import CaseView from "../components/CaseView";

const Home = ({ navigation }) => {
  return (
    <ScrollView style={styles.flex}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Entypo name="menu" size={30} />
            <Image
              resizeMode="contain"
              style={styles.img}
              source={require("../assets/cast.png")}
            />
          </View>

          <View style={styles.headerContent}>
            <Text style={styles.headerDate}>Mar 22, 2020, 12:48 GMT</Text>
            <Text style={styles.headerTitle}>Corona Virus Case</Text>
            <Text style={styles.headerNumber}>316,067</Text>
          </View>
        </View>

        <View style={styles.chartContainer}>
          <ChartView title="DEATHS" num="13,590" color="#E35757" />
          <ChartView title="RECOVERED" num="95,892" color="#6AB276" />
        </View>
        <View style={styles.caseContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Details")}>
            <CaseView />
          </TouchableOpacity>
          <View style={{ height: 10 }} />
          <CaseView />
          <View style={{ height: 40 }} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  img: {
    width: 30,
    height: 30,
  },
  flex: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  container: {
    padding: 30,
    flex: 1,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    marginVertical: 8,
  },
  headerNumber: {
    fontSize: 45,
    fontWeight: "500",
    color: "#35343A",
  },
  chartContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  caseContainer: {
    marginTop: 20,
  },
});
