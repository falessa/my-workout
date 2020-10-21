import "react-native";
import React from "react";
import { create } from "react-test-renderer";
import NoPlans from '../NoPlans';

describe('NoPlans tests', () => {
    const props = {
        onPress: () =>{
            // nothing
        }
    }

    const wrapper = create(<NoPlans {...props} />)

    test('Render NoPlans', () => {
        expect(wrapper).toMatchSnapshot()
    })
})