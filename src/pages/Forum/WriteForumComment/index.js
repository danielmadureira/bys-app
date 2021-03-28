import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { BackBase, TitleHeader } from '../../../components';
import BodyForumComment from './BodyForumComment';
import { styles } from './styles'

const WriteForumComment = ({ navigation, route }) => {
  const { id } = route.params

  return (
    <ScrollView contentContainerStyle={styles.wrapper} style={styles.container}>
      <StatusBar style="light" backgroundColor="#000" />
      <View style={styles.container_header}>
        <TitleHeader
          title="Participe da sala de conversa"
          subtitle="Deixe um comentário"
        />
        <BackBase navigation={navigation} />
      </View>

      <BodyForumComment
        numberOfLines={15}
        btnStyle={styles.wrapper_button}
        containerStyle={styles.message_container}
        room_id={id}
      />

    </ScrollView>
  );
};

export default WriteForumComment;