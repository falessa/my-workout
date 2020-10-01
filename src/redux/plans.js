const initialState = [
    { id: '1', name: 'Plan September 2020', exercises: 'this should be an array'}
]

// action constants
const ADD_PLAN = 'ADD_PLAN'
const DELETE_PLAN = 'DELETE_PLAN'

export const addPlan = plan => ({
    type: ADD_PLAN,
    payload: plan
})

export const deletePlan = idPlan => ({
    type: DELETE_PLAN,
    id: idPlan
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
        default: {
            return state
        }
    }
}