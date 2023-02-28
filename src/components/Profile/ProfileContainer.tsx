import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ProfileType, StoreType} from "../../redux/redux-store";
import {getUser} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirectComponent} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


type ProfileContainerPropsType = {
    profile: ProfileType | null
    getUser: (userID: string) => void

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


    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }


}


const mapStateToProps = (state: StoreType) => ({
    profile: state.profilePage.profile,

})


// let WithUrlDataContainerComponent = withRouter(ProfileAPIContainer)
//
// export const ProfileContainer = WithAuthRedirectComponent(connect(mapStateToProps, {getUser})(WithUrlDataContainerComponent));


export const ProfileContainer=compose<React.ComponentType>(
    connect(mapStateToProps, {getUser}),
    withRouter,
    WithAuthRedirectComponent
)
(ProfileAPIContainer)


