import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


export function TransactionsTable() {

  useEffect(() => {
    api.get('/transactions')
    .then(response => console.log(response.data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Computador</td>
            <td className="deposit">R$ 5.300</td>
            <td>Tecnologia</td>
            <td>18/05/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$800</td>
            <td>Casa</td>
            <td>11/05/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}

