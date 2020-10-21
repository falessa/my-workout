import "react-native";
import React from "react";
import { create } from "react-test-renderer";
import ExercisesList from '../ExercisesList';

describe('ExercisesList tests', () => {
    const props = {
        exercises: [
            {
                name: "Squats",
                sets: "4",
                repetitions: "12",
                kgs: "5"
            },
            {
                name: "Pushups",
                sets: "3",
                repetitions: "15",
                kgs: "2"
            }
        ]
    }

    const wrapper = create(<ExercisesList {...props} />)

    test('Render ExercisesList', () => {
        expect(wrapper).toMatchSnapshot()
    })
})