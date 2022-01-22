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
      _light={{ backgroundColor: "warmGray.100" }}
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
      </ScrollView>
      {/* <TabBar></TabBar> */}
      <View></View>
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
  },
  textViewAll: {
    paddingTop: 10,
    paddingRight: 15,
    color: "gray",
  },
  programsCard: {
    paddingLeft: 18,
  },
});
