import React, { useState, useEffect } from "react";

import { StyleSheet, View } from "react-native";
import { IconButton, Icon, Text, Box, Pressable } from "native-base";

import { useQuery } from "@apollo/client";
import { GET_CONTENT_DETAIL } from "../../queries";
import YoutubePlayer, { YoutubeIframeRef } from "react-native-youtube-iframe";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
// import Toggle from "react-native-toggle-element";

export default function ContentDetail({ navigation, route }) {
  const { id } = route.params;
  const [selected, setSelected] = useState(0);
  // const [toggleValue, setToggleValue] = useState(false);

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  const { loading, error, data } = useQuery(GET_CONTENT_DETAIL, {
    variables: {
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhcmllc2FzdHJhQG1haWwuY29tIiwiZnVsbE5hbWUiOiJBcmllIFNhc3RyYSIsInJvbGUiOiJhZG1pbiIsImlzUmVnaXN0ZXIiOiJmYWxzZSIsImlhdCI6MTY0MjkyMzU0NH0.7SQe4pqsA5JqGjbxfyF0y7Rf9t6dgx_VrxNbh76igxQ",
      contentId: id,
    },
  });
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error...</Text>;

  const handleOnPress = (e) => {
    e.preventDefault();
    if (selected == 0) {
      setSelected(1);
    } else {
      setSelected(0);
    }
  };

  return (
    <View>
      <YoutubePlayer height={250} videoId={data.getContentById.youtubeUrl} />
      <View>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{data.getContentById.title}</Text>
        </View>
        <Box style={styles.containerLike}>
          <Text style={styles.like}>
            <Pressable onPress={(e) => handleOnPress(e)}>
              {selected ? (
                <Ionicons
                  style={styles.buttonLike}
                  name="heart"
                  size={26}
                  color="red"
                />
              ) : (
                <Ionicons
                  style={styles.buttonLike}
                  name="heart-outline"
                  size={26}
                  color="red"
                />
              )}
            </Pressable>
          </Text>
          <Text style={styles.textLike}>{data.getContentById.likes}</Text>
        </Box>
        <Text style={styles.titleDescription}>Description</Text>

        <Text style={styles.description}>
          {data.getContentById.description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainPlayerView: {
    flex: 1,
    alignItems: "center",
  },
  containerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10,
  },
  title: {
    paddingTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "grey",
    padding: 10,
    textAlign: "justify",
  },
  containerLike: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: 15,
    // bottom: 100,
    // right: 20,
    // position: "absolute",
  },
  like: {
    fontSize: 18,
    fontWeight: "bold",
    color: "grey",
    paddingRight: 5,
    // bottom: -30,
    // right: 45,
    // position: "absolute",
  },
  buttonLike: {
    // marginTop: 30,
    // bottom: 1,
    // right: 7,
    // position: "absolute",
  },
  textLike: {
    fontSize: 20,
    // fontWeight: "bold",
    marginTop: 0,
    // bottom: -17,
    // right: 10,
    // position: "absolute",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  titleDescription: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    padding: 10,
    marginBottom: -12,
  },
  description: {
    marginTop: 5,
    fontSize: 15,
    color: "grey",
    textAlign: "justify",
    padding: 10,
    marginRight: 5,
  },
});
