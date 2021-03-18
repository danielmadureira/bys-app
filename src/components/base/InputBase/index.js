import React from 'react';
import { Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { styles } from "../styles";

const InputBase = (props) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props

  const hasError = errors[name] && touched[name]
  
	return (
		<>
      <TextInput
        style={[
          styles(props).textInput,
          hasError && styles(props).errorInput
        ]}
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name)
          onBlur(name)
        }}
        {...inputProps}
      />
      {hasError && <Text style={styles(props).errorText}>{errors[name]}</Text>}
    </>
	)
}

export default InputBase;