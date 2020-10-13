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
            return action.payload
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
            console.log('ADD EXERCISE TO DAY PLAN')
            console.log(action.payload)
            const planDay = action.payload.day
            const name = action.payload.name
            const repetitions = action.payload.repetitions
            const sets = action.payload.sets
            const kgs = action.payload.kgs
            
            console.log('STATE IS ')
            // console.log(state.planDetails)
            // const filteredExercises = planDetails.filter(planDays => planDays.day === daySelected).map(planForDay => planForDay.exercises)[0]
            // const newState = state.planDetails.filter(planDays => planDays.day === planDay)

            for (let i = 0; i < state.planDetails.length; i++) {
                if (state.planDetails[i].day === planDay) {
                    state.planDetails[i].exercises.push({name, repetitions, sets, kgs})
                }
            }
            
            console.log(state)
        }
        default: {
            return state
        }
    }
}