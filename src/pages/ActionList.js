import styled from 'styled-components'

import { Region, Search, Wrapper } from '../components'

export function ActionList () {
  return (
    <ActionListStyled>
      <Wrapper>
        <div className='grid'>
          <Search />
          <span />
          <Region />
        </div>
      </Wrapper>
    </ActionListStyled>
  )
}

const ActionListStyled = styled.div`
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
  @media screen and (min-width: 768px) {
    .grid {
      grid-template-columns: 480px 1fr 164px;
    }
  }
`
