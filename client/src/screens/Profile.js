import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
// import { StripeProvider } from "@stripe/stripe-react-native";
// const SERVER_URL_METRO = "http://192.168.1.2:3000";

// Native Base
import {
  Box,
  Text,
  Avatar,
  HStack,
  VStack,
  Badge,
  Button,
  Center,
  ScrollView
} from "native-base";

export default function Profile({ navigation }) {
<<<<<<< HEAD
  // const buy = async () => {
  //   try {
  //     const response = await fetch(
  //       `${SERVER_URL_METRO}/api/user-profiles/payment-sheet`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           access_token:
  //             "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmRyZUBtYWlsLmNvbSIsImZ1bGxOYW1lIjoiQW5kcmUgR3JlZ29yaXVzIiwicm9sZSI6ImFkbWluIiwiaXNSZWdpc3RlciI6ImZhbHNlIiwiaWF0IjoxNjQzMDI5NzU3fQ.G9WDVtvwERILAxAqHRFH1JAsjgJa-Hmdv3X0Bh87rZ4",
  //         },
  //         body: JSON.stringify({
  //           subscription: "Subscribe",
  //         }),
  //       }
  //     );

  //     const data = await response.json();
  //     if (!response.ok) {
  //       return Alert.alert(data.message);
  //     }
  //     const initSheet = await stripe.initPaymentSheet({
  //       paymentIntentClientSecret: data.clientSecret,
  //       merchantDisplayName: "Bitcoin Buy",
  //     });
  //     if (initSheet.error) {
  //       // console.error(initSheet.error);
  //       return Alert.alert(initSheet.error.message);
  //     }
  //     const presentSheet = await stripe.presentPaymentSheet({
  //       clientSecret: data.clientSecret,
  //     });
  //     if (presentSheet.error) {
  //       // console.error(presentSheet.error);
  //       return Alert.alert(presentSheet.error.message);
  //     }
  //     Alert.alert("Payment successfully! Thank you for the purchase.");
  //   } catch (err) {
  //     Alert.alert("Payment failed!");
  //   }
  // };

  const [loading, setLoading] = useState(false);
=======

  const handlePayment = (price) => {
    console.log(+price);
  };
  
>>>>>>> 874efa1cd5044fbb4db10ac82db9b7eeb4bc8762
  return (
    <Box
      style={styles.container}
      _dark={{
        borderColor: "coolGray.900",
        backgroundColor: "#1C2F3C",
      }}
      _light={{ backgroundColor: "#F5F8FA" }}
    >
<<<<<<< HEAD
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
            {/* <StripeProvider publishableKey="pk_test_51KLRtSLDIVpBbR4d4RAxZ6ungNO8tmYjrTA4WHdRRB4PQWZbpnAvWGxRUFLZMuijWBKhV2kM1Dynol0krncT2aej00DAiLkJfO"> */}
              <Button onPress={buy} w="100%" size="lg" colorScheme="gray">
                Subscribe Now
              </Button>
            {/* </StripeProvider> */}
          </HStack>
        </Box>
=======
      <Box style={styles.top}>
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
      </Box>
      <ScrollView style={styles.section2}>
        <Center>
          <Text style={styles.price}>
            Rp. 199,000
          </Text>
          <Button 
            w="100%"
            size="lg"
            colorScheme="gray"
            onPress={() => handlePayment(199000)}
          >
            Subscribe Now
          </Button>
        </Center>
>>>>>>> 874efa1cd5044fbb4db10ac82db9b7eeb4bc8762
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
    justifyContent:'center'
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
    flex: 1
  },
  center: {
    marginVertical: 5,
    alignItems: 'center',
  },
  price: {
    height: 100,
    fontSize: 35,
    fontWeight: "bold",
    padding: 35
  },
});
