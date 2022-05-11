import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { React, useState } from "react";
import {getUserUId, register} from "../../db/Auth";
import {addUser} from "../../db/User";

const Register = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");



  return (
    <View>
      <View style={styles.emailAndPasswordView}>
        <Text style={styles.emailAndPasswordText}>Email:</Text>
        <TextInput
          onChangeText={setEmail}
          keyboardType="email-address"
          textAlign="center"
          placeholder="Enter your email"
          style={styles.emailAndPasswordInput}
        />
      </View>
      <View
        style={styles.emailAndPasswordView}
      >
        <Text style={styles.emailAndPasswordText}>Password:</Text>
        <TextInput
          onChangeText={setpassword}
          keyboardType="visible-password"
          textAlign="center"
          placeholder="Enter your password"
          secureTextEntry={true}
          style={styles.emailAndPasswordInput}
        />
      </View>
      <View style={styles.RegisterButtonView}>
        <Button
          title="Register"
          onPress={() => {
            navigation.navigate('Login');
            console.log(email, password);
            register(email, password)
              .then(addUser({id: getUserUId(), email, password})) //ask doc : cannot add user to db
              .catch((e) => setError(e.message));
          }}
        />
        <Text>{error}</Text>
      </View>
      <View style={styles.SignInView}>
        <Text>Already have an account?</Text>
        <Button title="sign in" onPress={() => { navigation.navigate('Login') }} />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
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
  errorText: {
    color: '#f00'
  },
  RegisterButtonView: {
    paddingTop: 3,
    alignItems: 'center',
  },
  SignInView: {
    alignItems: 'center',
  }
});
