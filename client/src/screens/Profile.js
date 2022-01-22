import React from "react"

// React Native
import {
  StyleSheet
} from 'react-native'

// Native Base
import {
  Container,
  Text,
  Heading,
  Avatar
} from "native-base"

export default function Example() {
  return (
    <Container style={styles.Container}>
      <Heading>
        <Avatar
          bg="purple.600"
          alignSelf="center"
          size="xl"
          source={{
            uri: "https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg",
          }}
        >
          RB
        </Avatar>
        <Text>
          Arie Sastra
        </Text>
        <Text>
          ariesastra@mail.com
        </Text>
      </Heading>
      <Text mt="3" fontWeight="medium">
        NativeBase is a simple, modular and accessible component library that
        gives you building blocks to build you React applications.
      </Text>
    </Container>
  )
}

const styles = StyleSheet.create({
  Container: {
    paddingLeft: 25,
    marginVertical: "5%"
  }
})