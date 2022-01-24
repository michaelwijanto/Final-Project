import React from "react";
import { useMutation } from "@apollo/client";
import { POST_MACRO } from "../../mutations/index";
import { useState, useEffect } from "react";
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
  useToast,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  ScrollView,
} from "native-base";

export const Example = ({ navigation }) => {
  const toast = useToast();
  const [postMacro, { data, loading, error }] = useMutation(POST_MACRO);
  const [formMacro, setFormMacro] = useState({
    gender: "",
    age: 0,
    height: 0,
    weight: 0,
    activitylevel: 0,
    goal: "",
  });

  useEffect(() => {
    console.log(formMacro);
  }, [formMacro]);

  const onSubmitMacro = async (e) => {
    try {
      e.preventDefault();
      console.log("SUBMIT");
      console.log({ formMacro });
      const sendMacro = await postMacro({
        variables: {
          age: formMacro.age,
          gender: formMacro.gender,
          height: formMacro.height,
          weight: formMacro.weight,
          activitylevel: formMacro.activitylevel,
          goal: formMacro.goal,
        },
      });
      console.log(sendMacro);
      toast.show({
        title: "Your daily calorie needs",
        status: "success",
        description: `${sendMacro.data.postMacro.calorie} calories`,
        placement: "top",
      });
    } catch (err) {
      console.log({ err });
    }
  };
  return (
    <Box
    w={{
      base: "90%",
      md: "25%",
    }}
    >
      <ScrollView>
        <FormControl isRequired onSadmubmit={onSubmitMacro}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 22,
              marginBottom: 15,
              marginTop: 15,
            }}
          >
            Calculate your daily food needs
          </Text>
          <Stack mx="4">
            <FormControl.Label>Gender</FormControl.Label>
            <Select
              onValueChange={(itemValue) =>
                setFormMacro({ ...formMacro, gender: itemValue })
              }
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Choose Service"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size={5} />,
              }}
            >
              <Select.Item label="Male" value="male" key={1} />
              <Select.Item label="Female" value="female" key={2} />
            </Select>
            <FormControl.HelperText marginBottom="5">
              Select your gender.
            </FormControl.HelperText>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Gender required.
            </FormControl.ErrorMessage>
          </Stack>
          <Stack mx="4">
            <FormControl.Label>Age</FormControl.Label>
            <NumberInput
              min={0}
              max={80}
              onChange={(val) => setFormMacro({ ...formMacro, age: val })}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormControl.HelperText marginBottom="5">
              It cannot be negative or bigger than 80.
            </FormControl.HelperText>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Age required
            </FormControl.ErrorMessage>
          </Stack>

          <Stack mx="4">
            <FormControl.Label>Height</FormControl.Label>
            <NumberInput
              min={130}
              max={230}
              onChange={(val) => setFormMacro({ ...formMacro, height: val })}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormControl.HelperText marginBottom="5">
              It cannot be smaller than 130 or bigger than 230.
            </FormControl.HelperText>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Height required.
            </FormControl.ErrorMessage>
          </Stack>

          <Stack mx="4">
            <FormControl.Label>Weight</FormControl.Label>
            <NumberInput
              min={40}
              max={160}
              onChange={(val) => setFormMacro({ ...formMacro, weight: val })}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormControl.HelperText marginBottom="5">
              It cannot be smaller than 40 or bigger than 160.
            </FormControl.HelperText>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Weight required.
            </FormControl.ErrorMessage>
          </Stack>
          <Stack mx="4">
            <FormControl.Label>Activity Level</FormControl.Label>
            <Select
              onValueChange={(itemValue) =>
                setFormMacro({ ...formMacro, activitylevel: itemValue })
              }
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Choose Intensity"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size={5} />,
              }}
            >
              <Select.Item label="BMR" value={"maintain"} key={1} />
              <Select.Item
                label="Sedentary: little or no exercise"
                value={"mildlose"}
                key={2}
              />
              <Select.Item label="Exercise 1-3 times/week" value={"weightlose"} key={3} />
              <Select.Item label="Exercise 4-5 times/week" value={"mildgain"} key={4} />
              <Select.Item
                label="Daily exercise or intense exercise 3-4 times/week"
                value={"weightgain"}
                key={5}
              />
              <Select.Item
                label="Intense exercise 6-7 times/week"
                value={"extremegain"}
                key={6}
              />
            </Select>
            <FormControl.HelperText marginBottom="5">
              How much u train a week
            </FormControl.HelperText>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Activity Level required.
            </FormControl.ErrorMessage>
          </Stack>

          <Stack mx="4">
            <FormControl.Label>Goal</FormControl.Label>
            <Select
              onValueChange={(itemValue) =>
                setFormMacro({ ...formMacro, goal: itemValue })
              }
              minWidth="200"
              accessibilityLabel="What is your goal?"
              placeholder="What is your goal?"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size={5} />,
              }}
            >
              <Select.Item label="maintain weight" value={1} key="maintain" />
              <Select.Item label="Mild weight loss" value="mildlose" key={2} />
              <Select.Item label="Weight loss" value="weightlose" key={3} />
              <Select.Item
                label="Extreme weight loss"
                value="extremelose"
                key={4}
              />
              <Select.Item label="Mild weight gain" value="mildgain" key={5} />
              <Select.Item label="Weight gain" value="weightgain" key={6} />
              <Select.Item
                label="extremegain"
                value="Extreme weight gain"
                key={7}
              />
            </Select>
            <FormControl.HelperText>Select your goal.</FormControl.HelperText>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Goals required.
            </FormControl.ErrorMessage>
          </Stack>
          <Button
            size="sm"
            variant={"solid"}
            _text={{
              color: "#1F2937",
            }}
            style={{ marginTop: 10 }}
            px="3"
            onPress={onSubmitMacro}
            marginBottom="5"
          >
            Submit
          </Button>
        </FormControl>
      </ScrollView>
    </Box>
  );
};

export default function Macro({ navigation }) {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example navigation={navigation} />
      </Center>
    </NativeBaseProvider>
  );
}
