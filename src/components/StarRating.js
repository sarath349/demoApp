import React from 'react';
import { StyleSheet, Text } from 'react-native';

const StarRating = () => {
    return (
        <Text style={styles.starText}>★</Text>
    );
};

const styles = StyleSheet.create({
    starText: {
        color: 'gold',
        fontSize: 18
    },
});

export default StarRating;
