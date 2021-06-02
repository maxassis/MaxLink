import React from 'react'
import { View, Text } from 'react-native'
import * as S from './styles'
import Menu from '../../components/Menu'
import ListItem from '../../components/ListItem/index'
import StatusBarPage from '../../components/StatusBarPage'

function MyLinks() {
  return (
    <S.Container>
      <StatusBarPage barStyle="light-content" backgroundColor="#132742" />

      <Menu />

      <S.Title>Menu Links</S.Title>

      <S.ListLinks
        data={[{ data: 1, link: 'test.com' }]}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ListItem data={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  )
}

export default MyLinks
