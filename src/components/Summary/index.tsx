import { useContext } from 'react';
import incomeImage from '../../assets/income.svg';
import outcomeImage from '../../assets/outcome.svg';
import totalImage from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  });

  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImage} alt="Income" />
        </header>
        <strong className="deposit">
          {new Intl.NumberFormat('en-AU', {
            style: 'currency',
            currency: 'AUD'
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Expenses</p>
          <img src={outcomeImage} alt="Expenses" />
        </header>
        <strong className="withdraw">
          -
          {new Intl.NumberFormat('en-AU', {
          style: 'currency',
          currency: 'AUD'
        }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="total">
        <header>
          <p>Total</p>
          <img src={totalImage} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('en-AU', {
            style: 'currency',
            currency: 'AUD'
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  )
}