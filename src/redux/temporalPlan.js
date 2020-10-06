const initialState = {}

// action constants
const CREATE_TEMPORAL_PLAN = 'CREATE_TEMPORAL_PLAN'
const DELETE_TEMPORAL_PLAN = 'DELETE_TEMPORAL_PLAN'

export const createTemporalPlan = temporalPlanData => ({
    type: CREATE_TEMPORAL_PLAN,
    payload: temporalPlanData
})

export const deletePlan = () => ({
    type: DELETE_TEMPORAL_PLAN,
})

export default (state = initialState, action) => {
    switch(action.type) {
        case CREATE_TEMPORAL_PLAN: {
            console.log('CREATE TEMPORAL PLAN')
            return action.payload
        }
        case DELETE_TEMPORAL_PLAN: {
            return initialState
        }
        default: {
            return state
        }
    }
}