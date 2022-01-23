import { useState, useEffect } from 'react'
import { useMutation } from "@apollo/client";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Native Base
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
  Alert
} from "native-base";

// Component
import { SIGN_IN } from  '../../mutations';

export default function SignIn({ 
  navigation,
  route
}) {
  const [signInUser, { data, loading, error}] = useMutation(SIGN_IN)
  const [signIn, setSignIn] = useState({
    email: '',
    password: ''
  })
  const [newError, setNewError] = useState({
    status: 'error',
    message: null
  })
  const [isLogin, setIsLogin] = useState(false)

  const submitLogin = (e) => {
    e.preventDefault()
    signInUser({
      variables: {
        email: signIn.email,
        password: signIn.password
      }
    })
    .then(res => {
      if (res.data.signInUser.error) {
        const errors = res.data.signInUser.error
        setNewError({
          ...newError,
          message: errors
        })
        setIsLogin(true)
      } else {
        const access_token = res.data.signInUser.access_token
        storeData(access_token)
        navigation.navigate('Home')
      }
    })
    .catch(err => {
      console.log(err);
    })
  }
  
  // Alert Message
  useEffect( async () => {
    if (route.params) {
      console.log(route.params);
      setIsLogin(false)
    }
    // Invoking Local Storage
    getStorage()
    // removeStorage('@access_token')
  }, [route.params])

  // Local Storage
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@access_token', value)
    } catch (e) {
      // saving error
      console.error(e);
    }
  }

  const getStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('@access_token')
      if(value !== null) {
        // value previously stored
        // console.log(value); 
        navigation.navigate('Home')
      }
    } catch(e) {
      // error reading value
      console.error(e);
    }
  }

  const removeStorage = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    }
    catch(exception) {
        return false;
    }
  }
  console.log(loading);
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading
            size="2xl"
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
            Sign in to continue!
          </Heading>

          <VStack space={3} mt="5">
            {
              isLogin ? (
                <Alert w="100%" status={newError.status}>
                  <VStack space={2} flexShrink={1} w="100%">
                    <HStack flexShrink={1} space={2} justifyContent="space-between">
                      <HStack space={2} flexShrink={1}>
                        <Alert.Icon mt="1" />
                        <Text fontSize="md" textAlign='center' color="coolGray.800">
                          {newError.message}
                        </Text>
                      </HStack>
                      {/* <IconButton
                        variant="unstyled"
                        icon={<CloseIcon size="3" color="coolGray.600" />}
                      /> */}
                    </HStack>
                  </VStack>
                </Alert>
              ) : route.params && (
                <Alert w="100%" status={route.params.status}>
                  <VStack space={2} flexShrink={1} w="100%">
                    <HStack flexShrink={1} space={2} justifyContent="space-between">
                      <HStack space={2} flexShrink={1}>
                        <Alert.Icon mt="1" />
                        <Text fontSize="md" textAlign='center' color="coolGray.800">
                          {route.params.message}
                        </Text>
                      </HStack>
                      {/* <IconButton
                        variant="unstyled"
                        icon={<CloseIcon size="3" color="coolGray.600" />}
                      /> */}
                    </HStack>
                  </VStack>
                </Alert>
              )
            }  
            <FormControl>
              <FormControl.Label>Email ID</FormControl.Label>
              <Input 
                type="text"
                name="email"
                placeholder="input email..."
                onChangeText={value => setSignIn({...signIn, email: value})}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                type="password"
                name="password"
                placeholder="input password..."
                onChangeText={value => setSignIn({...signIn, password: value})}
              />
            </FormControl>
            <Button 
              mt="2"
              colorScheme="indigo"
              style={{ marginTop: 25 }}
              onPress={e => submitLogin(e)}
            >
              Sign in
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                Do not have a credentials ?{" "}
              </Text>
              <Text
                _text={{
                  color: "indigo.500",
                  fontWeight: "medium",
                  fontSize: "sm",
                }}
                onPress={() => navigation.navigate("SignUp")}
              >
                Sign Up
              </Text>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}
