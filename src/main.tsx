import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { createServer, Model } from 'miragejs'

export let server = createServer({
  models: {
    transaction: Model,
  },

  // seeds(server) {

  // },

  routes() {
    this.namespace = 'api'
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  },
})

server.db.loadData({
  transactions: window.localStorage.getItem('Transactions'),
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
