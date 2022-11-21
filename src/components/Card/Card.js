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

  const handleCardholderName = (e) => {
     if(e.target.value.match(/^[a-zA-Z\s]+$/) === null){
      return
    } 

    const upperCaseName = e.target.value.toUpperCase();
    setCardholderName(upperCaseName);
  }

  const handleCardNumber = (e) => {

    if(e.target.value.match(/^[0-9]+$/) === null){
      return
    } 
    const trimmedNumber = e.target.value.trim()
    setCardNumber(trimmedNumber)
  }

  const handleCvvCode = (e) => {
    if(e.target.value.length > 3){
      return
    }
    setCvvCode(e.target.value)
  }

  const handleExpMonth = (e) => {
    if(e.target.value.length > 2){
      return
    }
    setExpMonth(e.target.value)
  }

  const handleExpYear = (e) => {
    if(e.target.value.length > 4){
      return
    }
    setExpYear(e.target.value)
  }


  return (
    <div className={`card ${flip ? "flip" : ""}`}>
      <form onSubmit={onSubmit} id="form">
        <div id="front" className={`card-front ${flip ? "flip" : ""}`}>
          <div>
            <button type="button" id="flip-btn" onClick={() => setFlip(!flip)}>Flip</button>
            
            <input required="true" type="tel" id="card-number" inputMode="numeric" pattern="[0-9\s]{16}" maxLength="16" placeholder="0000 0000 0000 0000" value={cardNumber} onChange={handleCardNumber}/>
          </div>

          <div className="ch-vthru">
            <div className="date-field">
                <label id="valid-thru">VALID THRU</label>
                  <div className="month-picker">
                    <input required="true" type="number" min="01" max="12" className="mm-yy" id="month" placeholder="MM" value={expMonth} onChange={handleExpMonth}/>
                  </div>
                  <div id="dash">/</div>
                  <div className="year-picker">
                    <input required="true" type="number" min="2018" max="2026" className="mm-yy" id="year" placeholder="YYYY" value={expYear} onChange={handleExpYear}/>
                  </div>
            </div>        
            
            <div>
                <label htmlFor="name" id="cardholder">CARDHOLDER</label>
                  <input required="true" type="text" id="name" placeholder="NAME SURNAME" value={cardholderName} onChange={handleCardholderName}/>
            </div>
          </div>

        </div> 

        <div id="back" className={`card-back ${flip ? "flip" : ""}`}> 
          <button type="button" id="flip-btn-back" onClick={() => setFlip(!flip)}>qilᖷ</button>
              <div className="cvv-field">
                <label htmlFor="cvv" id="cvv-text">VVƆ</label>
                  <input required="true" type="number" id="cvv" min="001" max="999" value={cvvCode} onChange={handleCvvCode}/> 
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
