const initialState = [
    { id: '1', name: 'Plan September 2020', exercises: 'this should be an array'}
]

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
            return [action.payload].concat(state)
        }
        case DELETE_PLAN: {
            console.log('DELETE PLAN')
            return state // define logic
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