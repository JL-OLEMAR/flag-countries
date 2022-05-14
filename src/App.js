import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { reducer } from './reducer.js'
import { ActionList, CountryList, CountryPage, Header } from './pages'
import './App.css'

const initialState = {
  countryList: [],
  countryListByName: [],
  coutryFilteredByRegion: [],
  filterByRegion: ''
}

const store = createStore(reducer, initialState)

export function App () {
  const [darkMode, setDarkMode] = useState(false)
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'

  // mq: Media Query
  const changeMedia = (mq) => {
    setDarkMode(mq.matches)
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    mq.addEventListener('change', changeMedia)
    setDarkMode(mq.matches)
    return () => mq.removeEventListener('change', changeMedia)
  }, [])

  return (
    <main className={mainClass}>
      <Provider store={store}>
        <BrowserRouter>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Switch>
            <Route component={CountryPage} path='/country/:id' />
            <Route path='/'>
              <ActionList />
              <CountryList />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </main>
  )
}
