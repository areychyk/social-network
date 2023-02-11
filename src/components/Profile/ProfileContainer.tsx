import React from 'react';

import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, StoreType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";


type ProfileContainerPropsType = {
    profile: ProfileType | null
    setUserProfile: (profile: ProfileType) => void
}

type PathParamsType = {
    userID: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


export class ProfileAPIContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) {
            userID = '10';
        }
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
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
export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);

