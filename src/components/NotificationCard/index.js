import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { NotificationHelper } from '../../helpers/notificationHelper';
import TextBase from '../base/TextBase';

import { styles } from "./styles";

const NotificationCard = (props) => {
  const { notification, header, onPress } = props;
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
    >
      <View style={styles(props).wrapper}>
        <View style={styles(props).wrapper_text}>
          <TextBase
            numberOfLines={2}
            key={notification.id}
            style={styles(props).title}
          >
            {notification.title}
          </TextBase>

          <TextBase
            style={styles(props).subtitle}
          >
            {
              NotificationHelper.convertDaysToString(
                notification.days
              )
            }
          </TextBase>
          <TextBase
            style={styles(props).subtitle}
          >
            às {
              NotificationHelper.convertHoursToString(
                notification.hours
              )
            }
          </TextBase>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default NotificationCard;