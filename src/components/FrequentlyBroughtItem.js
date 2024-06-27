import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Images } from '../images'
import StarRating from './StarRating'
import { MR_BOLD, MR_REG } from '../../assets/fonts'

const FrequentlyBroughtItem = ({ item }) => {
    return (
        <Pressable style={styles.container}>
            <View style={{ marginBottom: 10 }}>
                <Image source={item.image} style={styles.imageStyle} />
                <View style={styles.percentageContainer}>
                    <Text style={styles.perText}>{`${item.percentage}% OFF`}</Text>
                </View>
            </View>
            <View style={{ justifyContent: "flex-start" }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.offerPrice}>{item.offerPrice}</Text>
                <Text style={styles.actualPrice}>{item.actualPrice}</Text>
                <View style={styles.flexRowContainer}>
                    <StarRating />
                    <Text style={styles.rating}>{`${item.rating} (${item.comments})`}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default FrequentlyBroughtItem

const styles = StyleSheet.create({
    container: {
        padding: 12,
        borderRadius: 12, width: 160, backgroundColor: "white", shadowColor: "#000000", shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.5, shadowRadius: 10, elevation: 5,
    },
    imageStyle: { height: 120, aspectRatio: 1, alignSelf: "center" },
    percentageContainer: { backgroundColor: "#E44A4A", padding: 6, overflow: "hidden", borderTopLeftRadius: 12, borderBottomRightRadius: 12, position: "absolute", bottom: -4, left: 0 },
    perText: { color: "white", fontSize: 10, fontFamily: MR_REG },
    title: { fontSize: 14, color: "#404040", fontFamily: MR_REG, fontWeight: "400" },
    offerPrice: { fontSize: 20, color: "#404040", fontFamily: MR_BOLD, fontWeight: "700" },
    actualPrice: { fontSize: 12, color: "#404040", fontFamily: MR_REG, textDecorationLine: "line-through", fontWeight: "400" },
    flexRowContainer: { flexDirection: "row", alignItems: "center", columnGap: 2 },
    rating: { marginVertical: 4, fontSize: 12, color: "#404040", fontFamily: MR_REG, top: 1, fontWeight: "400" },
})