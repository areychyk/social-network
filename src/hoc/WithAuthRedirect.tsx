import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {StoreType} from "../redux/redux-store";


type MapStateToPropsType={
    isAuth:boolean
}
let mapStateToPropsForRedirect = (state:StoreType):MapStateToPropsType=>({
    isAuth:state.auth.isAuth
})

export function WithAuthRedirectComponent <T> (Component:ComponentType<T>){
    function RedirectComponent(props: MapStateToPropsType) {
        let {isAuth, ...restProps}=props
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T} />
    }

    let ConnectedAuthRedirectComponent = connect (mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent


}