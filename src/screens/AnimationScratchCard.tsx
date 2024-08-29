import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AnimationScratchCard = () => {
    return (
        <View style={styles?.card}>
            <Image style={styles?.imageCard} source={require('../assets/images/box.png')} />
            <Text style={styles?.textTitle}>Cashback</Text>
            <Text style={styles?.subTitle}>$10</Text>
        </View>
    )
}

export default AnimationScratchCard

const styles = StyleSheet.create({
    card: {
       // flex: 1,
        backgroundColor: '#ffffff',
        borderRadius: 16,
        borderColor: 'gray',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: 160,
        height: 210,
    },
    imageCard: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
        marginBottom: 20
    },
    textTitle: {
        fontSize: 18,
        color: 'black',
        marginBottom: 6,
    },
    subTitle: {
        fontSize: 40,
        color: 'black',
        fontWeight: 'bold',
    }
})