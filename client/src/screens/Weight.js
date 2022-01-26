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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "native-base";

export default function Weight({ navigation, route }) {
  const [weight, setWeight] = useState(40);
  const { phoneNumber, gender, dateBirth, height } = route.params.form;
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Box
          w={{
            base: "90%",
            md: "25%",
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 20, marginBottom: 10 }}>How much do you weight?</Text>
          <FormControl>
            <Stack mx="4">
              <NumberInput value={weight} min={40} max={160} onChange={(val) => setWeight(val)}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormControl.HelperText>It cannot be smaller than 40 or bigger than 160 (kg).</FormControl.HelperText>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>Weight required.</FormControl.ErrorMessage>
            </Stack>
            <Button
              size="sm"
              variant={"solid"}
              _text={{
                color: "#1F2937",
              }}
              style={{ marginTop: 10, width: 100, height: 50, alignSelf: "center" }}
              px="3"
              onPress={() => navigation.navigate("ActivityLevel", { form: { weight, phoneNumber, gender, dateBirth, height } })}
            >
              Next
            </Button>
          </FormControl>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}
