import { StyleSheet, Text, View, Image,Button } from 'react-native'
import React from 'react'
import {useEffect} from "react";
import { TouchableOpacity } from 'react-native-web';

import footballBackground from '../assets/footballBackground.png'
import tennisBackground from '../assets/tennisBackground.png'
import basketballBackground from '../assets/basketballBackground.png'

/*constants for styling the cards */
const CARD_WIDTH = 400
const CARD_HEIGHT = 300
const BORDER_RADIUS = 16



export default function Home({ navigation,route }) {


  return (
    <View style={styles.container}>


      <Text style={styles.header}> Enter Your Booking Club </Text>
      <View style={styles.cardsContainer}>
        <View style={styles.footballStyle}>
          <Text style={styles.cardTitle}>FootBall</Text>
          <TouchableOpacity onPress={() => { navigation.navigate('Football') }}>
            <Image source={footballBackground} style={styles.footballBackgroundStyle} />
          </TouchableOpacity>
        </View>
        <View style={styles.tennisStyle}>
          <Text style={styles.cardTitle}>Tennis</Text>
          <TouchableOpacity onPress={() => { navigation.navigate('Tennis') }}>
            <Image source={tennisBackground} style={styles.tennisBackgroundStyle} />
          </TouchableOpacity>
        </View>
        <View source={basketballBackground} style={styles.basketballStyle}>
          <Text style={styles.cardTitle}>Basketball</Text>
          <TouchableOpacity onPress={() => { navigation.navigate('Basketball') }}>
            <Image source={basketballBackground} style={styles.basketballBackgroundStyle} />
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );


}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    backgroundColor: "#202124",
    width: "100%",
    height: "100%",

  },
  header: {
    fontSize: "35px",
    fontWeight: "bold",
    margin: 20,
    color: '#bdc1c6'

  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  },
  footballStyle: {

  },
  tennisStyle: {

  },
  basketballStyle: {

  },

  footballBackgroundStyle: {

    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: BORDER_RADIUS
  },
  tennisBackgroundStyle: {

    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: BORDER_RADIUS
  },
  basketballBackgroundStyle: {

    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: BORDER_RADIUS
  },
  cardTitle: {
    textAlign: 'center',
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#bdc1c6'

  }

})