import React, { useCallback, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import AppRouter, { history } from './routers/AppRouter'
import { firebase } from './firebase/firebase'
import { AuthProvider } from './context/auth'
import App from './components/App'


const jsx = (
  <AuthProvider>
    <AppRouter />
  </AuthProvider>
)

ReactDOM.render(jsx, document.getElementById('app'))