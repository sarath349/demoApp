import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MR_BOLD } from '../../assets/fonts'

const SectionTitle = ({ title, customStyles }) => {
    return (
        <Text style={[styles.textStyle, { ...customStyles }]}>{title}</Text>
    )
}

export default SectionTitle

const styles = StyleSheet.create({
    textStyle: { fontSize: MR_BOLD, fontSize: 24, fontWeight: "600", color: "#404040", lineHeight: 24, marginBottom: 10, letterSpacing: 0.5 }
})