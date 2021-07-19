import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableHighlight,
  Text,
  Button,
  View,
  ActivityIndicator,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WebView } from 'react-native-webview';
// import {HomePage} from './src/Home/HomePage';

const Loading = () => <ActivityIndicator
    style={styles.loading}
    color="#8e419c"
    size="large"
/>

const HomeScreen = ({navigation}) =>{
  return(
    <ScrollView>
    <View style={{flex:1,padding:10,backgroundColor:"#fff",paddingTop:60}}>
      <View style={styles.HomeScreen}>
        <View style={styles.ListItems}>
          <View style={styles.JustifyCenter}>
            <View style={styles.ListImgContainer}>
              <Image 
              source={{uri:'https://www.ageas.co.uk/globalassets/assets/icons/70x70/car_insurance_inverted.png'}}
              style={styles.ListImage}
              />
            </View>
          </View>
          <View style={styles.ListTitle}>
            <Text style={styles.DarkTitle}>Car insurance: UK's</Text>
            <Text style={styles.ThemeTitle}>5th largest car insurer</Text>
          </View>
          <Text style={styles.SubInfo}>Get your claims in few minutes*</Text>
          <View style={styles.ListButton}>
            <TouchableHighlight 
            style={styles.Button}
            onPress={()=> navigation.navigate("Client")}
            >
              <View>
                <Text style={styles.ButtonText}>Start your claims</Text>
                {/* <Text style={styles.DummySpace}></Text>
                <View style={styles.ButtonLogo}>
                  <Text style={styles.ButtonArrow}>></Text>
                </View> */}
              </View>
              
            </TouchableHighlight >
          </View>
        </View>

        <View style={styles.ListItems}>
          <View style={styles.JustifyCenter}>
            <View style={styles.ListImgContainer}>
              <Image 
              source={{uri:'https://www.ageas.co.uk/globalassets/assets/icons/70x70/home_insurance_inverted.png'}}
              style={styles.ListImage}
              />
            </View>
          </View>
          <View style={styles.ListTitle}>
            <Text style={styles.DarkTitle}>Home insurance that's</Text>
            <Text style={styles.ThemeTitle}>Defaqto 5 Star rated</Text>
          </View>
          <Text style={styles.SubInfo}>It's easy to key online</Text>
          <View style={styles.ListButton}>
            <TouchableHighlight 
            style={styles.Button}
            onPress={()=> navigation.navigate("Client")}
            >
              <View>
                <Text style={styles.ButtonText}>Start your claims</Text>
                {/* <Text style={styles.DummySpace}></Text>
                <View style={styles.ButtonLogo}>
                  <Text style={styles.ButtonArrow}>></Text>
                </View> */}
              </View>
              
            </TouchableHighlight >
          </View>
        </View>
      </View>

      {/* <Text>HomeScreen</Text>
      <Button
      title="Client"
      onPress={()=> navigation.navigate("Client")}></Button> */}
      {/* <HomePage/> */}
    </View>
    </ScrollView>
  )
}

const ClientScreen = () =>{
  return(
    <View style={{flex:1,}}>
      <WebView 
        source={{ uri: 'http://192.168.1.3:3000' }} 
        startInLoadingState
        renderLoading={Loading}
      />
    </View>
  )
}

const Stack = createStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Client" component={ClientScreen} 
          options={{
            headerTintColor:"#fff",
            headerStyle:{
              backgroundColor:"#8e419c"
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  loading:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  HomeScreen:{
    padding:10,
  },
  ListItems:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 3,
    borderRadius:13,
    padding:10,
    position:"relative",
    paddingTop:60,
    marginTop:110,
    paddingBottom:30,
    paddingHorizontal:20,
  },
  JustifyCenter:{
    alignItems:"center"
  },
  ListImgContainer:{
    backgroundColor:"#8e419c",
    position:"absolute",
    top:-100,
    borderRadius:50,
    height:100,
    width:100,
    marginTop: 0,
    marginRight: "auto",
    marginBottom: 0,
    marginLeft: "auto",
  },
  ListImage:{
    width:60,
    height:60,
    marginTop: 25,
    marginRight: "auto",
    marginBottom: 0,
    marginLeft: "auto",
  },
  ListTitle:{
    fontWeight:"700",
    fontSize:38,
    display:"flex",
    // flex:1,
    lineHeight:28,
  },
  DarkTitle:{
    color:"#000",
    fontSize:28,
    fontWeight:"700"
  },
  ThemeTitle:{
    color:"#8e419c",
    fontSize:28,
    fontWeight:"700"
  },
  SubInfo:{
    fontSize:12,
    marginBottom:10,
  },
  Button:{
    backgroundColor:"#6FA313",
    color:"#fff",
    padding:10,
    borderRadius:20,
    // flex: 1,
    flexDirection: 'row',
  },
  ButtonText:{
    color:"#fff",
    fontSize:16,
    fontWeight:"500",
    paddingHorizontal:10,
  },
  DummySpace:{
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
  },
  ButtonLogo:{
    backgroundColor:"#fff",
    color:"#6FA313",
    width:30,
    height:30,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:50,
  },
  ButtonArrow:{
    fontWeight:"700",
    fontSize:20,
    color:"#6FA313",
  }
})
export default App;
