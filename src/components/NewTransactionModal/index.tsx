import { useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Close modal" />
      </button>

      <Container>
        <h2>New transaction</h2>

        <input
          placeholder="Title"
        />

        <input
          type="number"
          placeholder="Value"
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            isActive={type === 'deposit'}
            onClick={() => { setType('deposit') }}
            activeColor="green"
          >
            <img src={incomeImg} alt="Income" />
            <span>Income</span>
          </RadioBox>

          <RadioBox
            type="button"
            isActive={type === 'withdraw'}
            onClick={() => { setType('withdraw') }}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Expense" />
            <span>Expense</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Category"
        />

        <button type="submit">
          Add
        </button>
      </Container>

    </Modal>
  );
}