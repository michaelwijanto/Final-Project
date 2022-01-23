import React from "react";

import {
  StyleSheet,
  View,
  Pressable,
  FlatList,
  ScrollView,
  Dimensions
} from "react-native";
import {
  Container,
  ListItem,
  List,
  Text,
  Content,
  
} from "native-base";
import SwitchMode from "../components/SwitchMode";
import AppBar from "../components/AppBar";
import TabBar from "../components/TabBar";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
// import Video  from "react-native-video";

import { Video } from 'expo-av';




export default function VideoScreen({ navigation }) {
  const [selected, setSelected] = React.useState(1);
  const {width,height} = Dimensions.get('screen')
  return (
    // <Container>
    //   <VideoPlayer 
    //   controls
    //   source={{uri:'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
    //   style={{flex: 1}}
    //   />
    // </Container>
    <View style={styles.mainPlayerView}>
      <View>
               <Video
               
                source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping
                controls
                style={{ width: 300, height: 300 }}
                /> 
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
