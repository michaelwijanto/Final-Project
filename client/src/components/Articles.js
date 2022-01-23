import { StyleSheet, View, Pressable, FlatList } from "react-native";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Stack,
  ChevronRightIcon,
} from "native-base";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Articles({ navigation }) {
  const array = [
    {
      id: 1,
      nama: "Easy",
      imgUrl:
        "https://previews.123rf.com/images/teddy2007b/teddy2007b1809/teddy2007b180900005/107915546-fitness-banner-for-design.jpg",
    },
    {
      id: 2,
      nama: "Medium",
      imgUrl:
        "https://previews.123rf.com/images/teddy2007b/teddy2007b1809/teddy2007b180900005/107915546-fitness-banner-for-design.jpg",
    },
    {
      id: 3,
      nama: "Hard",
      imgUrl:
        "https://previews.123rf.com/images/teddy2007b/teddy2007b1809/teddy2007b180900005/107915546-fitness-banner-for-design.jpg",
    },
  ];

    // const options = {
    //   method: "GET",
    //   url: "https://newsdata2.p.rapidapi.com/news",
    //   params: { category: "health", language: "en", page: '10'},
    //   headers: {
    //     "x-rapidapi-host": "newsdata2.p.rapidapi.com",
    //     "x-rapidapi-key": "fc6ce6795fmsh6181380377953b1p106e09jsna2904c46d6d2",
    //   },
    // };

    // axios
    //   .request(options)
    //   .then(function (response) {
    //       console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
    const [data,setData] = useState()
    const getData = async () => {
      try {
        const res = await axios.get('https://newsdata2.p.rapidapi.com/news',{
          // params: {country: 'us', category: 'health', page: '10'},
          headers: {
            'x-rapidapi-host': 'newsdata2.p.rapidapi.com',
            'x-rapidapi-key': '01b70b795emsh8af40416d7b1f37p15f9e2jsn0471dc11ba9f'
          }
        })
        setData(res.results)
        console.log(res.results)
      } catch (error) {
        console.log(error)
      }
    }
    
    useEffect(()=>{
      getData
    },[])
    
    console.log(data,">>>>>>>>>>>>>>>>>>>")
  return (
    // <View>
    //   {data && 
    //   data.map((item,i)=>{
    //     return <>
    //     <Text> {item.title}</Text>
    //     </>
    //   })}
    // </View>
    <FlatList
      horizontal
      data={data}
      renderItem={({ item }) => {
        return (
          <Pressable
          // onPress={() =>
          //   navigation.navigate("Detail", {
          //     id: item.id,
          //     rating: item.rating,
          //   })
          // }
          >
            <Box
              w="380"
              h="180"
              rounded="lg"
              overflow="hidden"
              marginTop="3"
              _dark={{
                borderColor: "gray.800",
                backgroundColor: "gray.800",
              }}
              _web={{
                shadow: 2,
                borderWidth: 0,
              }}
              _light={{
                backgroundColor: "primary.50",
              }}
              marginRight="5"
              borderColor="gray.300"
              borderWidth="1"
            >
              <Box h="150" w="500">
                <AspectRatio>
                  <Image
                    h="150"
                    w="400"
                    // maxW="100%"
                    // borderColor="white"
                    borderWidth="1"
                    rounded="2xl"
                    source={{
                      uri: item.image_url,
                    }}
                    alt="image"
                  />
                </AspectRatio>
              </Box>

              <Stack p="1">
                <Stack>
                  <Heading
                    size="sm"
                    ml="-1"
                    paddingLeft="5"
                    justifyContent="center"
                  >
                    {item.title}
                  </Heading>
                </Stack>
              </Stack>
            </Box>
          </Pressable>
        );
      }}
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  button: {
    marginBottom: "10px",
  },
  top: {
    flex: 1,
    margin: 15,
  },
  bottom: {
    flex: 1,
    margin: 15,
  },
  middle: {
    flex: 1,
  },
  titleCollections: {
    color: "#010203",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
