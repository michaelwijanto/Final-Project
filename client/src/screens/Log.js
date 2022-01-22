import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
export default function Log({navigation}) {
  return (
    // <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Log</Text>
        <StatusBar style="auto" />
      </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
