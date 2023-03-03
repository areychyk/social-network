import s from "./ProfileStatus.module.css";
import React, {ChangeEvent,KeyboardEvent} from "react";


type ProfileStatusType = {
    status: string
    updateUserStatus:(status:string)=>void
}


export class ProfileStatus extends React.Component<ProfileStatusType, { editMode: boolean, localStatus:string }> {

    state = {
        editMode: false,
        localStatus:this.props.status

    }


    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode=()=>{
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.localStatus)
    }
    onKeyStatusSend=(event:KeyboardEvent<HTMLInputElement>)=>{

       if (event.key === "Enter"){
            this.setState({
                editMode: false
            })
            this.props.updateUserStatus(this.state.localStatus)
        }

    }

    onStatusChange=(event:ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            localStatus:event.currentTarget.value
        })


    }

    render() {


        return (
            <div className={s.wrapper}>

                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{!this.props.status?"No Status":this.props.status}</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true}  onBlur={this.deactivateEditMode} onKeyDown={this.onKeyStatusSend} value={this.state.localStatus}/>
                    </div>}


            </div>
        )

    }


}