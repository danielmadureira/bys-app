import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/forum'
import {
  AlertBase,
  TextBase,
  TextCard
} from '../../components';

import { styles } from './styles'
import { useNavigation } from '@react-navigation/core';
import { ForumServices } from '../../services/ForumServices';
import { Icon } from 'react-native-elements';

const ForumRoom = ({ room }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [rooms, setRooms] = useState({})

  const getRoom = async (page) => {
    await ForumServices.getRoomsByGroup(room, page)
      .then(res => {
        setRooms(rooms => {
          if (Object.keys(rooms).length > 0) {
            let concated = rooms.data.concat(res.data)
            return {
              current_page: res.current_page,
              last_page: res.last_page,
              data: concated
            }
          }
          return res
        })
      })
      .catch(err => {
        setRooms([])
      })
  }
  useEffect(() => {
    getRoom()
  }, [])

  return (
    (rooms) ? (
      (rooms.data) ?
        <FlatList
          horizontal
          ListEmptyComponent={
            <AlertBase type="warning">
              <TextBase>
                Este grupo não possui salas no momento.
              </TextBase>
            </AlertBase>
          }
          ListFooterComponent={(rooms.data).length > 0 &&
            (rooms.current_page < rooms.last_page) &&
            <View
              style={styles.load_more}
              onTouchEnd={() => {
                getRoom(rooms.current_page + 1)
              }}
            >
              <TextBase style={styles.load_more_text}>
                <Icon
                  color="#476044"
                  name="add"
                />
              </TextBase>
            </View>
          }
          data={rooms.data}
          renderItem={({ item }) => {
            return (
              <View key={item.id} style={styles.wrapper_card}>
                <TextCard
                  smallSize
                  diary={item}
                  event={() => {
                    dispatch(actions.isCommentLoading(true))
                    navigation.navigate('ForumGroup', {
                      title: item.name,
                      subtitle: item.description,
                      id: item.id
                    }
                    )
                  }}
                />
              </View>
            )
          }}
          keyExtractor={(item, index) => String(index)}
          showsHorizontalScrollIndicator={false}
        />
        : null
    ) : null
  );
};

export default ForumRoom;