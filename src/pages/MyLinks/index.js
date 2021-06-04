import React, { useState, useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'
import * as S from './styles'
import { getLinksSave } from '../../utils/storeLinks'
import Menu from '../../components/Menu'
import ListItem from '../../components/ListItem/index'
import StatusBarPage from '../../components/StatusBarPage'

function MyLinks() {
  const isFocused = useIsFocused()

  const [links, setLinks] = useState([])
  const [data, setData] = useState({})
  const [modalVisible, setModalVisible] = useState()

  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSave('maxLink')
      setLinks(result)
    }

    getLinks()
  }, [isFocused])

  return (
    <S.Container>
      <StatusBarPage barStyle="light-content" backgroundColor="#132742" />

      <Menu />

      <S.Title>Menu Links</S.Title>

      <S.ListLinks
        data={links}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ListItem data={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  )
}

export default MyLinks
