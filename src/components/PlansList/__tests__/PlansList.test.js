import "react-native";
import React from "react";
import { create } from "react-test-renderer";
import PlansList from '../PlansList';

describe('PlansList tests', () => {
    const props = {
        plans: [
            {
                id: "92fx027h-0f27-38g2-93s1-b93829l29u38",
                name: "Workout test plan 1",
                daysPerWeek: "2",
                creationDate: "October 19th 2020"
            },
            {
                id: "03ge983g-2a92-01q7-83r4-a79032h87s10",
                name: "Workout test plan 2",
                daysPerWeek: "4",
                creationDate: "October 21st 2020"
            }
        ],
        navigation: () =>{
            // nothing
        }
    }

    const wrapper = create(<PlansList {...props} />)

    test('Render PlansList', () => {
        expect(wrapper).toMatchSnapshot()
    })
})