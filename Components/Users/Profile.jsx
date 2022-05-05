import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Profile = ({ email, navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.fontStyle}>Current user: {email}</Text>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#18191A',
        flex: 1
    },
    Buttons: {
        paddingVertical: 20,
    },
    fontStyle: {
        fontSize: 20,
        color: '#fff'
    }
})