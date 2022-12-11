import { IntroCard } from "./components/IntroCard";
import { ProductsArea } from "./components/ProductsArea";
import { HomeContainer } from "./styles";

export function Home() {
  return(
    <HomeContainer>
      <IntroCard />
      <ProductsArea />
    </HomeContainer>
  )
}