import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ProfileType, StoreType} from "../../redux/redux-store";
import {getUser, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirectComponent} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


type ProfileContainerPropsType = {
    profile: ProfileType | null
    getUser: (userID: string) => void
    getUserStatus: (userID: string) => void
    status:string
    updateUserStatus:(status:string)=>void

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
        this.props.getUserStatus(userID)



    }

    render() {

        return (
            <Profile
                profile={this.props.profile}
                status={this.props.status}
                updateUserStatus={this.props.updateUserStatus}
            />
        )
    }


}


const mapStateToProps = (state: StoreType) => ({
    profile: state.profilePage.profile,
    status:state.profilePage.status

})


// let WithUrlDataContainerComponent = withRouter(ProfileAPIContainer)
//
// export const ProfileContainer = WithAuthRedirectComponent(connect(mapStateToProps, {getUser})(WithUrlDataContainerComponent));


export const ProfileContainer=compose<React.ComponentType>(
    connect(mapStateToProps, {getUser,getUserStatus, updateUserStatus}),
    withRouter,
    // WithAuthRedirectComponent
)
(ProfileAPIContainer)


