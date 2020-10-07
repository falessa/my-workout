const initialState = [
    { 
        id: '1', 
        name: 'Plan September 2020',
        daysPerWeek:'3',
        planDetails: [
            {
                musclesZone: 'Femorales y gluteos',
                day: 1,
                exercises: [
                    {
                        name: 'Peso muerto piernas semiflexionadas',
                        sets: 4,
                        repetitions: 12,
                        kgs: 10
                    },
                    {
                        name: 'Peso muerto a 1 pierna + extension de cadera en cajon',
                        sets: 3,
                        repetitions: '12 + 15',
                        kgs: 10
                    }
                ],
            },
            {
                musclesZone: 'Tren superior',
                day: 2,
                exercises: [
                    {
                        name: 'Press plano + remo con mancuernas',
                        sets: 4,
                        repetitions: '12 + 12',
                        kgs: 6
                    },
                    {
                        name: 'Apertura inclinada + remo invertido TRX',
                        sets: 3,
                        repetitions: '12 + 8/12',
                        kgs: 10
                    }
                ],
            },
        ],
        creationDate: '24/08/2020'
    }
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