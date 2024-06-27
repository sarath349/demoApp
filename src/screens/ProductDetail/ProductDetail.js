import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Images} from '../../images';
import PriceCard from '../../components/PriceCard';
import SectionTitle from '../../components/SectionTitle';
import {MR_BOLD, MR_MED, MR_REG} from '../../../assets/fonts';
import FrequentlyBroughtItem from '../../components/FrequentlyBroughtItem';

const ProductDetail = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSectionProduct, setSelectedSectionProduct] =
    useState('product');
  const [selectedSectionSize, setSelectedSectionSize] = useState('size');
  const thumbnails = [
    Images.THUMBNAIL_1,
    Images.THUMBNAIL_2,
    Images.THUMBNAIL_3,
  ];
  const priceDetails = {
    title: 'EKERÖ',
    offerPrice: '$230.00',
    actualPrice: '$512.58',
    percentage: '45',
    rating: 4.9,
    comments: 256,
    desc: 'A minimalist chair with a reversible back cushion provides soft support for your back and has two sides to wear.',
  };
  const colors = [
    {color: '#E3AD33', name: 'Harvest Gold'},
    {color: '#1A1919', name: 'Eerie Black'},
    {color: '#E35D33', name: 'Flame'},
    {color: '#1C3A13', name: 'Pakistan Green'},
  ];
  const productDimension = {
    Width: '70 cm',
    Depth: '73 cm',
    Height: '75 cm',
    'Seat Width': '57 cm',
    'Seat Depth': '46 cm',
    'Seat Height': '43 cm',
  };
  const freqBoughtItems = [
    {
      image: Images.PRODUCT,
      title: 'EKERÖ',
      offerPrice: '$230.00',
      actualPrice: '$512.58',
      percentage: '45',
      rating: 4.9,
      comments: 256,
    },
    {
      image: Images.PRODUCT_1,
      title: 'STRANDMON',
      offerPrice: '$274.13',
      actualPrice: '$856.60',
      percentage: '45',
      rating: 4.8,
      comments: 128,
    },
    {
      image: Images.PRODUCT,
      title: 'EKERÖ',
      offerPrice: '$230.00',
      actualPrice: '$512.58',
      percentage: '45',
      rating: 4.9,
      comments: 256,
    },
    {
      image: Images.PRODUCT_1,
      title: 'STRANDMON',
      offerPrice: '$274.13',
      actualPrice: '$856.60',
      percentage: '45',
      rating: 4.8,
      comments: 128,
    },
  ];
  function handleSelectSectionProduct(section) {
    const updatedSection = section === selectedSectionProduct ? '' : section;
    setSelectedSectionProduct(updatedSection);
  }
  function handleSelectSectionSize(section) {
    const updatedSection = section === selectedSectionSize ? '' : section;
    setSelectedSectionSize(updatedSection);
  }
  return (
    <View style={{flex: 1}}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Product View */}
        <View style={styles.productView}>
          <Image source={Images.BEST_SELLER} style={styles.bestSeller} />
          <Image source={Images.PRODUCT} style={styles.product} />
        </View>
        {/* Thumbnail */}
        <View style={styles.thumbnailView}>
          {thumbnails.map((thumbnail, index) => (
            <TouchableOpacity
              onPress={() => setSelectedIndex(index)}
              key={index}
              activeOpacity={0.8}
              style={selectedIndex === index && styles.selectedThumbnailImage}>
              <Image source={thumbnail} style={styles.thumbnailImage} />
            </TouchableOpacity>
          ))}
        </View>
        {/* Product Details */}
        <View style={styles.productDetailView}>
          {/* Price Card */}
          <View style={styles.cardView}>
            <PriceCard details={priceDetails} />
          </View>
          {/* Colors */}
          <View style={styles.cardView}>
            <SectionTitle title={'Colors'} />
            <View style={styles.colorItemView}>
              {colors.map((item, index) => (
                <TouchableOpacity
                  onPress={() => setSelectedColorIndex(index)}
                  style={[
                    styles.colorItem,
                    selectedColorIndex === index &&
                      styles.selectedThumbnailImage,
                  ]}
                  key={index}
                  activeOpacity={0.8}>
                  <View
                    style={{
                      height: 35,
                      aspectRatio: 1,
                      backgroundColor: item.color,
                      borderRadius: 8,
                    }}
                  />
                  <Text style={styles.colorName}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          {/* Product Description  */}
          <View style={styles.cardView}>
            <TouchableOpacity
              onPress={() => handleSelectSectionProduct('product')}
              activeOpacity={0.8}
              style={[styles.flexRowSpaceBetween, {marginBottom: 10}]}>
              <>
                <SectionTitle
                  title={'Product Description'}
                  customStyles={{marginBottom: 0}}
                />
                <Image
                  source={
                    selectedSectionProduct === 'product'
                      ? Images.DOWN_ARROW
                      : Images.UP_ARROW
                  }
                />
              </>
            </TouchableOpacity>
            {selectedSectionProduct === 'product' && (
              <Text style={styles.desc}>
                Choose a stylish dark color or brighten up your home with
                colorful sarongs. The EKERÖ armchair has a sleek and modern look
                with two sides that meet at the back – and a waist support for
                added comfort!
              </Text>
            )}
          </View>
          {/* Size*/}
          <View style={styles.cardView}>
            <TouchableOpacity
              onPress={() => handleSelectSectionSize('size')}
              activeOpacity={0.8}
              style={[styles.flexRowSpaceBetween, {marginBottom: 10}]}>
              <>
                <SectionTitle title={'Size'} customStyles={{marginBottom: 0}} />
                <Image
                  source={
                    selectedSectionSize === 'size'
                      ? Images.DOWN_ARROW
                      : Images.UP_ARROW
                  }
                />
              </>
            </TouchableOpacity>
            {selectedSectionSize === 'size' && (
              <>
                {Object.keys(productDimension).map((item, index) => (
                  <View
                    key={index}
                    style={[styles.flexRowSpaceBetween, styles.dimensionItem]}>
                    <Text style={styles.dimensionKey}>{item}:</Text>
                    <Text style={styles.dimensionKey}>
                      {productDimension[item]}
                    </Text>
                  </View>
                ))}
                <Image
                  source={Images.MEASUREMENT}
                  style={styles.dimensionImage}
                />
              </>
            )}
          </View>
          {/* Frequently bought */}
          <View style={[styles.cardView, {marginBottom: 50}]}>
            <View style={[styles.flexRowSpaceBetween, {marginBottom: 14}]}>
              <SectionTitle
                title={'Frequently bought'}
                customStyles={{marginBottom: 0}}
              />
              <Text style={styles.seeMoreText}>See More</Text>
            </View>
            {/* Frequently bought items */}
            <ScrollView
              horizontal
              contentContainerStyle={{columnGap: 8, padding: 4}}
              showsHorizontalScrollIndicator={false}>
              {freqBoughtItems.map((item, index) => (
                <FrequentlyBroughtItem key={index} item={item} />
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity activeOpacity={0.8}>
          <Image
            source={Images.WISH_LIST}
            style={{height: 44, aspectRatio: 1}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addToCart} activeOpacity={0.8}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {backgroundColor: 'white'},
  productView: {justifyContent: 'center', alignItems: 'center', margin: 20},
  bestSeller: {position: 'absolute', top: 0, left: -20},
  product: {aspectRatio: 1, maxWidth: 264, width: '80%', marginBottom: 8},
  thumbnailView: {
    paddingVertical: 12,
    flexDirection: 'row',
    columnGap: 8,
    alignSelf: 'center',
    marginBottom: 4,
  },
  thumbnailImage: {height: 60, width: 60, borderRadius: 8},
  selectedThumbnailImage: {
    borderColor: '#156651',
    borderWidth: 2,
    borderRadius: 8,
    overflow: 'hidden',
  },
  // Product Details
  cardView: {padding: 24, borderBottomColor: '#E0E0E0', borderBottomWidth: 1},
  productDetailView: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#cccccc',
    shadowOffset: {width: 0, height: 12},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  colorItemView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 8,
    rowGap: 8,
  },
  colorItem: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
    width: '48%',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
  colorName: {
    fontSize: 13,
    fontFamily: MR_MED,
    lineHeight: 18,
    color: '#404040',
    fontWeight: '400',
  },
  flexRowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  desc: {fontSize: 16, color: '#404040', fontFamily: MR_REG, fontWeight: '400'},
  dimensionItem: {
    paddingVertical: 8,
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
  },
  dimensionKey: {
    fontSize: 14,
    fontFamily: MR_MED,
    lineHeight: 20,
    color: '#404040',
    fontWeight: '400',
  },
  dimensionImage: {alignSelf: 'center', objectFit: 'fill', marginTop: 8},
  seeMoreText: {
    fontSize: 18,
    fontFamily: MR_MED,
    lineHeight: 20,
    color: '#156651',
    textDecorationLine: 'underline',
    fontWeight: '700',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
    width: '100%',
    paddingHorizontal: 20,
    columnGap: 12,
    backgroundColor: 'white',
    opacity: 1,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 12},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  addToCart: {
    backgroundColor: '#156651',
    flex: 1,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  addToCartText: {
    fontSize: 18,
    color: 'white',
    fontFamily: MR_BOLD,
    top: -2,
    fontWeight: '700',
  },
});
