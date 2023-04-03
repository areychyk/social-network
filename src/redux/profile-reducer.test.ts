
import {addPostActionCreator, profileReducer} from "./profile-reducer";
import {PropsTypeProfile} from "./redux-store";

test('new post should be added',()=>{
    let action=addPostActionCreator('bla-bla')


        let state: PropsTypeProfile = {
        post: [
            {id: 1, message: "message1", like: 15},
            {id: 2, message: "message2", like: 20},
            {id: 3, message: "message3", like: 21},

        ],
        profile: null,
        status: ''

    }

    let newState=profileReducer(state,action)

   expect(newState.post.length).toBe(4)
})