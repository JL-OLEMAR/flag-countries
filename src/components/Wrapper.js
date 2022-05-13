import styled from 'styled-components'

export function Wrapper ({ children }) {
  return (
    <WrapperStyled>
      {children}
    </WrapperStyled>
  )
}

const WrapperStyled = styled.div`
  max-width: 1312px;
  margin: auto;
  padding: 0 1rem;
`
