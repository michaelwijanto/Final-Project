import React from 'react';

// Native Base
import {
  Text,
  VStack,
  HStack,
  Alert,
} from "native-base";

export default function AlertComponent(response) {
  console.log(response);

  if (response) {
    return (
      <Alert w="100%" status={response.status}>
        <VStack space={2} flexShrink={1} w="100%">
          <HStack flexShrink={1} space={2} justifyContent="space-between">
            <HStack space={2} flexShrink={1}>
              <Alert.Icon mt="1" />
              <Text fontSize="md" textAlign='center' color="coolGray.800">
                {response.message}
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
}
