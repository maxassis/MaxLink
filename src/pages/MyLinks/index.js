import React, { useState, useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'
import * as S from './styles'
import { getLinksSave, deleteLink } from '../../utils/storeLinks'
import Menu from '../../components/Menu'
import ListItem from '../../components/ListItem/index'
import StatusBarPage from '../../components/StatusBarPage'
import ModalLink from '../../components/ModalLink'
import { Modal, ActivityIndicator } from 'react-native'

function MyLinks() {
  const isFocused = useIsFocused()

  const [links, setLinks] = useState([])
  const [data, setData] = useState({})
  const [modalVisible, setModalVisible] = useState(false)
  const [loading, setLoading] = useState(true)

  console.log(links)

  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSave('maxLink')
      setLinks(result)
      setLoading(false)
    }

    getLinks()
  }, [isFocused])

  function handleItem(item) {
    setData(item)
    setModalVisible(true)
  }

  async function handleDelete(id) {
    const result = await deleteLink(links, id)
    setLinks(result)
  }

  return (
    <S.Container>
      <StatusBarPage barStyle="light-content" backgroundColor="#132742" />

      <Menu />

      <S.Title>Menu Links</S.Title>

      {loading && (
        <S.ContainerEmpty>
          <ActivityIndicator color="#FFF" size={25} />
        </S.ContainerEmpty>
      )}

      {!loading && links.length === 0 && (
        <S.ContainerEmpty>
          <S.WarningText>Você ainda não possui nenhum link</S.WarningText>
        </S.ContainerEmpty>
      )}

      <S.ListLinks
        data={links}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ListItem
            data={item}
            selectedItem={handleItem}
            deleteItem={handleDelete}
          />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />

      <Modal visible={modalVisible} transparent animationType="slide">
        <ModalLink onClose={() => setModalVisible(false)} data={data} />
      </Modal>
    </S.Container>
  )
}

export default MyLinks
