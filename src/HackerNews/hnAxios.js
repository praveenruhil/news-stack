import axios from 'axios'

export const hnAxios = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0/',
})
