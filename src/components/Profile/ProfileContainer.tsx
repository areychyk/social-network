import React from 'react';

import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, StoreType} from "../../redux/redux-store";
import {getUser, setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";


type ProfileContainerPropsType = {
    profile: ProfileType | null
    setUserProfile: (profile: ProfileType) => void
    getUser:(userID:string)=>void
}

type PathParamsType = {
    userID: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


export class ProfileAPIContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userID = this.props.match.params.userID
        this.props.getUser(userID)
        // if (!userID) {
        //     userID = '10';
        // }
        // // axios
        // //     .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
        // usersAPI.getUserProfile(userID)
        //     .then(response => {
        //         this.props.setUserProfile(response.data)
        //     })


    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }


}

const mapStateToProps = (state: StoreType) => ({
    profile: state.profilePage.profile


})


let WithUrlDataContainerComponent = withRouter(ProfileAPIContainer)
export const ProfileContainer = connect(mapStateToProps, {setUserProfile,getUser})(WithUrlDataContainerComponent);

