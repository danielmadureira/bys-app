import React from "react"
import { View } from "react-native"
import EmojiSelector, { Categories } from 'react-native-emoji-selector'

const EmojiSearch = () => {
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
          onEmojiSelected={(emoji) => console.log(emoji)}
        />
      </View>
    </View>
  )
}

export default EmojiSearch