import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import StatusBarPage from '../../components/StatusBarPage'
import Menu from '../../components/Menu/index'
import { Feather } from '@expo/vector-icons'
import ModalLink from '../../components/ModalLink/index'

import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
} from 'react-native'
import * as S from './styles'

function Home() {
  const [input, setInput] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

  function handleShortLink() {
    setModalVisible(true)
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient
        colors={['#1dddb9', '#132742']}
        style={{ flex: 1, justifyContent: 'center' }}
      >
        <StatusBarPage barStyle="light-content" backgroundColor="#1dddb9" />

        <Menu />

        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'padding' : 'position'}
        >
          <S.ContainerLogo>
            <S.Logo
              source={require('../../assets/Logo.png')}
              resizeMode="contain"
            />
          </S.ContainerLogo>

          <S.ContainerContent>
            <S.Title>MaxLink</S.Title>
            <S.SubTitle>Cole seu link para encurtar</S.SubTitle>

            <S.ContainerInput>
              <S.BoxIcon>
                <Feather name="link" size={22} color="#FFF" />
              </S.BoxIcon>
              <S.Input
                placeholder="Cole seu link aqui"
                placeholderTextColor="white"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="url"
                value={input}
                onChangeText={(Text) => setInput(Text)}
              />
            </S.ContainerInput>

            <S.ButtonLink onPress={handleShortLink}>
              <S.ButtonLinkText>Gerar Link</S.ButtonLinkText>
            </S.ButtonLink>
          </S.ContainerContent>
        </KeyboardAvoidingView>

        <Modal visible={modalVisible} transparent animationType="slide">
          <ModalLink onClose={() => setModalVisible(false)} />
        </Modal>
      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}

export default Home
