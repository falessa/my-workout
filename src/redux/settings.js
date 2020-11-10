const initialState = {}

// action constants
const SET_LANGUAGE = 'SET_LANGUAGE'

export const setLanguage = plan => ({
    type: SET_LANGUAGE,
    payload: plan
})

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_LANGUAGE: {
            // console.log('ACTION')
            // console.log(action)
            // console.log('STATE')
            // console.log(state)
            return { language: action.payload }
        }
        default: {
            return state
        }
    }
}