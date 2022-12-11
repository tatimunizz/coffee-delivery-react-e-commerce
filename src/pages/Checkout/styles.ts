import styled from 'styled-components'

export const CheckoutContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;;
  gap: 1rem;
  font-size: clamp(${props => props.theme.title.s}, 3vw ,${props => props.theme.title.l});
  opacity: 0.2;
  color: ${props => props.theme['base-label']}
`
