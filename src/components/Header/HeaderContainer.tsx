import React from 'react';


import {Header} from "./Header";

import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {getUserData, logout, UsersAuthType} from "../../redux/auth-reducer";


type HeaderContainerPropsType={
    data:UsersAuthType
    getUserData:()=>void
    logout:()=>void
}


export class HeaderAPIContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        this.props.getUserData()


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


export const HeaderContainer = connect(mapStateToProps, {getUserData, logout})(HeaderAPIContainer)