import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
  const [checked, setChecked] = useState(false) // eslint-disable-line no-unused-vars
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'

  const changeMedia = (mq) => {
    setDarkMode(mq.matches)
    setChecked(mq.matches)
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')

    mq.addListener(changeMedia)
    setDarkMode(mq.matches)
    setChecked(mq.matches)

    return () => {
      mq.removeListener(changeMedia)
    }
  }, [])

  return (
    <main className={mainClass}>
      <Provider store={store}>
        <Router>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Switch>
            <Route component={CountryPage} path='/country/:id' />
            <Route path='/'>
              <ActionList />
              <CountryList />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </main>
  )
}
