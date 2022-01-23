import React, { useState, useEffect } from 'react'
import { useMutation } from "@apollo/client";

import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
} from "native-base";

import { REGISTER } from  '../../mutations';

export default function Example({ navigation }){
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [SignUpUser, { data, loading, error}] = useMutation(REGISTER)

  const register = (e) => {
    e.preventDefault()
    console.log(fullName, email, password);
    SignUpUser({
      variables: {
        newUser: {
          fullName,
          email,
          password
        }
      }
    })
  }

  useEffect(() => {
    console.log(error);
  }, [error])

  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
            style={{ textAlign: "center" }}
          >
            Welcome
          </Heading>
          <Heading
            mt="1"
            _dark={{
              color: "warmGray.200",
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs"
            style={{ textAlign: "center" }}
          >
            Sign Up to Active8!
          </Heading>
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Full Name</FormControl.Label>
              <Input
                type="text"
                name="fullName"
                placeholder="input full name..."
                value={fullName}
                onChangeText={setFullName}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Email ID</FormControl.Label>
              <Input 
                type="text"
                name="email"
                value={email}
                placeholder="input email..."
                onChangeText={setEmail}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                type="password"
                name="password"
                value={password}
                onChangeText={setPassword}
                placeholder="input password..."
              />
            </FormControl>

            <Button
              mt="2"
              colorScheme="indigo"
              onPress={e => register(e)}
            >  
              Sign Up
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                Have an Account ?{" "}
              </Text>
              <Text
                _text={{
                  color: "indigo.500",
                  fontWeight: "medium",
                  fontSize: "sm",
                }}
                onPress={() => navigation.navigate("SignIn")}
              >
                Sign In
              </Text>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};
