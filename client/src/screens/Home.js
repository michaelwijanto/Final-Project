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
} from "native-base";
import SwitchMode from "../components/SwitchMode";
import AppBar from "../components/AppBar";
import TabBar from "../components/TabBar";
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
        backgroundColor: "#5E454B",
      }}
      _light={{ backgroundColor: "transparent" }}
    >
      <View style={styles.top}>
        <AppBar />
        <Box>
          {/* <Image
            // style={styles.imageBanner}
            source={{
              uri: "https://previews.123rf.com/images/hstrongart/hstrongart2101/hstrongart210100027/162633914-energetic-fitness-training-banner-ad-3d-illustration-of-athletic-woman-doing-barbell-squat-designed-.jpg",
            }}
            alt="Alternate Text"
            size="lg"
          /> */}
        </Box>
      </View>
      <TabBar></TabBar>
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
    width: 200,
    height: 2000,
  },
});
