import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ProfileType, StoreType} from "../../redux/redux-store";
import {getUser} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";


type ProfileContainerPropsType = {
    profile: ProfileType | null
    getUser: (userID: string) => void
    isAuth:boolean
}

type PathParamsType = {
    userID: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


export class ProfileAPIContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) {
            userID = '27605';
        }
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
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }


}

const mapStateToProps = (state: StoreType) => ({
    profile: state.profilePage.profile,
    isAuth:state.auth.isAuth


})


let WithUrlDataContainerComponent = withRouter(ProfileAPIContainer)
export const ProfileContainer = connect(mapStateToProps, {getUser})(WithUrlDataContainerComponent);

