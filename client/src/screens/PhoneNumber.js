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
  Heading
} from "native-base";
import { Entypo } from '@expo/vector-icons'; 

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
            {phoneNumber.length >= 10 ? <Button
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
              <Heading color={"white"}>Next</Heading>
            </Button> : 
            <Button
            size="sm"
            variant={"solid"}
            _text={{
              color: "grey",
            }}
            colorScheme="gray"
            // size="sm"
            style={{ marginTop: 10, width: 100, height: 50, alignSelf: "center"}}
            px="3"
          >
            <Entypo name="block" size={24} color="black" />
          </Button>
            }
          </FormControl>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}
