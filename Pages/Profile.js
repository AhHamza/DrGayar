import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Profile({navigation,route}) {
    const {user} = route.params;
    console.log(user);
    return (
        <View>
            <Text>email is : {user.email}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})