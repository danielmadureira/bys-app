import React from 'react'
import { styles } from './styles'
import { Icon } from 'react-native-elements'
import TextBase from '../TextBase';
import { TouchableOpacity } from 'react-native-gesture-handler';

const FeedBackBase = ({ navigation, initial }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (initial) {
          navigation.navigate('Feed')
        } else {
          navigation.goBack()
        }
      }}
      style={styles.header_icon}
    >
      <Icon
        name="keyboard-backspace"
        size={30}
      />
      <TextBase style={styles.header_back}>Voltar</TextBase>
    </TouchableOpacity>
  );
};

export default FeedBackBase;