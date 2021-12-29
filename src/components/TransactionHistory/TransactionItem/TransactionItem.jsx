import PropTypes from 'prop-types';
import { TransactionTr, TransactionTd } from './TransactionItem.style';
export default function TransactionItem({ type, amount, currency }) {
  return (
    <TransactionTr>
      <TransactionTd>{type}</TransactionTd>
      <TransactionTd>{amount}</TransactionTd>
      <TransactionTd>{currency}</TransactionTd>
    </TransactionTr>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
