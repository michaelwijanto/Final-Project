import React, { useState, useEffect } from "react";

import { StyleSheet, View, ScrollView } from "react-native";
import {
  IconButton,
  Icon,
  Text,
  Box,
  Pressable,
  Button,
  Badge,
} from "native-base";

import { useQuery, useMutation } from "@apollo/client";
import { GET_CONTENT_DETAIL, GET_USER_CONTENT_ID } from "../../queries";
import { POST_USER_CONTENT, UPDATE_STATUS_USER_CONTENT } from "../../mutations";
import YoutubePlayer, { YoutubeIframeRef } from "react-native-youtube-iframe";

import { Ionicons, Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
// import Toggle from "react-native-toggle-element";

export default function ContentDetail({ navigation, route }) {
  const { id } = route.params;
  const [selected, setSelected] = useState(0);
  const [flaggingData, setFlaggingData] = useState(false);
  // const [toggleValue, setToggleValue] = useState(false);

  const [
    PostUserContent,
    {
      data: dataPostUserContent,
      loading: loadingPostUserContent,
      error: errorPostUserContent,
    },
  ] = useMutation(POST_USER_CONTENT, {
    refetchQueries: [GET_USER_CONTENT_ID],
  });

  const [
    PutUserContent,
    {
      data: dataPutUserContent,
      loading: loadingPutUserContent,
      error: errorPutUserContent,
    },
  ] = useMutation(UPDATE_STATUS_USER_CONTENT, {
    refetchQueries: [GET_USER_CONTENT_ID],
  });

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
  const {
    loading: loadingContent,
    error: errorContent,
    data: ContentData,
  } = useQuery(GET_USER_CONTENT_ID, {
    variables: {
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhcmllc2FzdHJhQG1haWwuY29tIiwiZnVsbE5hbWUiOiJBcmllIFNhc3RyYSIsInJvbGUiOiJhZG1pbiIsImlzUmVnaXN0ZXIiOiJmYWxzZSIsImlhdCI6MTY0MjkyMzU0NH0.7SQe4pqsA5JqGjbxfyF0y7Rf9t6dgx_VrxNbh76igxQ",
      contentId: id,
    },
  });

  let status;

  useEffect(() => {
    if (!ContentData) {
      setFlaggingData(true);
      if (!flaggingData) {
        console.log("masuk");
        PostUserContent({
          variables: {
            accessToken:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhcmllc2FzdHJhQG1haWwuY29tIiwiZnVsbE5hbWUiOiJBcmllIFNhc3RyYSIsInJvbGUiOiJhZG1pbiIsImlzUmVnaXN0ZXIiOiJmYWxzZSIsImlhdCI6MTY0MjkyMzU0NH0.7SQe4pqsA5JqGjbxfyF0y7Rf9t6dgx_VrxNbh76igxQ",
            contentId: id,
          },
        });
        status = "started";
      }
    }
  }, [ContentData]);
  status = "started";

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error...</Text>;

  const handleFinish = async (e) => {
    e.preventDefault();
    // console.log(ContentData.getUserContentById.status);
    if (ContentData.getUserContentById.status == "started") {
      const putStatusContent = await PutUserContent({
        variables: {
          accessToken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhcmllc2FzdHJhQG1haWwuY29tIiwiZnVsbE5hbWUiOiJBcmllIFNhc3RyYSIsInJvbGUiOiJhZG1pbiIsImlzUmVnaXN0ZXIiOiJmYWxzZSIsImlhdCI6MTY0MjkyMzU0NH0.7SQe4pqsA5JqGjbxfyF0y7Rf9t6dgx_VrxNbh76igxQ",
          contentId: id,
        },
      });
      status = ContentData.getUserContentById.status;
    }
  };

  if (ContentData.getUserContentById) {
    console.log("masukk");
    status = ContentData.getUserContentById.status;
  }

  const handleLike = (e) => {
    e.preventDefault();
    if (selected == 0) {
      setSelected(1);
    } else {
      setSelected(0);
    }
  };

  return (
    <Box height="100%">
      <ScrollView>
        <View>
          <YoutubePlayer
            height={250}
            videoId={data.getContentById.youtubeUrl}
          />
          <View>
            {status == "finish" ? (
              <Badge
                marginLeft="3"
                space={{
                  base: 2,
                  md: 4,
                }}
                mx={{
                  base: "auto",
                  md: 0,
                }}
                colorScheme="success"
              >
                Finish
              </Badge>
            ) : null}
            <View style={styles.containerTitle}>
              <Text style={styles.title}>{data.getContentById.title}</Text>
            </View>
            <Box style={styles.containerLike}>
              <Text style={styles.like}>
                <Pressable onPress={(e) => handleLike(e)}>
                  {selected ? (
                    <Ionicons name="heart" size={26} color="red" />
                  ) : (
                    <Ionicons name="heart-outline" size={26} color="red" />
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
      </ScrollView>
      <Box style={styles.boxButtonFinish}>
        {status == "started" ? (
          <Button style={styles.buttonFinish} onPress={(e) => handleFinish(e)}>
            Finish
          </Button>
        ) : null}
      </Box>
    </Box>
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
  boxButtonFinish: {
    position: "absolute",
    bottom: 15,
    alignSelf: "center",
  },
  buttonFinish: {
    marginTop: 10,
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
