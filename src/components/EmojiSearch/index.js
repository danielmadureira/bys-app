import { useNavigation } from "@react-navigation/core"
import React from "react"
import { View } from "react-native"
import EmojiSelector, { Categories } from 'react-native-emoji-selector'
import { useDispatch } from "react-redux"
import { actions } from "../../store/user"

const EmojiSearch = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  return (
    <View style={{
      width: '100%',
      justifyContent: "center",
      alignItems: "center"
    }}>
      <View style={{
        top: '10%'
      }}>
        <EmojiSelector
          showSearchBar={false}
          showTabs={false}
          category={Categories.emotion}
          onEmojiSelected={(emoji) => {
            dispatch(actions.fetchEmoji(String((emoji).codePointAt(0))))
            navigation.goBack()
          }}
          shouldInclude={(e) => {
            if (e.short_name !== "smiling_face_with_tear" &&
              e.short_name !== "disguised_face") {
              return e
            }
          }}
        />
      </View>
    </View>
  )
}

export default EmojiSearch