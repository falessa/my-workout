import "react-native";
import React from "react";
import { create } from "react-test-renderer";
import NoExercises from '../NoExercises';

describe('NoExercises tests', () => {
    const props = {
        day: 2
    }

    const wrapper = create(<NoExercises {...props} />)

    test('Render NoExercises', () => {
        expect(wrapper).toMatchSnapshot()
    })
})