import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {Header, Logo} from '../../assets';
import {Saldo} from '../../component';

const Home = () => {
  return (
    <View style={styles.pages}>
      <ImageBackground source={Header} style={styles.headers}>
        {/* <Image source={Logo} style={styles.logo} /> */}
        <View style={styles.hello}>
          <Text style={styles.selamat}>Selamat Datang,</Text>
          <Text style={styles.user}>Vaiz Lake</Text>
        </View>
      </ImageBackground>
			<Saldo/>
    </View>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
  },
  headers: {
    width: windowWidth * 3,
    height: windowHeight * 0.3,
    paddingHorizontal: 26,
    paddingTop: 3,
  },
  logo: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.1,
  },
  hello: {
    marginTop: windowHeight * 0.03,
  },
  selamat: {
    fontSize: 13,
    color: '#FFFAFA',
    fontFamily: 'Oswald-Bold',
  },
  user: {
    fontSize: 13,
    color: '#FFFAFA',
    fontFamily: 'Oswald-Regular',
  },
});
