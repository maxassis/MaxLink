import React from 'react'
import { TouchableOpacity, View, TouchableWithoutFeedback } from 'react-native'
import { Feather } from '@expo/vector-icons'
import * as S from './styles'

export default function ModalLink({ onClose }) {
  return (
    <S.ModalContainer>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>

      <S.Container>
        <S.Header>
          <TouchableOpacity onPress={onClose}>
            <Feather name="x" color="#212743" size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="share" color="#212743" size={30} />
          </TouchableOpacity>
        </S.Header>

        <S.LinkArea>
          <S.Title>Link Encurtado</S.Title>
          <S.LongUrl numberOfLines={1}>https://www.google.com</S.LongUrl>

          <S.ShortLinkArea onPress activeOpacity={1}>
            <S.ShortLinkUrl numberOfLines={1}>
              https://bit/ly/sadas
            </S.ShortLinkUrl>
            <TouchableOpacity>
              <Feather name="copy" color="#FFF" size={25} />
            </TouchableOpacity>
          </S.ShortLinkArea>
        </S.LinkArea>
      </S.Container>
    </S.ModalContainer>
  )
}
