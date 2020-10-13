var moment = require('moment')

const initialState = []

// action constants
const ADD_PLAN = 'ADD_PLAN'
const DELETE_PLAN = 'DELETE_PLAN'
const RESTORE_PLANS = 'RESTORE_PLANS'

export const addPlan = plan => ({
    type: ADD_PLAN,
    payload: plan
})

export const deletePlan = idPlan => ({
    type: DELETE_PLAN,
    id: idPlan
})

// temporal just for testing
export const resetPlansToInitialState = () => ({
    type: RESTORE_PLANS
})

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLAN: {
            console.log('ADD PLAN')
            const newPlan = {...action.payload, creationDate: moment().format('MMMM Do YYYY, h:mm a')}
            return [newPlan].concat(state)
        }
        case DELETE_PLAN: {
            console.log('DELETE PLAN')
            return state // TODO: define logic
        }
        case RESTORE_PLANS: {
            console.log('RESTORING PLANS TO INITIAL STATE (testing purposes)')
            return initialState
        }
        default: {
            return state
        }
    }
}