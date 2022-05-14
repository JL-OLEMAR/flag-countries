import styled from 'styled-components'

export function Input ({ ...props }) {
  return (
    <InputStyled>
      <i className='fas fa-search' />
      <input type='text' {...props} />
    </InputStyled>
  )
}

const InputStyled = styled.label`
  display: inline-flex;
  background: var(--white);
  align-items: center;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
  padding: 0 2rem;
  border-radius: 5px;
  flex: 1;
  i {
    margin-right: 1em;
    color: #c4c4c4;
  }
  input {
    /* width: 100%; */
    flex: 1;
    border: none;
    height: 48px;
    line-height: 48px;
    font-size: 0.7em;
    outline: 0;
    color: var(--black);
    background: var(--white);
    &::-webkit-input-placeholder {
      color: #c4c4c4;
    }
  }
`
