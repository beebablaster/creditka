import {React, useState} from 'react';
import './Card.css';
import {useDispatch} from 'react-redux'


const Card = () => {
  const dispatch = useDispatch()
  const [cardNumber, setCardNumber] = useState('')
  const [expMonth, setExpMonth] = useState('')
  const [expYear, setExpYear] = useState('')
  const [cardholderName, setCardholderName] = useState('')
  const [cvvCode, setCvvCode] = useState('')
  const [flip, setFlip] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
        const card = {
            'cardNumber': cardNumber, 
            'expMonth': expMonth,
            'expYear': expYear,
            'cardholderName': cardholderName,
            'cvvCode': cvvCode
        }
    dispatch({type: 'add', payload: card})
    setCardNumber('')
    setExpMonth('')
    setExpYear('')
    setCardholderName('')
    setCvvCode('')
        console.log('am here')
       
  }

  return (
    <div className={`card ${flip ? "flip" : ""}`}>
      <form onSubmit={onSubmit} id="form">
        <div id="front" className={`card-front ${flip ? "flip" : ""}`}>
          <div>
            <button type="button" id="flip-btn" onClick={() => setFlip(!flip)}>Flip</button>
            
            <input required="true" type="tel" id="card-number" inputtype="numeric" pattern="[0-9\s]{19}" maxLength="19" placeholder="0000 0000 0000 0000" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)}/>
          </div>

          <div className="ch-vthru">
            <div className="date-field">
                <label id="valid-thru">VALID THRU</label>
                  <div className="month-picker">
                    <input required="true" type="number" min="01" max="12" className="mm-yy" id="month" placeholder="MM" value={expMonth} onChange={(e) => setExpMonth(e.target.value)}/>
                  </div>
                  <div id="dash">/</div>
                  <div className="year-picker">
                    <input required="true" type="number" min="2018" max="2026" className="mm-yy" id="year" placeholder="YYYY" value={expYear} onChange={(e) => setExpYear(e.target.value)}/>
                  </div>
            </div>        
            
            <div>
                <label htmlFor="name" id="cardholder">CARDHOLDER</label>
                  <input required="true" type="text" id="name" pattern="^[A-Z][a-z]+\s[A-Z][a-z]+$" placeholder="DAMYR SYMDYKOV" value={cardholderName} onChange={(e) => setCardholderName(e.target.value)}/>
            </div>
          </div>

        </div> 

        <div id="back" className={`card-back ${flip ? "flip" : ""}`}> 
          <button type="button" id="flip-btn-back" onClick={() => setFlip(!flip)}>qilᖷ</button>
              <div className="cvv-field">
                <label htmlFor="cvv" id="cvv-text">VVƆ</label>
                  <input required="true" type="number" id="cvv" maxLength={3} value={cvvCode} onChange={(e) => setCvvCode(e.target.value)}/> 
              </div>
              <div className="submit-btn">
                  <input type="submit" id="submit-button" value="bbA"/>
              </div>           
        </div> 
    </form>
    </div> 
  )
}

export default Card;
