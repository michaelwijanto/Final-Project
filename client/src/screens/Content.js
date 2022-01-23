import { View } from "native-base";
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
import {
  Box,
  Heading,
  useColorMode,
  ChevronRightIcon,
  StatusBar,
  HStack,
  IconButton,
  Icon,
  Center,
} from "native-base";
import LevelHorizontal from "../components/LevelHorizontalHome";
import CoachHorizontal from "../components/CoachHorizontalHome";
import LevelButton from "../components/LevelButton";

export default function AboutScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container2}>
        <View
          style={{
            flexDirection: "row",
            padding: 3,
          }}
        >
          <Text
            style={{
              marginTop: 10,
              fontWeight: "bold",
              fontSize: 25,
              color: "grey",
              alignItems: "flex-start",
            }}
          >
            Levels
          </Text>
        </View>
        <LevelButton navigation={navigation} />
        {/* <View style={{
                flexDirection:"row",
                justifyContent:"center",
                padding:3,
                marginTop: 20
            }}>
              <View style={{
                backgroundColor: "orange",
                width: 100,
                height:40,
                borderRadius: 8,
                alignItems: "center",
                
                
               
            }}> 

            <Text style={{
                marginTop:5,
                 fontWeight: 'bold',
                fontSize: 18,
                color: 'white',
                alignItems:"flex-start",
                
            }}>Easy</Text>
              </View>

              <View style={{
                backgroundColor: "orange",
                width: 100,
                height:40,
                borderRadius: 8,
                alignItems: "center",
                marginLeft: 10
                
               
            }}> 

            <Text style={{
                marginTop:5,
                 fontWeight: 'bold',
                fontSize: 18,
                color: 'white',
                alignItems:"flex-start"
                
            }}>Medium</Text>
              </View>
              <View style={{
                backgroundColor: "orange",
                width: 100,
                height:40,
                borderRadius: 8,
                alignItems: "center",
                marginLeft: 10
                
               
            }}> 

            <Text style={{
                marginTop:5,
                 fontWeight: 'bold',
                fontSize: 18,
                color: 'white',
                alignItems:"flex-start"
                
            }}>Hard</Text>
              </View>

            </View> */}
      </View>
      <View style={styles.container1}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 3,
          }}
        >
          <Text
            style={{
              marginTop: 10,
              fontWeight: "bold",
              fontSize: 25,
              color: "grey",
              alignItems: "flex-start",
            }}
          >
            Programs
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontWeight: "bold",
              fontSize: 20,
              color: "grey",
              alignItems: "flex-start",
            }}
          >
            View all
          </Text>
        </View>
        <Box style={styles.programsCard}>
          <LevelHorizontal navigation={navigation} />
        </Box>
      </View>

      <View style={styles.container1}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 3,
          }}
        >
          <Text
            style={{
              marginTop: 10,
              fontWeight: "bold",
              fontSize: 25,
              color: "grey",
              alignItems: "flex-start",
            }}
          >
            Coaches
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontWeight: "bold",
              fontSize: 20,
              color: "grey",
              alignItems: "flex-start",
            }}
          >
            View all
          </Text>
        </View>
        <Box style={styles.programsCard}>
          <CoachHorizontal navigation={navigation} />
        </Box>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    paddingBottom: 25,
  },

  container1: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    marginTop: 20,
    paddingBottom: 20,
  },
  imagetop: {
    width: "100%",
    height: 200,
    marginTop: 10,
    borderRadius: 20,
  },

  imagetop1: {
    width: "100%",
    height: 200,
    marginTop: 10,
    borderRadius: 200,
  },
  programsCard: {
    paddingLeft: 18,
  },
});
