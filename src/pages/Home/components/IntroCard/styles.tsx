import styled from 'styled-components'
import introBackgroundImage from '../../../../assets/introBackground.svg'
import introImage from '../../../../assets/introImage.png'

export const IntroCardContainer = styled.header`
  /* background-image: url(${introBackgroundImage});
  background-position: center;
  background-size: cover; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const IntroInformation = styled.div`
  h1 {
    font-size: clamp(${(props) => props.theme.title.l}, 3vw , ${(props) => props.theme.title.xl});
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: clamp(${(props) => props.theme.text.regular.m}, 3vw, ${(props) => props.theme.text.regular.l});
    margin-top: 1rem;
    margin-bottom: 3rem;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-column-gap: clamp(0.5rem, 3vw, 1.25rem);
    grid-row-gap: clamp(0.5rem, 3vw, 1.25rem);
  }

  li {
    min-width: inherit;
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: start;
    gap: clamp(0.5rem, 3vw, 0.75rem);
    font-size: clamp(${(props) => props.theme.text.regular.xs}, 3vw, ${(props) => props.theme.text.regular.m});
    color: ${(props) => props.theme['base-text']};
  }

  
   @media (min-width: 1024px) {
    width: 50%;
  }
`
const BACKGROUND_COLOR = {
  darkYellow: 'yellow-dark',
  darkGray: 'base-text',
  yellow: 'yellow',
  purple: 'purple'
} as const

interface IconContainerProps {
  backgroundColor: keyof typeof BACKGROUND_COLOR,
}

export const IconContainer = styled.div<IconContainerProps>`
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.background};
  background: ${(props) => props.theme[BACKGROUND_COLOR[props.backgroundColor]]};
`

export const SideImage = styled.div`
  display: none;

   @media (min-width: 1024px) {
    display: block;
    width: 476px;
    height: 360px;
    background-image: url(${introImage});
    background-size: cover;
  }
/*
  @media (min-width: 1300px) {
    flex-grow: 0;
    width: 29.75rem;
    height: 22.5rem;
  } */
`