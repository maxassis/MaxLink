import React from 'react'
import { View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import * as S from './styles'

export default function ListItem() {
  return (
    <View>
      <S.ContainerButton activeOpacity={0.9} onPress={() => alert('teste')}>
        <Feather name="link" color="#FFF" size={24} />
        <S.Item numberOfLines={1}>
          https://ezgif.com/video-to-gif/ezgif-6-aadaa681e9bb.mp4
        </S.Item>
      </S.ContainerButton>
    </View>
  )
}
