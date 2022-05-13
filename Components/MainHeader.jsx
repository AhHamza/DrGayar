import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MainHeader({ title }) {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  
    headerTitle:{
        fontSize:"20px",
        fontWeight:"bold",
        margin:20
        
    }
})