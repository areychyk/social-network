import React from 'react';

import {connect} from "react-redux";
import {Login} from "./Login";
import {login} from "../../redux/auth-reducer";
import {StoreType} from "../../redux/redux-store";




const mapStateToProps = (state: StoreType) => {
    return {
        isAuth:state.auth.isAuth
    }
}

export const LoginContainer = connect (mapStateToProps, {login})(Login)
