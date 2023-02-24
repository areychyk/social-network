import s from "./ProfileInfo.module.css";
import React from "react";
import {ProfileType} from "../../../redux/redux-store";
import {Preloader} from "../../common/preloader/Preloader";

type ProfileInfoType = {
    profile: ProfileType | null
}





export const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.wrapper}>

            <h2>{props.profile.fullName}</h2>
            <p>Status: {props.profile.lookingForAJobDescription}</p>
            <img src={props.profile.photos.large===null?'https://via.placeholder.com/300':props.profile.photos.large}/>


            <div className={s.avaDescription}>
                <img className={s.avatar} src={props.profile.photos.small===null?'https://via.placeholder.com/75':props.profile.photos.small}/>
                <p>Description: {props.profile.aboutMe}</p>
            </div>

            <div className={s.contacts}>
                <p> My contacts:</p>

                <a href={'https://'+props.profile.contacts.facebook}>facebook</a>
                <a href={'https://'+props.profile.contacts.instagram}>instagram</a>
                <a href={'https://'+props.profile.contacts.youtube}>youtube</a>
                <a href={'https://'+props.profile.contacts.github}>github</a>

            </div>

            <div className={s.lineInBottom}></div>
        </div>
    )
}