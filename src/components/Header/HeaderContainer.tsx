import React from 'react';


import {Header} from "./Header";

import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {getUserData,  UsersAuthType} from "../../redux/auth-reducer";


type HeaderContainerPropsType={
    data:UsersAuthType
    getUserData:()=>void
}


export class HeaderAPIContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        this.props.getUserData()

        // axios
        //     .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //         withCredentials: true,
        //         headers: {
        //             "API-KEY":"944413f4-5eb4-4767-a66d-dd54b12c9aac"
        //         }
        //     })
        // usersAPI.getAuthMe()
        //     .then(response => {
        //
        //         if (response.data.resultCode === 0) {
        //             let {id,login,email}=response.data.data
        //             this.props.setAuthUserData(id,login,email)
        //         }
        //
        //
        //     })

    }

    render() {

        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: StoreType) => {
    return {
        data:state.auth
    }
}


export const HeaderContainer = connect(mapStateToProps, {getUserData})(HeaderAPIContainer)