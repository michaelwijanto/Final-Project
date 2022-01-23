import React from "react";

// React Native
import { StyleSheet, ScrollView } from "react-native";

// Native Base
import {
  Box,
  Container,
  Text,
  Heading,
  Avatar,
  HStack,
  Center,
  View,
  Button,
  Badge,
} from "native-base";
import TabBar from "../components/TabBar";
import AppBar from "../components/NavBar/NavBarProfile";

export default function Profile({ navigation }) {
  return (
    <Box style={styles.Container}>
      <AppBar />
      <ScrollView>
        <Heading>
          <HStack space={3} alignItems="center">
            <View h="100%" w="38%">
              <Avatar
                bg="purple.600"
                alignSelf="center"
                size="xl"
                source={{
                  uri: "https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg",
                }}
              >
                RB
              </Avatar>
            </View>
            <View h="100%" w="100%">
              <HStack h="50%" w="100%">
                <Text style={styles.sureName}>Arie Sastra Hadiprawira</Text>
              </HStack>
              <HStack h="50%" w="100%" mt={1}>
                <Text styles={styles.email}>ariesastrah@gmail.com</Text>
              </HStack>
              <HStack
                space={{
                  base: 2,
                  md: 4,
                }}
                mt={1}
              >
                <Badge>Male</Badge>
                <Badge colorScheme="success">Easy</Badge>
              </HStack>
            </View>
          </HStack>
        </Heading>

        <Center mt={5} width={370}>
          <Button
            onPress={() => console.log("hello world")}
            style={styles.button}
          >
            Unlock Premium Now
          </Button>
        </Center>
      </ScrollView>
      <TabBar style={styles.adjustTabBar} navigation={navigation}></TabBar>
    </Box>
  );
}

const styles = StyleSheet.create({
  Container: {
    paddingLeft: 25,
    marginTop: 100,
    flex: 1,
  },
  sureName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#1C2F3C",
    fontWeight: "bold",
  },
  adjustTabBar: {
    marginLeft: -25,
  },
});
