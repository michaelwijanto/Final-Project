import React from "react";

import { StyleSheet, View } from "react-native";
import { Container, ListItem, List, Text, Content, Box } from "native-base";

import { useQuery } from "@apollo/client";
import { GET_CONTENT_DETAIL } from "../../queries";
import YoutubePlayer, { YoutubeIframeRef } from "react-native-youtube-iframe";
import { Ionicons } from "@expo/vector-icons";
import AppBar from "./NavBar/NavBarContentDetail";

export default function ContentDetail({ navigation, route }) {
  const { id } = route.params;
  const [selected, setSelected] = React.useState(1);
  const { loading, error, data } = useQuery(GET_CONTENT_DETAIL, {
    variables: {
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhcmllc2FzdHJhQG1haWwuY29tIiwiZnVsbE5hbWUiOiJBcmllIFNhc3RyYSIsInJvbGUiOiJhZG1pbiIsImlzUmVnaXN0ZXIiOiJmYWxzZSIsImlhdCI6MTY0MjkyMzU0NH0.7SQe4pqsA5JqGjbxfyF0y7Rf9t6dgx_VrxNbh76igxQ",
      contentId: id,
    },
  });
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error...</Text>;

  return (
    <View>
      <YoutubePlayer height={250} videoId={data.getContentById.youtubeUrl} />
      <View>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{data.getContentById.title}</Text>
        </View>
        <Box style={styles.containerLike}>
          <Text style={styles.like}>
            <Ionicons name="heart-outline" size={25} color="red" />
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
    paddingRight: 15,
  },
  like: {
    fontSize: 18,
    fontWeight: "bold",
    color: "grey",
    paddingRight: 5,
  },
  textLike: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: -2,
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
