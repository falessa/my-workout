import * as Crypto from 'expo-crypto';

const initialState = {}

// action constants
const CREATE_TEMPORAL_PLAN = 'CREATE_TEMPORAL_PLAN'
const UPDATE_TEMPORAL_PLAN = 'UPDATE_TEMPORAL_PLAN'
const DELETE_TEMPORAL_PLAN = 'DELETE_TEMPORAL_PLAN'
const ADD_EXERCISE_TO_DAY_PLAN = 'ADD_EXERCISE_TO_DAY_PLAN'

export const createTemporalPlan = temporalPlanData => ({
    type: CREATE_TEMPORAL_PLAN,
    payload: temporalPlanData
})

export const updateTemporalPlan = temporalPlanData => ({
    type: UPDATE_TEMPORAL_PLAN,
    payload: temporalPlanData
})

export const deletePlan = () => ({
    type: DELETE_TEMPORAL_PLAN,
})

export const addExerciseToDayPlan = exerciseData => ({
    type: ADD_EXERCISE_TO_DAY_PLAN,
    payload: exerciseData
})

export default (state = initialState, action) => {
    switch(action.type) {
        case CREATE_TEMPORAL_PLAN: {
            console.log('CREATE TEMPORAL PLAN')
            const newTemporalPlan = { ...action.payload, id: Crypto.randomUUID() }
            return newTemporalPlan
        }
        case UPDATE_TEMPORAL_PLAN: {
            console.log('UPDATING TEMPORAL PLAN')
            return action.payload
        }
        case DELETE_TEMPORAL_PLAN: {
            console.log('DELETING PLAN!!')
            return state
        }
        case ADD_EXERCISE_TO_DAY_PLAN: {
            const planDay = action.payload.day
            const name = action.payload.name
            const setDetails = action.payload.setDetails
            
            for (let i = 0; i < state.planDetails.length; i++) {
                if (state.planDetails[i].day === planDay) {
                    state.planDetails[i].exercises.push({name, setDetails})
                }
            }
        }
        default: {
            return state
        }
    }
}