import React from 'react'
import {
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Share,
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import Clipboard from 'expo-clipboard'
import * as S from './styles'

export default function ModalLink({ onClose }) {
  function copyLink() {
    Clipboard.setString('www.google.com')
    alert('hehehe')
  }

  async function handleShare() {
    try {
      const result = await Share.share({
        message: `Link: www.ig.com `,
      })

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('ActivityType')
        } else {
          console.log('Compatilhado com sucesso')
        }
      }
    } catch (error) {
      console.log(error.message)
    }
  }

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
          <TouchableOpacity onPress={handleShare}>
            <Feather name="share" color="#212743" size={30} />
          </TouchableOpacity>
        </S.Header>

        <S.LinkArea>
          <S.Title>Link Encurtado</S.Title>
          <S.LongUrl numberOfLines={1}>https://www.google.com</S.LongUrl>

          <S.ShortLinkArea activeOpacity={1} onPress={copyLink}>
            <S.ShortLinkUrl numberOfLines={1}>
              https://bit/ly/sadas
            </S.ShortLinkUrl>

            <TouchableOpacity onPress={copyLink}>
              <Feather name="copy" color="#FFF" size={25} />
            </TouchableOpacity>
          </S.ShortLinkArea>
        </S.LinkArea>
      </S.Container>
    </S.ModalContainer>
  )
}
