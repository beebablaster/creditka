import React from 'react';
// import PropTypes from 'prop-types';
import './Table.css';
import {useSelector} from 'react-redux'

const Table = () => {
  const store = useSelector(store => store) 
  return(
    
      <table className="table">
        <tbody>
  <tr>
    <th>Cardholder</th>
    <th>Card Number</th>
    <th>Expiration Date</th>
    <th>CVV Code</th>
  </tr>
  {store.cards.card.map((item) => (
      <tr key={item.id} id="table-row">
           <td>{item.cardholderName}</td>
           <td>{item.cardNumber}</td>
           <td>{item.expMonth}/{item.expYear}</td>
           <td>{item.cvvCode}</td>
      </tr>
                    
       ))}
  </tbody>
</table>            
  )
}
;

// Table.propTypes = {};

// Table.defaultProps = {};

export default Table;
