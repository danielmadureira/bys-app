import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Icon } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux';
import { NotificationHelper } from '../../helpers/notificationHelper';
import TextBase from '../base/TextBase';
import { actions } from '../../store/notification'

import { styles } from "./styles";

const NotificationCard = (props) => {
  const { notification, onPress } = props;
  const dispatch = useDispatch()
  const { medications } = useSelector(state => state.notifications)

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
    >
      <View style={styles(props).wrapper}>
        <View style={styles(props).wrapper_text}>
          <View>
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

          <View style={styles(props).wrapper_delete}>
            <Icon
              style={styles(props).title}
              color='#BD2222'
              name="delete"
              size={25}
              onPress={() => {
                let notify = medications.filter(res =>
                  res.uuid !== notification.uuid
                )

                dispatch(actions.updateNotification(notify))
              }}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default NotificationCard;