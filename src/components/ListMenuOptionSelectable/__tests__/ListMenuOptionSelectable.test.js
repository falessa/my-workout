import "react-native";
import React from "react";
import { create } from "react-test-renderer";
import ListMenuOptionSelectable from '../ListMenuOptionSelectable';

describe.skip('ListMenuOptionSelectable tests', () => {
    const props = {
        options: [
            "Selectable Option 1",
            "Selectable Option 2",
            "Selectable Option 3"
        ]
    }

    const wrapper = create(<ListMenuOptionSelectable {...props} />)

    test('Render ListMenuOptionSelectable', () => {
        expect(wrapper).toMatchSnapshot()
    })
})