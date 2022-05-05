import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { React, useState } from "react";
import { login } from "../../db/auth/auth";

const Login = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");

  return (
    <View style= {styles.container}>
      <View style={styles.emailAndPasswordView}>
        <Text style={styles.emailAndPasswordText}>Email:</Text>
        <TextInput
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholder="Enter your email"
          textAlign="center"
          style={styles.emailAndPasswordInput}
        />
      </View>
      
      <View style={styles.emailAndPasswordView}>
        <Text style={styles.emailAndPasswordText}>Password:</Text>
        <TextInput
          onChangeText={setpassword}
          keyboardType="visible-password"
          secureTextEntry={true}
          textAlign="center"
          placeholder="Enter your password"
          style={styles.emailAndPasswordInput}
        />
      </View>
      <View style={styles.SignInButtonView}>
        <Button
          title="Login"
          onPress={() => {
            console.log(email, password);
            login(email,password)
              .then()
              .catch((e) => setError(e.message));
          }}
        />
        <Text style={styles.errorText}>{error}</Text>
      </View>
      <View style={styles.RegisterView}>
        <Text>Don't have an account?</Text>
        <Button title="Register" onPress={() => {navigation.navigate('Register')}}/>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container:{
    
  },

  emailAndPasswordView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  emailAndPasswordText: {
    flex: 1
  },
  emailAndPasswordInput: {
    flex: 2,
    borderColor: "black",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#c0c0c0',
    height: 40,
  },
  errorText :{
    color: '#f00'
  },
  SignInButtonView: {
    paddingTop: 3,
    alignItems: 'center',
  },
  RegisterView: {
    alignItems: 'center',
  }

});
