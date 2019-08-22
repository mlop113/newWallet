import React, { Component } from "react";
import { Image, ScrollView, Text, View } from "react-native"

import { Images } from "../../Themes";

// Styles
import styles from "./LaunchScreenStyles";

export default class LaunchScreen extends Component {
  public render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode="stretch" />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
	          <Image source={Images.launch} style={styles.logo} />
          </View>
        </ScrollView>
      </View>
    );
  }
}
