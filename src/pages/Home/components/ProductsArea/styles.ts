import styled from 'styled-components'

export const ProductsAreaContainer = styled.header`
display: flex;
flex-direction: column;
margin-top: 2rem;

h2 {
  font-size: clamp(${(props) => props.theme.title.m}, 3vw, ${(props) => props.theme.title.l});
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
}
`

export const ProductsList = styled.ul`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  padding-top: 2.8125rem;
  gap: 2rem;
  
  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`

export const ProductCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  width: 16rem;
  min-width: 16rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;
  padding: 0 1.25rem 1.25rem 1.25rem;
  
  img {
    margin-top: -1.25rem;
  }

`

export const Category = styled.span`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  margin-top: 0.75rem;
  margin-bottom: 1rem;

  color: ${(props) => props.theme['yellow-dark']};
  font-size: ${(props) => props.theme.components.tag};
  line-height: 160%;
  font-weight: bold;
  text-transform: uppercase;

`
export const Tag = styled.span`
    background: ${(props) => props.theme['yellow-light']};
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
`

export const Title = styled.h3`
  font-size: ${(props) => props.theme.title.s};
  color:${(props) => props.theme['base-subtitle']};
  margin-bottom: 0.5rem;
`

export const Description = styled.span`
  font-size: ${(props) => props.theme.text.regular.s};
  text-align: center;
  color: ${(props) => props.theme['base-label']};
  margin-bottom: 2.0625rem;
`

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  justify-content: space-between;
`

export const Price = styled.div`
  flex: 1;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: ${(props) => props.theme.title.m};

  ::before {
    content: 'R$ ';
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: ${(props) => props.theme.text.regular.s};
  }
`

export const Quantity = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-title']};
  font-size: ${(props) => props.theme.text.regular.m};
  padding: 0.5rem;
  border-radius: 6px;
`

export const AddButton = styled.button`
  border: none;
  cursor: pointer;
  background: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;
  padding: 0.5rem 0.5rem 0.25rem 0.5rem;
  color: ${(props) => props.theme['base-card']};
`