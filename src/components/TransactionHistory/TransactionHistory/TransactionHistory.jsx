import PropTypes from 'prop-types';
import {
  TransactionTable,
  TransactionTitle,
} from './TransactionHistory.styled';

import TransactionItem from '../TransactionItem/TransactionItem';
export default function TransactionHistory({ items }) {
  return (
    <TransactionTable className="transaction-history">
      <thead>
        <TransactionTitle>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TransactionTitle>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          ></TransactionItem>
        ))}
      </tbody>
    </TransactionTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
