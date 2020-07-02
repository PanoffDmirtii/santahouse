import axios from 'axios'

export default axios.create({
  baseURL: 'https://panovydigi.eu.ngrok.io/api/',
  timeout: 5000,
  // headers: {
  //   'Content_Type': 'application/json'
  // }
})