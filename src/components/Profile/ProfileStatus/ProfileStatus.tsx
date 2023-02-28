import s from "./ProfileStatus.module.css";
import React from "react";


type ProfileStatusType = {
    status: string
}


export class ProfileStatus extends React.Component<ProfileStatusType, { editMode: boolean }> {

    state = {
        editMode: false
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
    }

    render() {


        return (
            <div className={s.wrapper}>

                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true}  onBlur={this.deactivateEditMode} value={this.props.status}/>
                    </div>}


            </div>
        )

    }


}