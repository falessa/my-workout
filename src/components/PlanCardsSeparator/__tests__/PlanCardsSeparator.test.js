import "react-native";
import React from "react";
import { create } from "react-test-renderer";
import PlanCardsSeparator from '../PlanCardsSeparator';

describe('PlanCardsSeparator tests', () => {
    const wrapper = create(<PlanCardsSeparator />)

    test('Render PlanCardsSeparator', () => {
        expect(wrapper).toMatchSnapshot()
    })
})