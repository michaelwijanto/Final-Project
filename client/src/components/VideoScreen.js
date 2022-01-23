import React from "react";

import {
  StyleSheet,
  View,
  Pressable,
  FlatList,
  ScrollView,
} from "react-native";
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
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';




export default function VideoScreen({ navigation }) {
  const [selected, setSelected] = React.useState(1);

  return (
    <View style={styles.mainPlayerView}>
      <View style={{height:height/3,backgroundColor:'grey',width:'100%'}}>
        <VideoPlayer seekColor={'blue'} controls={true} source={{uri: "https://www.youtube.com/watch?v=mpSmBuco6I0"}} style={styles.video} />
      </View>
      <Text style={styles.title}>SENAM KEBUGARAN JAS MANI</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainPlayerView:{
    flex:1,
    alignItems:'center'
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:20,
    color:'grey'
  },
  video:{
    width:'100%',
    height:'100%'
  }
});
