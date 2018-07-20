import React, { Component } from 'react';
import { View, Text, Button, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';



export default class componentName extends Component {


        static navigationOptions = {
          title: 'Login',
        };


        render() {

          const { navigate } = this.props.navigation;

          return (
            <View style={styles.contain} >
              
                
                  <View  >
                    <Image style={{ width: 160, height: 90 }}
                      source={require('../images/pas.png')}
                    />
                  </View>
                  <View style={{ alignItems: "center", marginTop: 40, marginRight: 10 }} >
                    <Text style={{ fontSize: 28, color: "black" }}> IPC BIOBANK</Text>
                  </View>
               
            
              
                <View style={{ marginLeft: 19, marginTop: 5 }}>
                 
                  <View style={{ marginLeft: 5 }}>
                    
                    <Text style={styles.inputBox}>Username</Text>
                    <TextInput
                      style={styles.inputText}
                      placeholder="Username"
                      placheholderTextColor="#e8e8e8"
                      underlineColorAndroid="transparent"
                    >
                    </TextInput>
                    
                    <Text style={styles.inputBox}>Password</Text>

                    <TextInput
                      style={styles.inputText}
                      placeholder="Password"
                      placheholderTextColor="#e8e8e8"
                      underlineColorAndroid="transparent"
                    >
                    </TextInput>

                    <View style={{ marginTop: 10 }}>
                      <TouchableOpacity onPress={() => {
                                  this.props.navigation.navigate('Detail',{ name: 'Login' });
                                }}>
                        <Text style={styles.tbutton}>Login</Text>
                      </TouchableOpacity>

                    </View>
                  </View>
                </View>
             
             

            </View>
          );
        }
}

const styles = StyleSheet.create({


  contain: {
    flex: 1, 
    backgroundColor: "#f3f7f7",

  },

  contain1: {
    flex: 1,marginTop: 3, 
    marginLeft: 10,

  },
  contain2: {
    flex: 1, flexDirection: 'row', 
    justifyContent: 'space-between',

  },
  inputText: {
    fontSize: 18, 
    marginLeft: 30,

  },
  inputBox: {
    fontSize: 21, 
    color: "#000000", 
    marginTop: 7,
  },

  tbutton: {
    color: "white",
    textAlign: "center",
    marginTop: '2%',
    marginRight: '5%',
    borderRadius: 25,
    backgroundColor: "blue",
    padding: 4,
    fontSize: 21,
  }

  
});