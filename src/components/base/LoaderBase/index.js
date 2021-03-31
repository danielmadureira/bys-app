import React from 'react'
import {
  View,
  ActivityIndicator
} from 'react-native'
import TextBase from '../TextBase'

import { styles } from './styles'

const LoaderBase = (props) => {
  return (
    <View style={styles(props).wrapper}>
      <TextBase>
        Carregando...
      </TextBase>
      <ActivityIndicator
        color="green"
        size="large"
      />
    </View>
  );
};

export default LoaderBase;