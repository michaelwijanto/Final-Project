import { useState } from "react";
import {
  FormControl,
  Button,
  Stack,
  CheckIcon,
  WarningOutlineIcon,
  Box,
  Center,
  NativeBaseProvider,
  Select,
  Text,
} from "native-base";

export default function ActivityLevel({ navigation, route }) {
  const [activityLevel, setActivityLevel] = useState(1);
  const { phoneNumber, gender, dateBirth, height, weight } = route.params.form;

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
            How often do you exercise?
          </Text>
          <FormControl>
            <Stack mx="4">
              <Select
                onValueChange={(itemValue) => setActivityLevel(itemValue)}
                minWidth="200"
                accessibilityLabel="Choose Service"
                placeholder="Choose activity level"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size={5} />,
                }}
              >
                <Select.Item label="BMR" value={1} key={1} />
                <Select.Item
                  label="Sedentary: little or no exercise"
                  value={2}
                  key={2}
                />
                <Select.Item
                  label="Exercise 1-3 times/week"
                  value={3}
                  key={3}
                />
                <Select.Item
                  label="Exercise 4-5 times/week"
                  value={4}
                  key={4}
                />
                <Select.Item
                  label="Daily exercise or intense exercise 3-4 times/week"
                  value={5}
                  key={5}
                />
                <Select.Item
                  label="Intense exercise 6-7 times/week"
                  value={6}
                  key={6}
                />
                <Select.Item
                  label="Very intense exercise daily, or physical job"
                  value={7}
                  key={7}
                />
              </Select>
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Activity Level required.
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
                navigation.navigate("Goals", {
                  form: {
                    activityLevel,
                    phoneNumber,
                    gender,
                    dateBirth,
                    height,
                    weight,
                  },
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
