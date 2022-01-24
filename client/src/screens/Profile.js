import React, { useEffect } from "react";
import { StyleSheet } from "react-native";

// Native Base
import {
  Box,
  Text,
  ScrollView,
  Avatar,
  HStack,
  VStack,
  Badge,
  Button,
} from "native-base";

// Components

export default function Profile({ navigation }) {
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
        <Box width="100%">
          <HStack space={2}>
            <Avatar
              bg="purple.600"
              alignSelf="center"
              size="2xl"
              source={{
                uri: "https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg",
              }}
            >
              RB
            </Avatar>
            <VStack style={styles.section1}>
              <Text style={styles.fullName}>Arie Sastra Hadiprawira</Text>
              <Text style={styles.email}>ariesastra@mail.com</Text>
              <HStack mt={2}>
                <Badge variant="solid" mr={2}>
                  Easy
                </Badge>
                <Badge variant="subtle" colorScheme="info">
                  Six Pack
                </Badge>
              </HStack>
            </VStack>
          </HStack>
          <HStack style={styles.section2}>
            <Button w="100%" size="lg" colorScheme="gray">
              Subscribe Now
            </Button>
          </HStack>
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
    flex: 1,
    padding: 15,
  },
  appBarStyle: {
    top: 0,
    position: "absolute",
  },
  section1: {
    marginVertical: 25,
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
    marginTop: 15,
  },
  goal: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
