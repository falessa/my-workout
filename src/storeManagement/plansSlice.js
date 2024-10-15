import { createSlice } from '@reduxjs/toolkit'

var moment = require('moment')

const initialState = []

const plansSlice = createSlice({
    name: "plans",
    initialState: initialState,
    reducers: {
        addPlan: (state, action) => {
            console.log('ADD PLAN')
            const newPlan = {...action.payload, creationDate: moment().format('MMMM Do YYYY, h:mm a')}
            return [newPlan].concat(state)
        },
        deletePlan: (state) => {
            console.log('DELETE PLAN')
            return state // TODO: define logic
        },
        resetPlansToInitialState: (state) => {
            console.log('RESTORING PLANS TO INITIAL STATE (testing purposes)')
            return initialState
        }
    }
});

export const { addPlan, deletePlan, resetPlansToInitialState } = plansSlice.actions

export default plansSlice.reducer