import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';

import { styles } from "./styles";

const MessageBase = (props) => {
	const { diary, smallSize } = props;
	return (
        <TouchableWithoutFeedback>
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

                <View style={styles(props).wrapper_date}>
                    <Text style={styles(props).date}>20 de Julho</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
	)
}

export default MessageBase;