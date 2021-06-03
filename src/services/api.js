import axios from 'axios'

const key = 'd65df87575510b3f296dc301b7f17e7d760eefc1'

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${key}` 
  },
})

export default api
