import { configureStore } from '@reduxjs/toolkit'
import burgerReducer from './features/burger/burgerSlice'
import saladReducer from './features/salad/saladSlice'

const store = configureStore({
    reducer: {
        burger: burgerReducer,
        salad: saladReducer
    }
})

export default store