import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScratchCard from '../components/ScratchCard'
import { useImage } from '@shopify/react-native-skia'

const AnimationScratchCard = () => {

    const image = useImage(require('../assets/images/stt-card.png'));
    if (!image) {
        return <Text style={styles.loading}>Loading....</Text>
    }




    return (
        <View>
            <Text style={styles?.textTitle}>Scratch Card UI</Text>
            <ScratchCard image={image} style={styles.scratchCard}>
                <View style={styles?.card}>
                    <Image style={styles?.imageCard} source={require('../assets/images/box.png')} />
                    <View style={styles.textView}>
                        <Text style={styles?.subTitle}>$10</Text>
                    </View>
                    <Text style={styles?.textTitle}>Cashback</Text>
                </View>
            </ScratchCard>
        </View>


    )
}

export default AnimationScratchCard

const styles = StyleSheet.create({
    card: {
        // flex: 1,
        backgroundColor: '#ffffff',
        borderRadius: 22,
        borderColor: 'gray',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
       // padding: 20,
        width: 378,
        height: 230,
    },
    imageCard: {
        height: 200,
        width: 250,
        resizeMode: 'contain',
        marginBottom: -20
    },
    textTitle: {
        fontSize: 25,
        color: 'black',
        marginBottom: 6,
        textAlign:'center'
    },
    subTitle: {
        fontSize: 50,
        color: 'black',
        fontWeight: 'bold',
    },
    scratchCard: {
        borderRadius: 16,
    },
    loading: {
        fontSize: 16
    },
    textView: {
        position: 'absolute',
        top: 70
    }
})