import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { CountrySelected, Wrapper } from '../components'

export function CountryPage ({ match, history }) {
  const DBcountry = useSelector((state) =>
    state.countryList.find((item) => item.alpha2Code === match.params.id)
  )
  const [country, setCountry] = useState(DBcountry)

  useEffect(() => {
    if (!country) {
      window.fetch(`https://restcountries.com/v2/alpha/${match.params.id.toLowerCase()}`)
        .then((resp) => resp.json())
        .then(setCountry)
    }
  }, [country, match.params.id])

  const handleClick = () => {
    history.goBack()
  }

  return (
    <CountryPageStyled>
      <Wrapper>
        <button className='back' onClick={handleClick}>
          <i className='fas fa-long-arrow-alt-left' /> Back
        </button>
        <CountrySelected {...country} />
      </Wrapper>
    </CountryPageStyled>
  )
}

const CountryPageStyled = styled.div`
  .back {
    background: var(--white);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    padding: 0.7em 2.2em;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-top: 1em;
    color: var(--black);
    i {
      margin-right: 5px;
    }
  }
  @media screen and (min-width: 1024px) {
    .back {
      margin-top: 3em;
    }
  }
`
