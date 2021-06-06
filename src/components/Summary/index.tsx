import incomeImage from '../../assets/income.svg';
import outcomeImage from '../../assets/outcome.svg';
import totalImage from '../../assets/total.svg';

import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImage} alt="Income" />
        </header>
        <strong>$1000.00</strong>
      </div>
      <div>
        <header>
          <p>Expenses</p>
          <img src={outcomeImage} alt="Expenses" />
        </header>
        <strong>$1000.00</strong>
      </div>
      <div className="total">
        <header>
          <p>Total</p>
          <img src={totalImage} alt="Total" />
        </header>
        <strong>$1000.00</strong>
      </div>
    </Container>
  )
}