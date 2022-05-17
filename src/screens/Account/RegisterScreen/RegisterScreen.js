import React from 'react';
import { View, Text } from 'react-native';
import {Image} from "react-native-elements";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {RegisterForm} from "../../../components/Auth";
import {styles} from "./RegisterScreen.styles";


export  function RegisterScreen() {
  return (
    <KeyboardAwareScrollView>
      <Image source={require("../../../../assets/img/food-delivery.jpg")}  style={styles.image}
    />

      <View style={styles.content}>
          <RegisterForm />
     </View>
    </KeyboardAwareScrollView>
  );
}