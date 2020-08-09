import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image 
          style={styles.avatar} 
          source={{uri:'https://github.com/steniooliv.png'}}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Stenio Oliveira</Text>
          <Text style={styles.subject}>Matemática</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        
      </Text>
    </View>
  );
}

export default TeacherItem;