import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Dimensions, View, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper/src';

var { width } = Dimensions.get('window');

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    setBannerData([
      'https://www.shutterstock.com/image-photo/conquering-mountain-peaks-by-cyclist-260nw-1498456337.jpg',
      'https://images.squarespace-cdn.com/content/v1/54aa18afe4b0d6033e4fc329/1523815665784-9TWI9X0ZR1HLMHOYPUS4/about-banner.jpg',
      'https://www.iowaparklands.com/wp-content/uploads/2021/04/mnt-bike-01.jpg',
    ]);

    return () => {
      setBannerData([]);
    };
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.swiper}>
          <Swiper
            style={{ height: width / 2 }}
            showButtons={false}
            autoplay={true}
            autoplayTimeout={2}
          >
            {bannerData.map((item) => {
              return (
                <Image
                  key={item}
                  style={styles.imageBanner}
                  resizeMode='contain'
                  source={{ uri: item }}
                />
              );
            })}
          </Swiper>
          <View style={{ height: 20 }}></View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
  },
  swiper: {
    width: width,
    alignItems: 'center',
    marginTop: 10,
  },
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});

export default Banner;
