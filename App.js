import { onAuthStateChanged } from "firebase/auth";
import Register from "./Components/Authentication/Register";
import Login from "./Components/Authentication/Login";
import { auth } from "./db/Config";
import { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet } from "react-native";
import Home from "./Pages/Home"
import Football from "./Pages/Football";
import Basketball from "./Pages/Basketball";
import Tennis from "./Pages/Tennis";
import Profile from "./Pages/Profile";
import {addUser} from "./db/User";


const NotUsrStck = createNativeStackNavigator();

function NotUser() {
    return (
        <NavigationContainer>
            <NotUsrStck.Navigator initialRouteName='Register'>
                <NotUsrStck.Screen name='Login' component={Login} />
                <NotUsrStck.Screen name='Register' component={Register} />
            </NotUsrStck.Navigator>
        </NavigationContainer>
    );
}

const UserStack = createNativeStackNavigator();
const Tab =  createBottomTabNavigator();

function User({user}) {
    // console.log(user);
    return (

        <NavigationContainer>
            <UserStack.Navigator initialRouteName="BottomTab" >
                <UserStack.Screen name={"BottomTab"} options={{headerShown:false}} >
                    {/*give user to bottom tab*/}
                    {(props)=><BottomTab{...props} user={user} />}
                </UserStack.Screen>


                <UserStack.Screen name="Football" component={Football} options={{
                    headerStyle: {backgroundColor: "#161b22",},
                    headerTintColor: '#bdc1c6',
                    headerTitleStyle: {fontWeight: "bold", fontSize: 30, paddingLeft: 50}
                }}/>

                <UserStack.Screen name="Basketball" component={Basketball} options={{
                    headerStyle: {backgroundColor: "#161b22",},
                    headerTintColor: '#bdc1c6',
                    headerTitleStyle: {fontWeight: "bold", fontSize: 30, paddingLeft: 50}
                }}/>

                <UserStack.Screen name="Tennis" component={Tennis} options={{
                    headerStyle: {backgroundColor: "#161b22",},
                    headerTintColor: '#bdc1c6',
                    headerTitleStyle: {fontWeight: "bold", fontSize: 30, paddingLeft: 50}
                }}/>

                <UserStack.Screen name="Profile" component={Profile} options={{
                    headerStyle: {backgroundColor: "#161b22",},
                    headerTintColor: '#bdc1c6',
                    headerTitleStyle: {fontWeight: "bold", fontSize: 30, paddingLeft: 50}
                }}/>

            </UserStack.Navigator>
        </NavigationContainer>
    )
}



function BottomTab({user}){

    return(
        <Tab.Navigator>
            <UserStack.Screen name="Home"  component={Home} initialParams={{user}} options={{
                headerStyle: {backgroundColor: "#161b22",},
                headerTintColor: '#bdc1c6',
                headerTitleStyle: {fontWeight: "bold", fontSize: 30, paddingLeft: 50}
            }}>

            </UserStack.Screen>

            <Tab.Screen name={"Profile"}  component={Profile} initialParams={{user}} options={{
                headerStyle: {
                    backgroundColor: '#18191A',
                },
                headerTintColor: '#fff',
            }
            }>

            </Tab.Screen>
        </Tab.Navigator>
    )
}


export default function App() {
    const [user, setUser] = useState(undefined);
    const [email, setEmail] = useState("");
    useEffect(() => {const unsub = onAuthStateChanged(auth, (user) => { //if user is authinticated take it from the anynomous fn. then save it using 'useState'
        setUser(user);

    }); //if (user) is authinticated set(user) -> doesn't have to register since i am already authinticated, else get register tab
        return () => {
            unsub();
        };
        }, []);



    if (user) {
        return (
            <User user = {user}/>

        );
    } else {
        return (
            <NotUser />
        );
    }
}




