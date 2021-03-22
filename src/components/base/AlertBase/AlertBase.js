import React from 'react'
import {
	Text,
	View
} from 'react-native'

import { styles, colors } from './styles'
import { Icon } from 'react-native-elements'

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
			<Text style={styles(props).wrapper_text}>
        {props.children}
      </Text>
		</View>
	);
};

export default AlertBase;