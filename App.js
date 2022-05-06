import { onAuthStateChanged } from "firebase/auth";
import Register from "./Components/Users/Register";
import Login from "./Components/Users/Login";
import { auth } from "./db/Config";
import { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from "react-native";
import Home from "./Pages/Home"
import Football from "./Pages/Football";
import Basketball from "./Pages/Basketball";
import Tennis from "./Pages/Tennis";


const NotUsrStck = createNativeStackNavigator();

function NotUser() {
    return (
        <NavigationContainer>
            <NotUsrStck.Navigator initialRouteName='Sign in'>
                <NotUsrStck.Screen name='Sign in' component={Login} />
                <NotUsrStck.Screen name='Register' component={Register} />
            </NotUsrStck.Navigator>
        </NavigationContainer>
    );
}

const UserStack = createNativeStackNavigator();

function User() {
    return (

        <NavigationContainer>
            <UserStack.Navigator>
                <UserStack.Screen name="Home" initialRouteName="Home" component={Home} options={{
                    headerStyle: { backgroundColor: "#161b22", },
                    headerTintColor: '#bdc1c6',
                    headerTitleStyle: { fontWeight: "bold", fontSize: 30, paddingLeft: 50 }
                }} />

                <UserStack.Screen name="Football" component={Football} options={{
                    headerStyle: { backgroundColor: "#161b22", },
                    headerTintColor: '#bdc1c6',
                    headerTitleStyle: { fontWeight: "bold", fontSize: 30, paddingLeft: 50 }
                }} />

                <UserStack.Screen name="Basketball" component={Basketball} options={{
                    headerStyle: { backgroundColor: "#161b22", },
                    headerTintColor: '#bdc1c6',
                    headerTitleStyle: { fontWeight: "bold", fontSize: 30, paddingLeft: 50 }
                }} />

                <UserStack.Screen name="Tennis" component={Tennis} options={{
                    headerStyle: { backgroundColor: "#161b22", },
                    headerTintColor: '#bdc1c6',
                    headerTitleStyle: { fontWeight: "bold", fontSize: 30, paddingLeft: 50 }
                }} />

            </UserStack.Navigator>

        </NavigationContainer>

    )
}

export default function App() {
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => { //if user is authinticated take it from the anynomous fn. then save it using 'useState'
            setUser(user);
            // setEmail(user.email);
        }); //if (user) is authinticated set(user) -> doesn't have to register since i am already authinticated, else get register tab


        return () => {
            unsub();
        };
    }, []);


    const [user, setUser] = useState(undefined);
    const [email, setEmail] = useState("");


    if (user) {
        return (
            <User />
        );
    } else {
        return (
            <NotUser />
        );
    }
}


