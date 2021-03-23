import React from 'react'
import {
	Text,
	View
} from 'react-native'

import { styles, colors } from './styles'
import { Icon } from 'react-native-elements'
import TextBase from '../TextBase';

const AlertBase = (props) => {

	return (
		<View
			style={styles(props).wrapper}
		>
			<Icon
        style={styles(props).wrapper_icon}
        color={colors[props.type]}
				name="warning"
				size={25}
			/>
			<TextBase style={styles(props).wrapper_text}>
        {props.children}
      </TextBase>
		</View>
	);
};

export default AlertBase;