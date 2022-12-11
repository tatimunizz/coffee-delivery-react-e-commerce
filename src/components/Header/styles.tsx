import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background: ${(props) => props.theme.background};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: clamp(0.5rem, 3vw, 2rem);
  padding-bottom: clamp(0.5rem, 3vw, 2rem);

  div {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    background: ${(props) => props.theme['purple-light']};
    padding: 0.5rem;
    border-radius: 6px;

    color: ${(props) => props.theme['purple']};
    font-size: ${(props) => props.theme.text.regular.s};
  }
`

export const CheckoutButton = styled.div`
      background: ${(props) => props.theme['yellow-light']};
      padding: 0.5rem;
      border-radius: 6px;
      color: ${(props) => props.theme['yellow-dark']};
      font-size: ${(props) => props.theme.text.regular.s};
`