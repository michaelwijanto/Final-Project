import {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback
} from 'react'
import {
  Text
} from 'react-native'
// GiftedChat
import {
  GiftedChat
} from 'react-native-gifted-chat'
// Firebase Firestore
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot
} from 'firebase/firestore'
import { db } from '../../firebase'
// Apollo Client
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../queries';
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function CoachChat({
  route
}) {
  const { coachName, coachImage, id } = route.params
  const [messages, setMessages] = useState([])
  const [accessToken, setAccessToken] = useState('')
  
  const getStorage = async () => {
    try {
      const value = await AsyncStorage.getItem("@access_token");
      if (value !== null) {
        // value previously stored
        // console.log(value);
        setAccessToken(value)        
      }
    } catch (e) {
      // error reading value
      console.error(e);
    }
  };

  useEffect(() => {
    getStorage()
  }, [])

  const { loading, error, data } = useQuery(GET_USER, {
    variables: {
      accessToken
    },
  });

  
  let user = {}
  if (!loading) {
    user = data?.getUserProfile.UserProfile
    console.log(user, accessToken);
  }
  
  useLayoutEffect(() => {
    const collectionRef = collection(db, 'chats')
    const setQuery = query(collectionRef, orderBy('createdAt', 'desc'))

    const unsubscribe = onSnapshot(setQuery, snapshot => {
      console.log('snapshop')
      setMessages(
        snapshot.docs.map(doc => ({
          _id: doc.id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user
        }))
      )
    })
    return () => unsubscribe()

    // using @react-native-firebase
    // return db.onSnapshot(querySnapshot => {
    //   console.log('snapshot');
    //   setMessages(
    //     querySnapshot.map(doc => ({
    //         _id: doc.id,
    //         createdAt: doc.data().createdAt.toDate(),
    //         text: doc.data().text,
    //         user: doc.data().user
    //       }))
    //     )
    // })
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(
      previousMessages, messages)
    )
    const { _id, createdAt, text, user } = messages[0]
    addDoc(collection(db, 'chats'), {
      _id,
      createdAt,
      text,
      user
    })

    // useing @react-native-firebase
    // db.add({_id, createdAt, text, user})
  }, [])

  return (
    <>
      {
        loading ? 
        <Text>loading...</Text> : (
          <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
              _id: user?.id,
              avatar: 'https://i.pravatar.cc/300',
            }}
            messagesContainerStyle={{
              backgroundColor: '#fff'
            }}
            showAvatarForEveryMessage={true}
          />
        )
      }
    </>
  )
}