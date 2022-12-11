import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { IconContainer, IntroCardContainer, IntroInformation, SideImage } from "./styles";

export function IntroCard() {
  return(
    <IntroCardContainer>
      <IntroInformation>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        <ul>
           <li>
            <IconContainer backgroundColor="darkYellow">
              <ShoppingCart weight="fill" size={16} />
            </IconContainer>
            Compra simples e segura
           </li>
           <li>
            <IconContainer backgroundColor="darkGray">
              <Package weight="fill" size={16} />
            </IconContainer>
            Embalagem mantém o café intacto
           </li>
           <li>
            <IconContainer backgroundColor="yellow">
              <Timer weight="fill" size={16} />
            </IconContainer>
            Entrega rápida e rastreada
           </li>
           <li>
            <IconContainer backgroundColor="purple">
              <Coffee weight="fill" size={16} />
            </IconContainer>
            O café chega fresquinho até você
           </li>
        </ul>
      </IntroInformation>
      <SideImage />
    </IntroCardContainer>
  )
}