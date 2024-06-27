import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MR_REG } from '../../assets/fonts'

const PercentageOffer = ({ percentage }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{`${percentage}% OFF`}</Text>
        </View>
    )
}

export default PercentageOffer

const styles = StyleSheet.create({
    container: { backgroundColor: "#E44A4A", paddingVertical: 4, overflow: "hidden", borderTopLeftRadius: 12, borderBottomRightRadius: 12,paddingHorizontal:8 },
    text: { color: "white", fontSize: 14, fontFamily: MR_REG }
})