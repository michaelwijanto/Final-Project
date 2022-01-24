import {
  Button,
  Stack,
  Box,
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
          <Text style={{ textAlign: "center", fontSize: 20, marginBottom: 10 }}>
          before entering Active8, we need some of your data
          </Text>
          <Button
              size="sm"
              variant={"solid"}
              _text={{
                color: "#1F2937",
              }}
              style={{ marginTop: 10, width: 100, height: 50, alignSelf: "center"}}
              px="3"
              onPress={() =>
                navigation.navigate("PhoneNumber")
              }
            >
              Next
            </Button>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}
