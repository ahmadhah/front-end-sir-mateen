export default function setupAxios(axios: any, store: any) {
  axios.defaults.headers.Accept = 'application/json';
  // console.log('env: ', process.env)
  if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = 'http://127.0.0.1:4362/api'
  } else {
    axios.defaults.baseURL = '/api'
  }
  axios.interceptors.request.use(
    (config: any) => {
      const {
        auth: { accessToken },
      } = store.getState()

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
      }

      return config
    },
    (err: any) => Promise.reject(err)
  )
}
