import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';

import { styles } from "./styles";

const TextCard = (props) => {
	const { diary, event } = props;
	return (
        <TouchableWithoutFeedback 
            onPress={event}
        >
            <View style={styles(props).wrapper_text}>
                <Text 
                    key={diary.id}
                    style={styles(props).title}
                >
                    {diary.title}
                </Text>

                <Text 
                    style={styles(props).subtitle}
                >
                    {diary.texto}
                </Text>
            </View>
        </TouchableWithoutFeedback>
	)
}

export default TextCard;