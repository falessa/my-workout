import "react-native";
import React from "react";
import { create } from "react-test-renderer";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ListMenuOptionSelectable from '../ListMenuOptionSelectable';

describe('ListMenuOptionSelectable tests', () => {
    const props = {
        options: [
            "Selectable Option 1",
            "Selectable Option 2",
            "Selectable Option 3"
        ]
    };

    const mockStore = configureStore([]);
    const store = mockStore({
        settings: {
            language: 'en'
        }
    });

    const wrapper = create(
        <Provider store={store}>
            <ListMenuOptionSelectable {...props} />
        </Provider>
    );

    test('Render ListMenuOptionSelectable', () => {
        expect(wrapper).toMatchSnapshot()
    });
});
