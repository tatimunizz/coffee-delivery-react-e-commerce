import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.svg'
import { CheckoutButton, HeaderContainer } from './styles'

export function Header() {
  return(
    <HeaderContainer>
      <Link to="/" title="Home">
        <img src={logo} alt="Home" />
      </Link>
      <div>
        <span>
          <MapPin weight='fill' size={22} />
          Bandirma, TR
        </span>
        <CheckoutButton>
          <Link to="/checkout" title="Checkout" className='checkout'>
            <ShoppingCart size={22} weight="fill" color='#C47F17' />
          </Link>
        </CheckoutButton>
      </div>
    </HeaderContainer>
  )
}