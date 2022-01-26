import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Apollo Client
import { useQuery } from "@apollo/client";
import { GET_TRANSACTION_TOKEN } from "../../queries";

// Native Base
import {
  Box,
  Image,
  Text,
  ScrollView,
  useToast,
  Button,
  Heading,
} from "native-base";

// Components
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function Subscribtion({ navigation, route }) {
  const toast = useToast();
  const [accessToken, setAccessToken] = useState("");
  const { error, data } = useQuery(GET_TRANSACTION_TOKEN, {
    variables: {
      accessToken,
    },
  });

  useEffect(() => {
    getStorage();
  }, []);

  // Generate Token
  console.log(data?.transactionToken.token);
  const paymentProcess = async () => {
    navigation.navigate("PaymentScreen", {
      token: data?.transactionToken.token,
    });
  };

  const getStorage = async () => {
    try {
      const value = await AsyncStorage.getItem("@access_token");
      if (value !== null) {
        setAccessToken(value);
      }
    } catch (e) {
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
        <Box width="100%" height="100%">
          <Image
            style={styles.imageBanner}
            source={{
              uri: "https://ik.imagekit.io/ebq3r9zrvle/H8/3802345_XFm0BJQiA.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1643129876500",
            }}
            alt="Alternate Text"
            // size="xl"
          />
          <Box style={styles.titleSubs}>
            <Heading>Join To Access All Features</Heading>
            <Text style={styles.textSubTitle}>
              What is the benefits for you?
            </Text>
            <Box style={styles.boxImageBenefit}>
              <Box
                style={styles.boxImageChat}
                // borderWidth="1"
                // borderColor="black"
              >
                <Image
                  style={styles.imageChat}
                  source={{
                    uri: "https://ik.imagekit.io/ebq3r9zrvle/H8/20945754_4ODUMQL_8.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1643131755606",
                  }}
                  alt="Alternate Text"
                  //   size="md"
                />
                <Text style={styles.textChat}>Consult Goals</Text>
              </Box>
              <Box
                style={styles.boxImageChat}
                // borderWidth="1"
                // borderColor="black"
              >
                <Image
                  style={styles.imageVideo}
                  source={{
                    uri: "https://ik.imagekit.io/ebq3r9zrvle/H8/flat-hand-drawn-online-sport-classes-concept-illustrated_23-2148824275_ryUMmIwPm.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1643132114973",
                  }}
                  alt="Alternate Text"
                  //   size="md"
                />
                <Text style={styles.textVideo}>Access All Exercise</Text>
              </Box>
            </Box>
            <Button color="#b9d0df" size="lg" onPress={() => paymentProcess()}>
              <Box style={styles.boxButton}>
                <Heading marginRight="2" color="white" size="md">
                  SUBSCRIBE
                </Heading>
                <MaterialCommunityIcons
                  name="cash-usd"
                  size={32}
                  color="white"
                />
              </Box>
            </Button>
            {/* <Pressable onPress={() => console.log("hitt")}>
              <MaterialCommunityIcons
                style={styles.buttonSubs}
                name="cash-usd"
                size={80}
                color="#b9d0df"
              />
            </Pressable> */}
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  top: {
    flex: 1,
  },
  imageBanner: {
    width: "100%",
    height: 320,
  },
  titleSubs: {
    alignItems: "center",
    justifyContent: "center",
  },
  textSubTitle: {
    marginTop: 10,
    fontSize: 18,
  },
  boxImageBenefit: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  boxImageChat: {
    width: 150,
    height: 150,
    marginRight: 20,
    marginLeft: 20,
  },
  imageChat: {
    width: 125,
    height: 125,
    marginLeft: 15,
  },
  textChat: {
    marginTop: -18,
    paddingLeft: 30,
    fontSize: 15,
  },
  imageVideo: {
    width: 125,
    height: 110,
    marginLeft: 15,
  },
  textVideo: {
    paddingLeft: 15,
    fontSize: 14,
  },
  buttonSubs: {
    marginTop: -20,
  },
  boxButton: {
    flexDirection: "row",
    alignItems: "center",
  },
});
