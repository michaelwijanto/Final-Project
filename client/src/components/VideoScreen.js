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
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
// import Video  from "react-native-video";

import { Video } from 'expo-av';
import YoutubePlayer, {YoutubeIframeRef} from "react-native-youtube-iframe";
import { Ionicons } from '@expo/vector-icons'



export default function VideoScreen({ navigation }) {
  const [selected, setSelected] = React.useState(1);
  const {width,height} = Dimensions.get('screen')
  return (
    <View>
      <YoutubePlayer
        height={250}
        videoId={'QdgnjuolTRc'}
      />
      <View>
        <View style={styles.containerTitle} >

        <Text style={styles.title}>
         Title
        </Text>
        <Text style={styles.like}>
        <Ionicons name="heart-outline" size={24} color="black" />
        </Text>
        </View>
        <Text style={styles.titleDescription}>Description</Text>

        <Text style={styles.description}>Isi description</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainPlayerView:{
    flex:1,
    alignItems:'center'
  },
  containerTitle:{
    flexDirection:"row",
    justifyContent:"space-between",
    padding:3
  },
  title:{
    paddingTop:10,
    fontSize:30,
    fontWeight:'bold',
    color:'grey',
    padding: 10,
  },
  like:{
    fontSize:20,
    fontWeight:'bold',
    color:'grey',
    padding: 10,
  },
  video:{
    width:'100%',
    height:'100%'
  },
  titleDescription:{
    marginTop: 10,
     fontWeight: 'bold',
    fontSize: 20,
    color:"black",
    padding: 10,
},
  description:{
    marginTop: 5,
    fontSize: 15,
    color: 'grey',
    textAlign: 'justify',
    padding: 10,
  }
});
