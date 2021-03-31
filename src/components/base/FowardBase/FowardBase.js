import React from 'react'
import {
	View
} from 'react-native'

import { styles } from './styles'
import { Icon } from 'react-native-elements'

const FowardBase = () => {
	return (
		<View style={styles.header_icon}>
			<Icon
				name="arrow-forward"
				size={25}
			/>
		</View>
	);
};

export default FowardBase;