import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { React, useState } from "react";
import { login } from "../../db/auth/auth";

const Login = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");

  return (
    <View style={styles.mainview} >
       <Text style={styles.header} > Login </Text>
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
          title="Login"
          onPress={() => {
            console.log(email, password);
            login(email,password)
              .then()
              .catch((e) => setError(e.message));
          }}
        />

      <Text style={styles.errorText}>{error}</Text>
    
      <View >
        <Text>Not in our app  yet?</Text>
        <Button color={"#022b3a"} title="Register" onPress={() => {navigation.navigate('Register')}}/>
      </View>
    </View>
  );
};

export default Login;

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

