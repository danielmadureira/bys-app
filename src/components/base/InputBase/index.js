import React from 'react';
import { TextInput } from 'react-native-gesture-handler';

import { styles } from "./styles";
import TextBase from '../TextBase';

const InputBase = (props) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched, isValid },
    ...inputProps
  } = props

  const hasError = errors[name] && touched[name] && !isValid

  return (
    <>
      <TextInput
        style={[
          styles(props).textInput,
          hasError && styles(props).errorInput
        ]}
        value={value}
        onChangeText={(text) => {
          onChange(name)(text)
          onBlur(name)
        }}
        {...inputProps}
      />
      {hasError && <TextBase style={styles(props).errorText}>{errors[name]}</TextBase>}
    </>
  )
}

export default InputBase;