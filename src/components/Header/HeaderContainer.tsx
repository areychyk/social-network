import React from 'react';


import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {setAuthUserData, UsersAuthType} from "../../redux/auth-reducer";

type HeaderContainerPropsType={
    data:UsersAuthType
    setAuthUserData:(id: number, login: string, email: string)=>void
}


export class HeaderAPIContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true,
                headers: {
                    "API-KEY":"944413f4-5eb4-4767-a66d-dd54b12c9aac"
                }
            })
            .then(response => {

                if (response.data.resultCode === 0) {
                    let {id,login,email}=response.data.data
                    this.props.setAuthUserData(id,login,email)
                }


            })
    }

    render() {
        // console.log(this.props)
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: StoreType) => {
    return {
        data:state.auth
    }
}


export const HeaderContainer = connect(mapStateToProps, {setAuthUserData})(HeaderAPIContainer)