import { configureStore } from '@reduxjs/toolkit'

const initState = {
    card: []
}

const cardReducer = (state = initState, action) => {
    if(action.type === 'add'){
        const card = action.payload
        return { 
            ...state,
            card: state.card.concat(card)
        }
    }
    return state
}


export const cardStore = configureStore({
  reducer: {
    cards: cardReducer
  },
  devTools: true
})