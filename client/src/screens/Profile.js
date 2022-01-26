import React, { Fragment, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Native Base
import { Box, Text, Avatar, HStack, VStack, Badge, Button, Center, ScrollView } from "native-base";
import { GET_USER_PROFILE } from "../../queries";
import { MaterialCommunityIcons, FontAwesome5, FontAwesome, MaterialIcons, Octicons } from "@expo/vector-icons";

import { useQuery } from "@apollo/client";
import { GET_TRANSACTION_TOKEN } from "../../queries";
import LoadingPage from "../components/LoadingPage";

export default function Profile({ navigation }) {
  const { loading, error, data } = useQuery(GET_TRANSACTION_TOKEN, {
    variables: {
      accessToken,
    },
  });

  const [subscription, setSubscription] = useState(null);
  useEffect(async () => {
    setSubscription(await AsyncStorage.getItem("@subscription"));
  }, []);

  useEffect(() => {
    getStorage();
  }, []);

  const handlePayment = (price) => {
    console.log(price);
    navigation.navigate("PaymentScreen", {
      token: data.transactionToken.token,
    });
  };

  const getStorage = async () => {
    try {
      const value = await AsyncStorage.getItem("@access_token");
      if (value !== null) {
        // value previously stored
        setAccessToken(value);
      }
    } catch (e) {
      // error reading value
      console.error(e);
    }
  };

  const [accessToken, setAccessToken] = useState(null);
  useEffect(async () => {
    setAccessToken(await AsyncStorage.getItem("@access_token"));
  }, []);
  console.log({ accessToken });
  const {
    loading: loadingProfile,
    data: profile,
    error: errorProfile,
  } = useQuery(GET_USER_PROFILE, {
    variables: {
      accessToken: accessToken,
    },
  });
  console.log({ subscription });
  console.log({ loadingProfile, profile, errorProfile });
  if (loadingProfile) return <LoadingPage></LoadingPage>;
  if (errorProfile) return <Text>Error Fetching User Profile</Text>;
  return (
    <Box
      style={styles.container}
      _dark={{
        borderColor: "coolGray.900",
        backgroundColor: "#1C2F3C",
      }}
      _light={{ backgroundColor: "#F5F8FA" }}
    >
      <Box style={styles.top}>
        <HStack space={2}>
          <Avatar
            bg="purple.600"
            alignSelf="center"
            size="2xl"
            source={{
              uri: "https://divedigital.id/wp-content/uploads/2021/10/1-min.png",
            }}
          >
            RB
          </Avatar>
          <VStack style={styles.section1}>
            <Text style={styles.fullName}>{profile.getUserProfile.UserProfile.User.fullName}</Text>
            <Text style={styles.email}>{profile.getUserProfile.UserProfile.User.email}</Text>
            <HStack mt={2}>
              <Badge variant="solid" mr={2}>
                {profile.getUserProfile.UserProfile.Level.name}
              </Badge>
              <Badge variant="subtle" colorScheme="info">
                {profile.getUserProfile.UserProfile.goals}
              </Badge>
            </HStack>
          </VStack>
        </HStack>
      </Box>
      <ScrollView style={styles.section2}>
        <Center>
          {subscription === "false" ? (
            <Fragment>
              <Text style={styles.price}>Rp. 199,000</Text>
              <Button w="100%" size="lg" colorScheme="lightBlue" onPress={() => handlePayment()}>
                Subscribe Now
              </Button>
            </Fragment>
          ) : (
            <Fragment>
              <Text style={styles.price}>
                PRO <FontAwesome5 name="crown" size={35} color="#FFE162" />
              </Text>
              <Button
                w="100%"
                size="lg"
                colorScheme="gray"
                // onPress={() => handlePayment()}
              >
                Unsubscribe
              </Button>
            </Fragment>
          )}
        </Center>
        <Box style={styles.boxPrograms}>
          <Box style={styles.textBoxPrograms}>
            <Text style={styles.textPrograms}>YOUR STATS</Text>
          </Box>
          <Box style={styles.programsCard}>
            <Box style={styles.programsCardFlex}>
              <Text style={styles.textViewAll}>
                <FontAwesome name="dashboard" size={18} color="blue" /> BMI
              </Text>
              <Text style={styles.textViewAll}>{profile.getUserProfile.UserProfile.bmi}</Text>
            </Box>
            <Box style={styles.programsCardFlex}>
              <Text style={styles.textViewAll}>
                <FontAwesome5 name="heartbeat" size={18} color="#DA1212" /> HEALTH
              </Text>
              <Text style={styles.textViewAll}>{profile.getUserProfile.UserProfile.health}</Text>
            </Box>
            <Box style={styles.programsCardFlex}>
              <Text style={styles.textViewAll}>
                <FontAwesome name="bar-chart-o" size={18} color="blue" /> HEALTHY BMI RANGE
              </Text>
              <Text style={styles.textViewAll}>{profile.getUserProfile.UserProfile.healthy_bmi_range}</Text>
            </Box>
          </Box>
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
    marginTop: 25,
    marginHorizontal: 25,
    justifyContent: "center",
  },
  appBarStyle: {
    top: 0,
    position: "absolute",
  },
  section1: {
    marginTop: 25,
    marginLeft: 5,
  },
  fullName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  email: {
    fontSize: 16,
    marginTop: 5,
  },
  section2: {
    height: 450,
    marginHorizontal: 25,
    marginTop: 20,
    flex: 1,
  },
  center: {
    marginVertical: 5,
    alignItems: "center",
  },
  price: {
    height: 100,
    fontSize: 35,
    fontWeight: "bold",
    padding: 35,
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
    marginLeft: 98,
    fontSize: 20,
    color: "#1C2F3C",
    fontFamily: "Roboto",
  },
  textViewAll: {
    paddingTop: 12,
    paddingRight: 15,
    color: "gray",
  },
  programsCard: {
    paddingLeft: 18,
  },
  programsCardFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
