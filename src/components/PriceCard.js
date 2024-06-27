import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MR_BOLD, MR_REG} from '../../assets/fonts';
import PercentageOffer from './PercentageOffer';
import StarRating from './StarRating';

const PriceCard = ({details}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{details.title}</Text>
      {/* Price container */}
      <View style={styles.priceContainer}>
        <Text style={styles.offerPrice}>{details.offerPrice}</Text>
        <Text style={styles.actualPrice}>{details.actualPrice}</Text>
        <PercentageOffer percentage={details.percentage} />
      </View>
      {/* Star */}
      <View style={{flexDirection: 'row', columnGap: 4, marginBottom: 8}}>
        <StarRating />
        <Text
          style={
            styles.rating
          }>{`${details.rating} (${details.comments})`}</Text>
      </View>
      {/* Description */}
      <Text style={styles.desc}>{details.desc}</Text>
    </View>
  );
};

export default PriceCard;

const styles = StyleSheet.create({
  container: {width: '100%'},
  title: {
    fontSize: 18,
    color: '#404040',
    fontFamily: MR_REG,
    fontWeight: '400',
  },
  priceContainer: {flexDirection: 'row', alignItems: 'center', columnGap: 12},
  offerPrice: {
    fontSize: 32,
    color: '#404040',
    fontFamily: MR_BOLD,
    top: -2,
    fontWeight: '800',
  },
  actualPrice: {
    fontSize: 18,
    color: '#404040',
    fontFamily: MR_REG,
    textDecorationLine: 'line-through',
    fontWeight: '400',
  },
  rating: {
    marginVertical: 4,
    fontSize: 14,
    color: '#404040',
    fontFamily: MR_REG,
    fontWeight: '400',
  },
  desc: {fontSize: 17, color: '#404040', fontFamily: MR_REG, fontWeight: '400'},
});
