import "react-native";
import React from "react";
import { create } from "react-test-renderer";
import PlanCard from '../PlanCard';

describe('PlanCard tests', () => {
    const props = {
        planData: {
            name: "test plan",
            daysPerWeek: "3",
            creationDate: "October 21st, 2020"
        },
        onPress: () => {
            // do nothing on press
        }
    }

    const wrapper = create(<PlanCard {...props} />)

    test('Render PlanCard', () => {
        expect(wrapper).toMatchSnapshot()
    })
})