import {addPostActionCreator, deletePostActionCreator, profileReducer} from "./profile-reducer";
import {PropsTypeProfile} from "./redux-store";


let state: PropsTypeProfile = {
    post: [
        {id: 1, message: "message1", like: 15},
        {id: 2, message: "message2", like: 20},
        {id: 3, message: "message3", like: 21},

    ],
    profile: null,
    status: ''

}

test('length of post should be increment', () => {
    let action = addPostActionCreator('bla')
    let newState = profileReducer(state, action)
    expect(newState.post.length).toBe(4)
})


test('new post should be added', () => {
    let action = addPostActionCreator('bla')
    let newState = profileReducer(state, action)
    expect(newState.post[3].message).toBe('bla')
})


test('after deleting length of message should be decrement', () => {
    let action = deletePostActionCreator(1)
    let newState = profileReducer(state, action)
    expect(newState.post.length).toBe(2)
})