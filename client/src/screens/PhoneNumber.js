import { useState } from "react";
import {
  FormControl,
  Button,
  Stack,
  WarningOutlineIcon,
  Box,
  Center,
  NativeBaseProvider,
  Text,
  Input,
} from "native-base";

export default function PhoneNumber({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("");
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
            Input your phone number!
          </Text>
          <FormControl>
            <Stack mx="4">
              <Input
                defaultValue={phoneNumber}
                isRequired={true}
                type="text"
                keyboardType="numeric"
                name="phoneNumber"
                placeholder="input phone number..."
                onChangeText={(value) => setPhoneNumber(value)}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Phone Number required.
              </FormControl.ErrorMessage>
            </Stack>
            <Button
              size="sm"
              variant={"solid"}
              _text={{
                color: "#1F2937",
              }}
              // size="sm"
              style={{
                marginTop: 10,
                width: 100,
                height: 50,
                alignSelf: "center",
              }}
              px="3"
              onPress={() =>
                navigation.navigate("Gender", { form: { phoneNumber } })
              }
            >
              Next
            </Button>
          </FormControl>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}
