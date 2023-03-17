import {ActionsType, StoreType} from "./redux-store";
import {getUserData} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";


let initialState = {
    initialized: false
}

type InitialStateType = typeof initialState


export const appReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SET-INITIALIZED":
            return {
                ...state,
                initialized: true
            }

        default:
            return state

    }

}

//type
export type SetInitializedAT = ReturnType<typeof setInitializedAC>


//action
const setInitializedAC = () => ({type: 'SET-INITIALIZED'} as const)

export const initializeApp = (): ThunkAction<void, StoreType, unknown, ActionsType> => (dispatch) => {
    dispatch(getUserData())
        .then(()=>{
        dispatch(setInitializedAC())
    })


}



