import "react-native";
import React from "react";
import { create } from "react-test-renderer";
import ListMenuOptionNavigatable from '../ListMenuOptionNavigatable';

describe.skip('ListMenuOptionNavigatable tests', () => {
    const props = {
        options: [
            "Option 1",
            "Option 2",
            "Option 3"
        ],
        navigation: () => {
            // nothing
        }
    }

    const wrapper = create(<ListMenuOptionNavigatable {...props} />)

    test('Render ListMenuOptionNavigatable', () => {
        expect(wrapper).toMatchSnapshot()
    })
})