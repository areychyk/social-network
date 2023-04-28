import {
    ActionsType,
    AddPostActionType, PhotosType,
    ProfileType,
    PropsTypeProfile,
} from "./redux-store";
import {Dispatch} from "redux";
import {profileAPI} from "api/api";


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';



export type SetUsersProfileActionType = {
    type: 'SET-USER-PROFILE'
    profile: ProfileType | null
}
export type SetUsersStatusActionType = {
    type: 'SET-USER-STATUS'
    status: string
}

export type deletePostActionType = ReturnType<typeof deletePostActionCreator>
export type setPhotosProfileActionType = ReturnType<typeof savePhotoSuccess>


let initialState: PropsTypeProfile = {
    post: [
        {id: 1, message: "message1", like: 15},
        {id: 2, message: "message2", like: 20},
        {id: 3, message: "message3", like: 21},

    ],
    profile: undefined,
    status: ''
};


export const profileReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.post.length + 1,
                message: action.newPostText,
                like: 0
            };
            return {
                ...state,
                post: [...state.post, newPost]

            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {...state, status: action.status}
        case "DELETE-POST":
            return {...state, post:state.post.filter(p=>p.id!==action.idPost)}
        case "SET_PHOTOS_PROFILE":
            return {...state,profile:{...state.profile,photos:action.photos}}

        default:
            return state

    }


}


//Action Create

export const addPostActionCreator = (newPostText: string): AddPostActionType => ({type: ADD_POST, newPostText})

export const setUserProfile = (profile: ProfileType): SetUsersProfileActionType => ({
    type: SET_USER_PROFILE,
    profile

})

export const setUserStatus = (status: string): SetUsersStatusActionType => ({
    type: SET_USER_STATUS,
    status

})


export const deletePostActionCreator = (idPost: number) => ({type: "DELETE-POST" , idPost} as const)
export const savePhotoSuccess = (photos: PhotosType) => ({type: "SET_PHOTOS_PROFILE" , photos} as const)

//Thunk

export const getUser = (userId: string) => {
    return async (dispatch: Dispatch) => {
        let response = await profileAPI.getProfile(userId);
        dispatch(setUserProfile(response.data))

    }
}

export const getUserStatus = (userId: string) => {
    return async (dispatch: Dispatch) => {
        let response = await profileAPI.getStatus(userId);
        dispatch(setUserStatus(response.data))
    }
}

export const updateUserStatus = (status: string) => {
    return async (dispatch: Dispatch) => {
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    }
}

export const savePhoto = (file:File) => {
    return async (dispatch: Dispatch) => {
        let response = await profileAPI.savePhoto(file);
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos))
        }
    }
}


// import {
//     ActionsType,
//     AddPostActionType, PhotosType,
//     ProfileType,
//     PropsTypeProfile,
// } from "./redux-store";
// import {Dispatch} from "redux";
// import {profileAPI} from "api/api";
//
//
//
//
// const ADD_POST = 'ADD-POST';
// const SET_USER_PROFILE = 'SET-USER-PROFILE';
// const SET_USER_STATUS = 'SET-USER-STATUS';
//
//
// export type SetUsersProfileActionType = {
//     type: 'SET-USER-PROFILE'
//     profile: ProfileType | null
// }
// export type SetUsersStatusActionType = {
//     type: 'SET-USER-STATUS'
//     status: string
// }
// export type SetProfilePhotoType = {
//     type: 'SET-PROFILE-PHOTO'
//     photo: PhotosType
// }
// export type deletePostActionType = ReturnType<typeof deletePostActionCreator>
//
//
// let initialState: PropsTypeProfile = {
//     post: [
//         {id: 1, message: "message1", like: 15},
//         {id: 2, message: "message2", like: 20},
//         {id: 3, message: "message3", like: 21},
//
//     ],
//     profile: null,
//     status: ''
// };
//
//
// export const profileReducer = (state = initialState, action: ActionsType) => {
//     switch (action.type) {
//         case ADD_POST:
//             let newPost = {
//                 id: state.post.length + 1,
//                 message: action.newPostText,
//                 like: 0
//             };
//             return {
//                 ...state,
//                 post: [...state.post, newPost]
//
//             }
//
//
//         case SET_USER_PROFILE:
//             return {
//                 ...state,
//                 profile: action.profile
//             }
//         case SET_USER_STATUS:
//             return {...state, status: action.status}
//
//         case "DELETE-POST":
//             return {...state, post:state.post.filter(p=>p.id!==action.idPost)}
//
//         case "SET-PROFILE-PHOTO":
//             return {...state, profile: {...state.profile, photos: action.photo}}
//
//
//         default:
//             return state
//
//     }
//
//
// }
//
//
// //Action Create
//
// export const addPostActionCreator = (newPostText: string): AddPostActionType => ({type: ADD_POST, newPostText})
//
// export const setUserProfile = (profile: ProfileType): SetUsersProfileActionType => ({
//     type: SET_USER_PROFILE,
//     profile
//
// })
//
// export const setUserStatus = (status: string): SetUsersStatusActionType => ({
//     type: SET_USER_STATUS,
//     status
//
// })
//
// export const deletePostActionCreator = (idPost: number) => ({type: "DELETE-POST" , idPost} as const)
//
// export const savePhotoSuccess = (photos: PhotosType): SetProfilePhotoType => {
//     return {
//         type: "SET-PROFILE-PHOTO",
//         photo: photos
//     } as const
// }
//
// //Thunk
//
// export const getUser = (userId: string) => {
//     return async (dispatch: Dispatch) => {
//         let response = await profileAPI.getProfile(userId);
//         dispatch(setUserProfile(response.data))
//
//     }
// }
//
// export const getUserStatus = (userId: string) => {
//     return async (dispatch: Dispatch) => {
//         let response = await profileAPI.getStatus(userId);
//         dispatch(setUserStatus(response.data))
//     }
// }
//
// export const updateUserStatus = (status: string) => {
//     return async (dispatch: Dispatch) => {
//         let response = await profileAPI.updateStatus(status);
//         if (response.data.resultCode === 0) {
//             dispatch(setUserStatus(status))
//         }
//     }
// }
//
// export const savePhoto = (file:File) => {
//     return async (dispatch: Dispatch) => {
//         let response = await profileAPI.savePhoto(file);
//         if (response.data.resultCode === 0) {
//             dispatch(savePhotoSuccess(response.data.data.photos))
//         }
//     }
// }