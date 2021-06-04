import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import StatusBarPage from '../../components/StatusBarPage'
import Menu from '../../components/Menu/index'
import { Feather } from '@expo/vector-icons'
import ModalLink from '../../components/ModalLink/index'

import api from '../../services/api'
import { saveLink } from '../../utils/storeLinks'

import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  ActivityIndicator,
} from 'react-native'
import * as S from './styles'

function Home() {
  const [URL, setURL] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({})

  async function handleShortLink() {
    setLoading(true)

    const test = URL

    try {
      const response = await api.post('/shorten', {
        long_url: test,
      })
      setData(response.data)
      setModalVisible(true)

      saveLink('maxLink', response.data)

      Keyboard.dismiss()
      setLoading(false)
      setURL('')
    } catch {
      alert('deu ruim')
      Keyboard.dismiss()
      setURL('')
      setLoading(false)
    }
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
                value={URL}
                onChangeText={(Text) => setURL(Text)}
              />
            </S.ContainerInput>

            <S.ButtonLink onPress={handleShortLink}>
              {loading ? (
                <ActivityIndicator color="#121212" size={24} />
              ) : (
                <S.ButtonLinkText>Gerar Link</S.ButtonLinkText>
              )}
            </S.ButtonLink>
          </S.ContainerContent>
        </KeyboardAvoidingView>

        <Modal visible={modalVisible} transparent animationType="slide">
          <ModalLink onClose={() => setModalVisible(false)} data={data} />
        </Modal>
      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}

export default Home
