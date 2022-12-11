import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { AddButton, Category, Description, Details, Price, ProductCard, ProductsAreaContainer, ProductsList, Quantity, Tag, Title } from "./styles";
import img from '../../../../assets/coffee1.png'

export function ProductsArea() {
  return(
    <ProductsAreaContainer>
    <h2>Nossos cafés</h2>
    <ProductsList>
      <ProductCard>
        <img src={img} alt="" />
        <Category>
          <Tag>Especial</Tag>
          <Tag>Alcoólico</Tag>
        </Category>
        <Title>Expresso Tradicional</Title>
        <Description>O tradicional café feito com água quente e grãos moídos</Description>
        <Details>
          <Price>9,90</Price>
          <Quantity>
            <Minus  weight="bold" size={14} color="#8047F8" cursor="pointer" alt="Minus button" />
            1
            <Plus weight="bold" size={14} color="#8047F8" cursor="pointer" alt="Plus button" />
          </Quantity>
          <AddButton >
            <ShoppingCart weight="fill" size={22} alt="Add to cart" />
          </AddButton>
        </Details>
      </ProductCard>

      <ProductCard>
        <img src={img} alt="" />
        <Category>
          <Tag>Alcoólico</Tag>
        </Category>
        <Title>Expresso Tradicional</Title>
        <Description>O tradicional café feito com água quente e grãos moídos</Description>
        <Details>
          <Price>9,90</Price>
          <Quantity>
            <Minus  weight="bold" size={14} color="#8047F8" cursor="pointer" alt="Minus button" />
            1
            <Plus weight="bold" size={14} color="#8047F8" cursor="pointer" alt="Plus button" />
          </Quantity>
          <AddButton >
            <ShoppingCart weight="fill" size={22} alt="Add to cart" />
          </AddButton>
        </Details>
      </ProductCard>

      <ProductCard>
        <img src={img} alt="" />
        <Category>
          <Tag>Especial</Tag>
        </Category>
        <Title>Expresso Tradicional</Title>
        <Description>O tradicional café feito com água quente e grãos moídos</Description>
        <Details>
          <Price>9,90</Price>
          <Quantity>
            <Minus  weight="bold" size={14} color="#8047F8" cursor="pointer" alt="Minus button" />
            1
            <Plus weight="bold" size={14} color="#8047F8" cursor="pointer" alt="Plus button" />
          </Quantity>
          <AddButton >
            <ShoppingCart weight="fill" size={22} alt="Add to cart" />
          </AddButton>
        </Details>
      </ProductCard>

      <ProductCard>
        <img src={img} alt="" />
        <Category>
          <Tag>Especial</Tag>
          <Tag>Alcoólico</Tag>
          <Tag>Gelado</Tag>
        </Category>
        <Title>Expresso Tradicional</Title>
        <Description>O tradicional café feito com água quente e grãos moídos</Description>
        <Details>
          <Price>9,90</Price>
          <Quantity>
            <Minus  weight="bold" size={14} color="#8047F8" cursor="pointer" alt="Minus button" />
            1
            <Plus weight="bold" size={14} color="#8047F8" cursor="pointer" alt="Plus button" />
          </Quantity>
          <AddButton >
            <ShoppingCart weight="fill" size={22} alt="Add to cart" />
          </AddButton>
        </Details>
      </ProductCard>
      
      <ProductCard>
        <img src={img} alt="" />
        <Category>
          <Tag>Especial</Tag>
          <Tag>Alcoólico</Tag>
          <Tag>Gelado</Tag>
        </Category>
        <Title>Expresso Tradicional</Title>
        <Description>O tradicional café feito com água quente e grãos moídos</Description>
        <Details>
          <Price>9,90</Price>
          <Quantity>
            <Minus  weight="bold" size={14} color="#8047F8" cursor="pointer" alt="Minus button" />
            1
            <Plus weight="bold" size={14} color="#8047F8" cursor="pointer" alt="Plus button" />
          </Quantity>
          <AddButton >
            <ShoppingCart weight="fill" size={22} alt="Add to cart" />
          </AddButton>
        </Details>
      </ProductCard>
    </ProductsList>
    </ProductsAreaContainer>
  )
}