import { View } from 'native-base';
import { SafeAreaView,Text,Image,StyleSheet,FlatList,ScrollView } from 'react-native';

export default function AboutScreen({navigation}) {
    return <ScrollView style={styles.container} >

<View style={styles.container1}>
        <View style={{
                flexDirection:"row",
                justifyContent:"space-between",
                padding:3
            }}>
            <Text style={{
                marginTop: 10,
                 fontWeight: 'bold',
                fontSize: 25,
                color: 'grey',
                alignItems:"flex-start"
                
            }}>Programs</Text>
            <Text style={{
                marginTop: 10,
                 fontWeight: 'bold',
                fontSize: 20,
                color: 'grey',
                alignItems:"flex-start"
                
            }}>View all</Text>
            

            </View>
             <Image
        style={styles.imagetop}
        source={{
          uri: 'https://cdn.statically.io/img/mediaini.com/f=auto%2Cq=90/wp-content/uploads/2021/05/warmindo.jpg',
        }}
      />
        </View>

        <View style={styles.container2}>
        <View style={{
                flexDirection:"row",
                justifyContent:"space-between",
                padding:3
            }}>
            <Text style={{
                marginTop: 10,
                 fontWeight: 'bold',
                fontSize: 25,
                color: 'grey',
                alignItems:"flex-start"
                
            }}>Categories</Text>
          
            </View>
            <View style={{
                flexDirection:"row",
                justifyContent:"center",
                padding:3,
                marginTop: 20
            }}>
              <View style={{
                marginRight: 20
                
               
            }}> 

            <Text style={{
                marginTop:5,
                 fontWeight: 'bold',
                fontSize: 18,
                color: 'grey',
                alignItems:"flex-start"
                
            }}>Small</Text>
              </View>
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
                alignItems:"flex-start"
                
            }}>Medium</Text>
              </View>
              <View style={{
                marginLeft: 20,
                
               
              }}> 
  
              <Text style={{
                 marginTop:5,
                   fontWeight: 'bold',
                  fontSize: 18,
                  color: 'grey',
                  alignItems:"flex-start"
                  
              }}>Large</Text>
                </View>

            </View>
        </View>
        


           </ScrollView>
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
       
      },
      container1: {
        flex: 1,
        backgroundColor: 'white',
        padding:10,
        
      },

      container2: {
        flex: 1,
        backgroundColor: 'white',
        padding:10,
        marginTop: 20,
       
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
        borderRadius: 200

      },
    
    
  
  
  });
  