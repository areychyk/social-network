import s from "./ProfileInfo.module.css";
import React, {FC} from "react";
import {ProfileType} from "redux/redux-store";
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileStatusWithHooks} from "../ProfileStatus/ProfileStatusWithHooks";
import {ProfilePhoto} from "components/Profile/ProfileInfo/ProfilePhoto/ProfilePhoto";


type PropsType = {
    profile?: ProfileType
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto:(file:File)=>void
}


export const ProfileInfo: FC<PropsType> = ({profile, isOwner, updateUserStatus, status,savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={s.wrapper}>

            <h2>{profile.fullName}</h2>
            <p>Status: {profile.lookingForAJobDescription}</p>

            <ProfileStatusWithHooks
                status={status}
                updateUserStatus={updateUserStatus}
            />

            <ProfilePhoto profile={profile} isOwner={isOwner} savePhoto={savePhoto}/>




            <div className={s.avaDescription}>
                <img className={s.avatar}
                     src={profile.photos.small === null ? 'https://via.placeholder.com/75' : profile.photos.small}/>
                <p>Description: {profile.aboutMe}</p>
            </div>

            <div className={s.contacts}>
                <p> My contacts:</p>

                <a href={'https://' + profile.contacts?.Facebook}>facebook</a>
                <a href={'https://' + profile.contacts?.instagram}>instagram</a>
                <a href={'https://' + profile.contacts?.youtube}>youtube</a>
                <a href={'https://' + profile.contacts?.github}>github</a>

            </div>

            <div className={s.lineInBottom}></div>
        </div>
    )
}