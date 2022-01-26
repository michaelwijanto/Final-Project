import {
  Button,
  Box,
  Heading,
  Center,
  NativeBaseProvider,
  Text,
} from "native-base";

export default function LandingPage({ navigation }) {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Box
          w={{
            base: "90%",
            md: "25%",
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 24, marginBottom: 15, lineHeight: 28 }}>
            You're one step closer to achieve your goals!
          </Text>
          <Text style={{ textAlign: "center", fontSize: 18, marginBottom: 10}}>
            But first we need to get your data!
          </Text>
          <Button
            size="sm"
            variant={"solid"}
            _text={{
              color: "white",
            }}
            style={{
              marginTop: 10,
              width: 100,
              height: 50,
              alignSelf: "center",
            }}
            px="3"
            onPress={() => navigation.navigate("PhoneNumber")}
          >
            <Heading color={"white"}>Next</Heading>
          </Button>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}
