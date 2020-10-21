var moment = require('moment')

const initialState = []

// action constants
const ADD_PLAN = 'ADD_PLAN'
const UPDATE_PLAN = 'UPDATE_PLAN'
const DELETE_PLAN = 'DELETE_PLAN'
const RESTORE_PLANS = 'RESTORE_PLANS'

export const addPlan = plan => ({
    type: ADD_PLAN,
    payload: plan
})

export const updatePlan = planUpdated => ({
    type: UPDATE_PLAN,
    payload: planUpdated
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
            // const isPlanExisting = state.filter(plan => plan.id === action.payload.id)[0] ? true : false
            const existingIndex = state.findIndex(plan => plan.id == action.payload.id)
            const existingPlanWithSameId = state.filter(plan => plan.id === action.payload.id)[0]
            console.log('existingPlanWithSameId ', existingPlanWithSameId)
            if (existingIndex >= 0) {
                // console.log(action.payload)
                console.log('CURRENT STATE BEFORE SAVING IS: ')
                console.log(state)
                console.log('END OF CURRENT STATE')
                // state = state
                // const newState = state
                return state
                // return state[existingPlanWithSameId] = action.payload
            } else {
                const newPlan = {...action.payload, creationDate: moment().format('MMMM Do YYYY, h:mm a')}
                return [newPlan].concat(state)
            }
        }
        case UPDATE_PLAN: {
            console.log('UPDATING PLAN')
            const updatedPlan = { ...action.payload }
            return updatedPlan
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