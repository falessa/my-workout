import { createSlice } from "@reduxjs/toolkit";
import * as Crypto from 'expo-crypto';

const initialState = {};

const temporalPlanSlice = createSlice({
    name: "temporalPlan",
    initialState: initialState,
    reducers: {
        createTemporalPlan: (state, action) => {
            console.log('CREATE TEMPORAL PLAN - SLICE')
            const newTemporalPlan = { ...action.payload, id: Crypto.randomUUID() }
            return newTemporalPlan
        },
        updateTemporalPlan: (state, action) => {
            // TODO: check if necessary, migrated with existing code
            // console.log('UPDATING TEMPORAL PLAN')
            // return action.payload
        },
        deleteTemporalPlan: (state, action) => {
            // TODO: check if necessary, migrated with existing code
            // console.log('DELETING TEMPORAL PLAN')
            // return initialState
        },
        addExerciseToDayPlan: (state, action) => {
            console.log('ADD EXERCISE TO DAY PLAN - SLICE', action.payload)
            const planDay = action.payload.day
            const name = action.payload.name
            const setDetails = action.payload.setDetails
            
            for (let i = 0; i < state.planDetails.length; i++) {
                if (state.planDetails[i].day === planDay) {
                    state.planDetails[i].exercises.push({name, setDetails})
                }
            }
        },
    }
});

export const { createTemporalPlan, updateTemporalPlan, deleteTemporalPlan, addExerciseToDayPlan } = temporalPlanSlice.actions;

export default temporalPlanSlice.reducer;