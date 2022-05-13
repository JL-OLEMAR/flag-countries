import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { Country, Wrapper } from '../components'

export function CountryList () {
  const dispatch = useDispatch()

  const countryListByName = useSelector((state) => state.countryListByName)

  const countryList = useSelector((state) => {
    if (state.filterByRegion !== '' && countryListByName.length === 0) {
      return state.coutryFilteredByRegion
    }
    if (countryListByName.length > 0) {
      return countryListByName
    }

    return state.countryList
  })

  // const [countryList, setCountryList] = useState([])
  useEffect(() => {
    window.fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => response.json())
      .then((list) => {
        dispatch({
          type: 'SET_COUNTRY_LIST',
          payload: list
        })
      })
      .catch(() => (window.alert('hubo un error, que dolor que dolo que pena')))
  }, [dispatch])

  return (
    <Wrapper>
      <CountryListStyled>
        {
          countryList.map(({ name, flag, population, capital, region, nativeName, cioc, alpha2Code }) => {
            return (
              <Country
                key={name}
                alpha2Code={alpha2Code}
                capital={capital}
                cioc={cioc}
                flag={flag}
                name={name}
                nativeName={nativeName}
                population={population}
                region={region}
              />
            )
          })
        }
      </CountryListStyled>
    </Wrapper>
  )
}

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  grid-auto-flow: columns;
  grid-column-gap: 66px;
  grid-template-columns: repeat(auto-fill, 270px);
  background: var(--background);
  justify-content: center;
  padding: 3em 0;
`
