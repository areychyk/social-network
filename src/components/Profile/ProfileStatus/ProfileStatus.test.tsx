
import React from "react";
import {create, ReactTestInstance} from "react-test-renderer";
import {ProfileStatus} from "./ProfileStatus";
// import {ProfileStatus} from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status={'sample'} updateUserStatus={()=>{}}/>);
        const instance:any = component.getInstance();
        expect(instance.state.status).toBe('sample')

    });
    test("status", () => {
        const component = create(<ProfileStatus status={'sample'} updateUserStatus={()=>{}}/>);
        const instance:any = component.root;
        const span = instance.findByType("span")
        expect(span.length).toBe(1)

    });
});
