import React from "react";

import {Image,View, StyleSheet, Pressable, FlatList, ScrollView } from "react-native";
import {
  Box,
  Heading,
  useColorMode,
  ChevronRightIcon,
  StatusBar,
  HStack,
  IconButton,
  Text,
  Icon,
  Center,
} from "native-base";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import LevelVerticalContents from '../components/LevelVerticalContents'

export default function LevelContent({ navigation }) {
  const [selected, setSelected] = React.useState(1);

  return (
    
      <View style={styles.container}>

{/* <Image
        style={styles.imagetop}
        source={{
          uri: 'https://cdn.statically.io/img/mediaini.com/f=auto%2Cq=90/wp-content/uploads/2021/05/warmindo.jpg',
        }}
      /> */}
        <View style={styles.container1}>
        <View style={{
                flexDirection:"row",
                justifyContent:"space-between",
                padding:3
            }}>
            <Text style={{
                marginTop: 10,
                 fontWeight: 'bold',
                fontSize: 25,
                color: 'grey',
                alignItems:"flex-start"
                
            }}>Programs</Text>
            <Text style={{
                marginTop: 10,
                 fontWeight: 'bold',
                fontSize: 20,
                color: 'grey',
                alignItems:"flex-start"
                
            }}>View all</Text>
            

            </View>
            <Box style={styles.programsCard}>
            <LevelVerticalContents />
          </Box>
        </View>


      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
  top: {
    flex: 1,
    alignContent: "center",
  },
  imageBanner: {
    width: 200,
    height: 2000,
  },
  mid: {
    flex: 1,
  },
  imagetop: {
    width: "100%",
    height: 200,
    borderRadius: 20,

  },
  container1: {
    flex: 1,
    backgroundColor: 'white',
    padding:10,
    paddingBottom: 30
   
  },
});
