import React from 'react'
import { View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import * as S from './styles'

export default function ListItem({ data, selectedItem, deleteItem }) {
  function RightActions() {
    return (
      <S.ActionContainer onPress={() => deleteItem(data.id)}>
        <Feather name="trash" color="#FFF" size={24} />
      </S.ActionContainer>
    )
  }

  return (
    <View>
      <Swipeable renderRightActions={RightActions}>
        <S.ContainerButton
          activeOpacity={0.9}
          onPress={() => selectedItem(data)}
        >
          <Feather name="link" color="#FFF" size={24} />
          <S.Item numberOfLines={1}>{data.long_url}</S.Item>
        </S.ContainerButton>
      </Swipeable>
    </View>
  )
}
