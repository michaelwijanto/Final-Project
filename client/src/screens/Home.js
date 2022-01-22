import React from "react";
import { StyleSheet, View, Pressable, FlatList } from "react-native";
import {
  Box,
  Heading,
  Image,
  useColorMode,
  ChevronRightIcon,
  StatusBar,
  HStack,
  IconButton,
  Text,
  Icon,
  Center,
  ScrollView,
} from "native-base";
import SwitchMode from "../components/SwitchMode";
import AppBar from "../components/AppBar";
import TabBar from "../components/TabBar";
import LevelHorizontal from "../components/LevelHorizontalHome";
import CoachHorizontal from "../components/CoachHorizontalHome";
import Articles from "../components/Articles";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";

export default function Home({ navigation }) {
  const [selected, setSelected] = React.useState(1);

  return (
    <Box
      style={styles.container}
      _dark={{
        borderColor: "coolGray.900",
        backgroundColor: "#1C2F3C",
      }}
      _light={{ backgroundColor: "#F5F8FA" }}
    >
      <ScrollView style={styles.top}>
        <AppBar />
        <Box width="100%">
          <Image
            style={styles.imageBanner}
            source={{
              uri: "https://t3.ftcdn.net/jpg/04/08/48/48/360_F_408484833_ZOWxFI9nWYOcBveh2FWIJ1F6z60PsQ1I.jpg",
            }}
            alt="Alternate Text"
            // size="xl"
          />
        </Box>
        <Box style={styles.boxPrograms}>
          <Box style={styles.textBoxPrograms}>
            <Text style={styles.textPrograms}>Programs</Text>
            <Text style={styles.textViewAll}>View all</Text>
          </Box>
          <Box style={styles.programsCard}>
            <LevelHorizontal />
          </Box>
        </Box>
        <Box style={styles.boxCoach}>
          <Box style={styles.textBoxPrograms}>
            <Text style={styles.textPrograms}>Coaches</Text>
            <Text style={styles.textViewAll}>View all</Text>
          </Box>
          <Box style={styles.programsCard}>
            <CoachHorizontal />
          </Box>
        </Box>
        <Box style={styles.boxArticle}>
          <Box style={styles.textBoxPrograms}>
            <Text style={styles.textPrograms}>Articles</Text>
            <Text style={styles.textViewAll}>View all</Text>
          </Box>
          <Box style={styles.programsCard}>
            <Articles />
          </Box>
        </Box>
      </ScrollView>
      {/* <TabBar></TabBar> */}
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 1,
  },
  imageBanner: {
    width: "100%",
    height: 200,
  },
  boxPrograms: {
    marginTop: 7,
    backgroundColor: "white",
    paddingBottom: 25,
  },
  textBoxPrograms: {
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textPrograms: {
    marginTop: 10,
    paddingTop: 3,
    paddingLeft: 10,
    fontSize: 22,
    color: "#1C2F3C",
  },
  textViewAll: {
    paddingTop: 12,
    paddingRight: 15,
    color: "gray",
  },
  programsCard: {
    paddingLeft: 18,
  },
  boxCoach: {
    marginTop: 15,
    backgroundColor: "white",
  },
  boxArticle: {
    marginTop: 15,
    backgroundColor: "white",
    paddingBottom: 20,
  },
});
