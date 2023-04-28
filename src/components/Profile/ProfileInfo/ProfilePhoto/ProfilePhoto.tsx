import React, {ChangeEvent, FC} from 'react';
import {ProfileType} from "redux/redux-store";

type Props={
    profile: ProfileType
    isOwner: boolean
    savePhoto:(file:File)=>void
}

export const ProfilePhoto:FC<Props> = ({profile,isOwner,savePhoto}) => {


    const onMainPhotoSelected=(event:ChangeEvent<HTMLInputElement>)=>{

        if(event.target.files?.length){
            savePhoto(event.target.files[0])

        }


    }
    return (
        <div>
            <img src={profile.photos.large === null ? 'https://via.placeholder.com/300' : profile.photos.large}/>

            {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
        </div>
    );
};

