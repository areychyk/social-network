import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ProfileType, StoreType} from "redux/redux-store";
import {getUser, getUserStatus, savePhoto, updateUserStatus} from "redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";


type ProfileContainerPropsType = {
    profile?: ProfileType
    getUser: (userID: string) => void
    getUserStatus: (userID: string) => void
    status:string
    updateUserStatus:(status:string)=>void
    AuthUserID:string
    isAuth:string
    savePhoto:(file:File)=>void

}

type PathParamsType = {
    userID: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


export class ProfileAPIContainer extends React.Component<PropsType> {


    refreshProfile(){
        let userID = this.props.match.params.userID
        if (!userID) {
            userID = this.props.AuthUserID;
            if(!userID){
                this.props.history.push("/login")
            }
        }
        this.props.getUser(userID)
        this.props.getUserStatus(userID)
    }

    componentDidMount() {
    this.refreshProfile()

    }
    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if(this.props.match.params.userID != prevProps.match.params.userID){
            this.refreshProfile()
        }
    }

    render() {

        return (
            <Profile
                isOwner={!this.props.match.params.userID}
                profile={this.props.profile}
                status={this.props.status}
                updateUserStatus={this.props.updateUserStatus}
                savePhoto={this.props.savePhoto}
            />
        )
    }


}


const mapStateToProps = (state: StoreType)  => ({
    profile: state.profilePage.profile,
    status:state.profilePage.status,
    AuthUserID:state.auth.UserId,
    isAuth:state.auth.isAuth

})


// let WithUrlDataContainerComponent = withRouter(ProfileAPIContainer)
//
// export const ProfileContainer = WithAuthRedirectComponent(connect(mapStateToProps, {getUser})(WithUrlDataContainerComponent));


export const ProfileContainer=compose<React.ComponentType>(
    connect(mapStateToProps, {getUser,getUserStatus, updateUserStatus,savePhoto}),
    withRouter,
    // WithAuthRedirectComponent
)
(ProfileAPIContainer)


