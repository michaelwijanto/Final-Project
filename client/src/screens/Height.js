import React, { useState } from "react";
import {
  FormControl,
  Button,
  Stack,
  WarningOutlineIcon,
  Box,
  Center,
  NativeBaseProvider,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "native-base";

export default function Height({ navigation, route }) {
  const [height, setHeight] = useState(130);
  const { phoneNumber, gender, dateBirth } = route.params.form;

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
            How tall are you?
          </Text>
          <FormControl>
            <Stack mx="4">
              <NumberInput
                value={height}
                min={130}
                max={230}
                step={5}
                onChange={(val) => {
                  if (isNaN(val)) setHeight(0);
                  else {
                    setHeight(val);
                  }
                }}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormControl.HelperText>
                It cannot be smaller than 130 or bigger than 230 (cm).
              </FormControl.HelperText>
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Height required.
              </FormControl.ErrorMessage>
            </Stack>
            <Button
              size="sm"
              variant={"solid"}
              _text={{
                color: "#1F2937",
              }}
              style={{
                marginTop: 10,
                width: 100,
                height: 50,
                alignSelf: "center",
              }}
              px="3"
              onPress={() =>
                navigation.navigate("Weight", {
                  form: { height, phoneNumber, gender, dateBirth },
                })
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
