import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { View, ImageBackground, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import giveClassesBgImg from '../../assets/images/give-classes-background.png';

import styles from './styles';

function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigateBack(){
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={giveClassesBgImg}
        style={styles.content}
        resizeMode='contain'>
      
      <Text style={styles.title}>
        Quer ser um Proffy?
      </Text>
      <Text style={styles.description}>
          Para começar, você precisa se cadastrar como profesor na nossa plataforma web.
      </Text>

      </ImageBackground>

      <RectButton onPress={handleNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Tudo Bem!</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;