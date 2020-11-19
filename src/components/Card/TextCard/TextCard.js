import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';

import { styles } from "./styles";

const TextCard = (props) => {
	const { diary, smallSize } = props;
	return (
        <TouchableWithoutFeedback 
            onPress={() => {
                alert('a')
            }}
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