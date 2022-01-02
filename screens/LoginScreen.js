import * as React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';

import { RFValue } from 'react-native-responsive-fontsize';


export default class LoginScreen extends React.Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Image source={require('../images/logo.png')} style={styles.icon} />
          <Text style={styles.titleText}>{'StoryTelling\nApp'}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.signInWithGoogleAsync()}
            style={styles.button}>
            <Image
              source={require('../images/google_icon.png')}
              style={styles.gicon}
            />
            <Text style={styles.gText}>Sign in with Google</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cloudContainer}>
          <Image
            source={require('../images/cloud.png')}
            style={styles.cloudImg}
          />
        </View>
      </SafeAreaView>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15193c',
    marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
  },
  titleContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: RFValue(130),
    height: RFValue(130),
    resizeMode: 'contain',
  },
  titleText: {
    color: 'white',
    fontSize: RFValue(40),
    fontFamily: 'Bubblegum-Sans',
    textAlign: 'center',
  },
  gicon: {
    width: RFValue(30),
    height: RFValue(30),
    resizeMode: 'contain',
  },
  buttonContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: RFValue(250),
    height: RFValue(50),
    borderRadius: RFValue(30),
  },
  gText: {
    fontSize: RFValue(20),
    fontFamily: 'Bubblegum-Sans',
    color: 'black',
  },
  cloudContainer: {
    flex: 0.3,
    justifyContent: 'flex-end',
  },
  cloudImg: {
    position: 'absolute',
    bottom: RFValue(-5),
    // height : 90,
    width: '100%',
    resizeMode: 'contain',
  },
});
