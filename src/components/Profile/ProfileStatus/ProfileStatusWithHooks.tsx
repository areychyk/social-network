import s from "./ProfileStatus.module.css";
import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from "react";


type ProfileStatusType = {
    status: string
    updateUserStatus:(status:string)=>void
}


export const ProfileStatusWithHooks =(props:ProfileStatusType)=> {

    const[editMode,setEditMode]=useState<boolean>(false)
    const [statusValue,setStatusValue]=useState<string>(props.status)

    useEffect(()=>{
        if(statusValue !== props.status){
            setStatusValue(props.status)
        }
    },[props.status])

 const activateEditMode = () => {
     setEditMode(true)
 }
 const onStatusChange = (event:ChangeEvent<HTMLInputElement>) => {
     setStatusValue(event.currentTarget.value)


 }

 const deactivateEditMode = () => {
     setEditMode(false)
     props.updateUserStatus(statusValue)
 }

 const onKeyStatusSend = (event:KeyboardEvent<HTMLInputElement>) => {
        if(event.key==='Enter'){
            setEditMode(false)
            props.updateUserStatus(statusValue)
        }

 }





        return (
            <div className={s.wrapper}>

                {!editMode&&
                    <div>
                        <span onDoubleClick={activateEditMode}>{!props.status?"No Status":props.status}</span>
                    </div>}
                {editMode &&
                    <div>
                        <input onChange={onStatusChange} autoFocus={true}  onBlur={deactivateEditMode} onKeyDown={onKeyStatusSend} value={statusValue}/>
                    </div>}


            </div>
        )




}