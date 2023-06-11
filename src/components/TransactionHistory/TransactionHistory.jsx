import css from './TransactionHistory.module.css';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const TransactionRow = ({ key, type, amount, currency, index }) => {
  return (
    <tr
      key={key}
      style={{ backgroundColor: clsx(index % 2 ? 'white' : 'lightgrey') }}
    >
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export const TransactionHistory = props => {
  return (
    <>
      <table className={css.table}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {props.items.map((el, index) => (
            <TransactionRow
              key={el.id}
              type={el.type}
              amount={el.amount}
              currency={el.currency}
              index={index + 1}
            ></TransactionRow>
          ))}
        </tbody>
      </table>
    </>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
