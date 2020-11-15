import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {Image} from 'react-native-svg';
import {Logo, SplashBackground} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000);
  }, [navigation]);

  return (
    <ImageBackground source={SplashBackground} style={styles.background}>
      <Image source={Logo} style={styles.utama} />
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  utama: {
    width: 222,
    height: 105,
  },
});
