import React from 'react'
import { View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import StatusBarPage from '../../components/StatusBarPage'
import Menu from '../../components/Menu/index'
import { Feather } from '@expo/vector-icons'
import * as S from './styles'

function Home() {
  return (
    <LinearGradient
      colors={['#1dddb9', '#132742']}
      style={{ flex: 1, justifyContent: 'center' }}
    >
      <StatusBarPage barStyle="light-content" backgroundColor="#1dddb9" />

      <Menu />

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
          />
        </S.ContainerInput>

        <S.ButtonLink>
          <S.ButtonLinkText>Gerar Link</S.ButtonLinkText>
        </S.ButtonLink>
      </S.ContainerContent>
    </LinearGradient>
  )
}

export default Home
