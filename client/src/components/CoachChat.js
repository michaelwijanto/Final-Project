import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { Text } from 'native-base'

// Apollo Client
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../queries';

// Firebase Firestore
import {
  doc,
  setDoc
} from 'firebase/firestore'
import { db } from '../../firebase';

export default function CoachChat({
  route
}) {
  const { coachName, coachImage, id } = route.params
  const [messages, setMessages] = useState([]);

  const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhcmllc2FzdHJhQG1haWwuY29tIiwiZnVsbE5hbWUiOiJBcmllIFNhc3RyYSIsInJvbGUiOiJhZG1pbiIsImlzUmVnaXN0ZXIiOiJmYWxzZSIsImlhdCI6MTY0MzAzNDU5OX0.c5vlYBA7Ga94w8J44rYNaDdIerPqRqyslOkMLvQQLec"

  const { loading, error, data } = useQuery(GET_USER, {
    variables: {
      accessToken: access_token
    },
  });
  
  let user = {}
  if (!loading) {
    user = data.getUserProfile.UserProfile
  }
  
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: `Hallo, Saya ${coachName}, bagaimana progress latihan mu ?`,
        createdAt: new Date(),
        user: {
          _id: id,
          name: coachName,
          avatar: coachImage,
        },
      },
    ])
  }, [])

  const onSend = useCallback(
    async (messages = []) => {
      setMessages(
        previousMessages => GiftedChat.append(previousMessages, messages)
      )
      const {
        _id,
        text,
        createdAt,
        user
      } = messages[0]
      
      // insert messages to firestrore
      try {
        const docChat = await setDoc(doc(db, "chats", _id), {
          _id,
          text,
          createdAt,
          user
        });
      } catch (error) {
        console.log(error);  
      }
  }, [])

  return (
    <>
      {
        loading ? 
        <Text>loading...</Text> : (
          <GiftedChat
            messages={messages}
            showAvatarForEveryMessage={true}
            onSend={messages => onSend(messages)}
            user={{
              _id: user.id,
              email: user.User.email,
            }}
          />
        )
      }
    </>
  )
}