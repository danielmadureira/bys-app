import React from 'react'
import {
	Text,
	View
} from 'react-native'

import { styles } from './styles'
import { Icon } from 'react-native-elements'

const BackBase = ({ navigation }) => {
    
	return (
        <View
            onTouchEnd={() => navigation.goBack() } 
            style={styles.header_icon}
        >
            <Icon 
                name="keyboard-backspace"
                size={30}
            />
            <Text style={styles.header_back}>Voltar</Text>
        </View>
	);
};

export default BackBase;