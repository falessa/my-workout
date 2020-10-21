import "react-native";
import React from "react";
import { create } from "react-test-renderer";
import ExerciseCard from '../ExerciseCard';

describe('ExerciseCard tests', () => {
    const props = {
        exerciseData: {
            name: "Squats",
            sets: "4",
            repetitions: "12",
            kgs: "5"
        }
    }

    const wrapper = create(<ExerciseCard {...props} />)

    test('Render ExerciseCard', () => {
        expect(wrapper).toMatchSnapshot()
    })
})