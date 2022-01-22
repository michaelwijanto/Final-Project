import React from "react"
import {Text} from "react-native"
import {
  FormControl,
  Input,
  Stack,
  CheckIcon,
  WarningOutlineIcon,
  Box,
  Center,
  NativeBaseProvider,
  Select
} from "native-base"
export const Example = () => {
  return (
    <Box
      w={{
        base: "90%",
        md: "25%",
      }}
    >
      <FormControl isRequired>
        <Stack mx="4">
          <FormControl.Label>Gender</FormControl.Label>
          <Select
          minWidth="200"
          accessibilityLabel="Choose Service"
          placeholder="Choose Service"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size={5} />
          }}
        >
          <Select.Item label="Male" value="male" key={1}/>
          <Select.Item label="Female" value="female" key={2}/>
        </Select>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Gender required.
          </FormControl.ErrorMessage>
        </Stack>

        <Stack mx="4">
          <FormControl.Label>Age</FormControl.Label>
          <Input type="number" placeholder="Input your age..." />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Age required
          </FormControl.ErrorMessage>
        </Stack>

        <Stack mx="4">
          <FormControl.Label>Height</FormControl.Label>
          <Input type="number" placeholder="Input your gender..." />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Gender required.
          </FormControl.ErrorMessage>
        </Stack>

        <Stack mx="4">
          <FormControl.Label>Weight</FormControl.Label>
          <Input type="number" placeholder="Input your weight..." />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Weight required.
          </FormControl.ErrorMessage>
        </Stack>

        <Stack mx="4">
          <FormControl.Label>Activity Level</FormControl.Label>
          <Select
          minWidth="200"
          accessibilityLabel="Choose Service"
          placeholder="Choose Service"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size={5} />,
          }}
        >
          <Select.Item label="BMR" value={1} key={1}/>
          <Select.Item label="Sedentary: little or no exercise" value={2} key={2}/>
          <Select.Item label="Exercise 1-3 times/week" value={3} key={3}/>
          <Select.Item label="Exercise 4-5 times/week" value={4} key={4}/>
          <Select.Item label="Daily exercise or intense exercise 3-4 times/week" value={5} key={5}/>
          <Select.Item label="Intense exercise 6-7 times/week" value={6} key={6}/>
          <Select.Item label="Very intense exercise daily, or physical job" value={7} key={7}/>
        </Select>
          <FormControl.HelperText>
              How much u train a week
            </FormControl.HelperText>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Activity Level required.
          </FormControl.ErrorMessage>
        </Stack>

        <Stack mx="4">
          <FormControl.Label>Goals</FormControl.Label>
          <Select
          minWidth="200"
          accessibilityLabel="Choose Service"
          placeholder="Choose Service"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size={5} />,
          }}
        >
          <Select.Item label="Sedentary: little or no exercise" value={1} key={1}/>
          <Select.Item label="Exercise 1-3 times/week" value={2} key={2}/>
          <Select.Item label="Exercise 4-5 times/week" value={3} key={3}/>
          <Select.Item label="Daily exercise or intense exercise 3-4 times/week" value={4} key={4}/>
          <Select.Item label="Intense exercise 6-7 times/week" value={5} key={5}/>
          <Select.Item label="Very intense exercise daily, or physical job" value={6} key={6}/>
        </Select>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Goals required.
          </FormControl.ErrorMessage>
        </Stack>

      </FormControl>
    </Box>
  )
}

export default function Macro(){
  return (
    // <Text>Tes Macro</Text>
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  )
}
