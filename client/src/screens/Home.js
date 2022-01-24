import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Native Base
import { Box, Image, Text, ScrollView } from "native-base";

// Components
import LevelHorizontal from "../components/LevelHorizontalHome";
import CoachHorizontal from "../components/CoachHorizontalHome";
import Articles from "../components/Articles";

export default function Home({ navigation }) {
  useEffect(() => {
    getStorage();
  }, []);

  const getStorage = async () => {
    try {
      const value = await AsyncStorage.getItem("@access_token");
      if (value !== null) {
        // value previously stored
        // console.log(value);
      }
    } catch (e) {
      // error reading value
      console.error(e);
    }
  };

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
            <LevelHorizontal navigation={navigation} />
          </Box>
        </Box>
        <Box style={styles.boxCoach}>
          <Box style={styles.textBoxPrograms}>
            <Text style={styles.textPrograms}>Coaches</Text>
            <Text style={styles.textViewAll}>View all</Text>
          </Box>
          <Box style={styles.programsCard}>
            <CoachHorizontal navigation={navigation} />
          </Box>
        </Box>
        <Box style={styles.boxArticle}>
          <Box style={styles.textBoxPrograms}>
            <Text style={styles.textPrograms}>Articles</Text>
            <Text style={styles.textViewAll}>View all</Text>
          </Box>
          <Box style={styles.programsCard}>{/* <Articles /> */}</Box>
        </Box>
      </ScrollView>
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
  appBarStyle: {
    top: 0,
    position: "absolute",
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
