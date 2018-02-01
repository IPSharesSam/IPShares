import request from 'superagent'

export default class ApiClient {
  defaultOptions = {
    tokenStorageKey: 'ipSharesApiJWT'
  }

  constructor(host, options = {}) {
    if (process.env.NODE_ENV === 'production') {
      this.host = 'https://damp-reaches-81205.herokuapp.com'
      console.log(this.host, 'prod url')
    }
    if (process.env.NODE_ENV === 'development') {
      this.host = 'http://localhost:3030'
    }
    this.options = { ...this.defaultOptions, ...options }
  }

  get(path) {
    return request
      .get(this.createUrl(path))
      .set(this.headers())
  }

  post(path, data = {}) {
    return request
      .post(this.createUrl(path))
      .set(this.headers())
      .send(data)
  }

  put(path, data = {}) {
    return request
      .put(this.createUrl(path))
      .set(this.headers())
      .send(data)
  }

  patch(path, data = {}) {
    return request
      .patch(this.createUrl(path))
      .set(this.headers())
      .send(data)
  }

  delete(path) {
    return request
      .del(this.createUrl(path))
      .set(this.headers())
  }

  headers() {
    let headers = {
      Accept: 'application/json'
    }
    if (this.isAuthenticated()) {
      headers.Authorization = `Bearer ${this.getToken()}`
    }
    return headers
  }

  isAuthenticated() {
    return !!this.getToken()
  }

  getToken() {
    return localStorage.getItem(this.options.tokenStorageKey)
  }

  storeToken(token) {
    localStorage.setItem(this.options.tokenStorageKey, token)
  }

  createUrl(path) {
    if (process.env.NODE_ENV === 'production') {
      console.log('prod create url!')
      return ['https://damp-reaches-81205.herokuapp.com', path].join('/')
    }
    if (process.env.NODE_ENV === 'development') {
      return ['http://localhost:3030', path].join('/')
    }
    return ['https://damp-reaches-81205.herokuapp.com', path].join('/')
  }

  removeToken() {
    localStorage.removeItem(this.options.tokenStorageKey)
  }
}