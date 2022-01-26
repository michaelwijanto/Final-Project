import { View } from "native-base";
import { Text, StyleSheet, ScrollView } from "react-native";
import { Box } from "native-base";

import CoachHorizontal from "../components/CoachHorizontalContent";
import LevelButton from "../components/LevelButton";
import ContentHorizontal from "../components/ContentHorizontal";

export default function Content({ navigation }) {
  return (
    <Box
      style={styles.container}
      _dark={{
        borderColor: "coolGray.900",
        backgroundColor: "#1C2F3C",
      }}
      _light={{ backgroundColor: "#F5F8FA" }}
    >
      <ScrollView>
        <View marginTop="2" style={styles.container2}>
          <View
            style={{
              flexDirection: "row",
              padding: 3,
            }}
          >
            <Text
              style={{
                // marginTop: 10,
                fontSize: 22,
                color: "#1C2F3C",
                alignItems: "flex-start",
                paddingLeft: 10,
              }}
            >
              Levels
            </Text>
          </View>
          <LevelButton navigation={navigation} />
        </View>
        <View style={styles.container1}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 3,
            }}
          >
            <Text
              style={{
                paddingLeft: 10,
                fontSize: 22,
                color: "#1C2F3C",
              }}
            >
              Programs
            </Text>
          </View>
          <Box style={styles.programsCard}>
            <ContentHorizontal navigation={navigation} />
          </Box>
        </View>

        <View style={styles.container1}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 3,
            }}
          >
            <Text
              style={{
                paddingLeft: 10,
                fontSize: 22,
                color: "#1C2F3C",
                alignItems: "flex-start",
              }}
            >
              Coaches
            </Text>
          </View>
          <Box style={styles.programsCard}>
            <CoachHorizontal navigation={navigation} />
          </Box>
        </View>
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    paddingBottom: 25,
  },

  container1: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    marginTop: 15,
    paddingBottom: 20,
  },
  imagetop: {
    width: "100%",
    height: 200,
    marginTop: 10,
    borderRadius: 20,
  },

  imagetop1: {
    width: "100%",
    height: 200,
    marginTop: 10,
    borderRadius: 200,
  },
  programsCard: {
    paddingLeft: 18,
  },
});
