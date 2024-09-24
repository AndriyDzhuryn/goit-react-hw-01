import style from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={style.table_transaction}>
      <thead>
        <tr className={style.table_title}>
          <th className={style.transaction_title}>Type</th>
          <th className={style.transaction_title}>Amount</th>
          <th className={style.transaction_title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(transaction => {
          return (
            <tr className={style.transaction_item} key={transaction.id}>
              <td className={style.transaction_title}>{transaction.type}</td>
              <td className={style.transaction_title}>{transaction.amount}</td>
              <td className={style.transaction_title}>
                {transaction.currency}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
