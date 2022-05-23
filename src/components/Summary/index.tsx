import { ArrowDown } from "../../assets/ArrowDown";
import { ArrowUp } from "../../assets/ArrowUp";
import Money from "../../assets/Money";
import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entrada</p>
          <ArrowUp/>
        </header>
        <strong> R$1000</strong>
      </div>
      <div>
        <header>
          <p>Saida</p>
          <ArrowDown/>
        </header>
        <strong>- R$500</strong>
      </div>
      <div className="highlight-green">
        <header>
          <p>Total</p>
          <Money/>
        </header>
        <strong> R$500</strong>
      </div>
    </Container>
  )
}