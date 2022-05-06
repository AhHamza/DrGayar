import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { React, useState } from "react";
import { register } from "../../db/auth/auth";

const Register = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");

  return (
    <View style={styles.mainview} >
    <Text style={styles.header} > Register </Text>
         <TextInput
         style={styles.textinput}
         placeholder="email"
         onChangeText={setEmail}
         keyboardType="email-address"
  
        
         />

       <TextInput
       style={styles.textinput}
       onChangeText={setpassword}
       keyboardType="number-pad"
       secureTextEntry={true}
       placeholder="password"
       
     />
       
       <Button
       color={"#022b3a"}
          title="Register"
          onPress={() => { navigation.navigate('Sign in');
            console.log(email, password);
            register(email, password)
              .then()
              .catch((e) => setError(e.message));
          }}
        />
        <Text>{error}</Text>

        <Text>Already have an account?</Text>
        <Button
        color={"#022b3a"}
         title="sign in" 
         onPress={() => { navigation.navigate('Sign in') }} />
 </View>

          
  );
};

export default Register;

const styles = StyleSheet.create({
  mainview:{
    flex:1,
    justifyContent:"center",
    backgroundColor: "#40798c",
    paddingLeft:60,
    paddingRight:60,
    alignSelf:"stretch",
    
  },
  header:{
    fontSize:24,
    color:"#022b3a",
    paddingBottom:10,
    marginBottom:40,
    borderBottomColor: "#cae9ff" ,
    borderBottomWidth: 1,

  },

  textinput:{
    alignSelf:"stretch",
    height:40,
    marginBottom:30,
    color:"#fff",
    borderBottomColor: "#cae9ff" ,
    borderBottomWidth: 1,

  },

  button:{
    alignSelf:"stretch",
    alignItems:"center",
    padding:20,
    backgroundColor:"#000000",
    marginTop:30,
  },
   
  errorText :{
    color: '#f00'
  },
  
  
});