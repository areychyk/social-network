import preloader from "../../../assets/images/Rolling-2.9s-227px.svg";
import React from "react";

type PreloaderPropsType={

}

export const Preloader = (props:PreloaderPropsType) => {

    return <div>
        <img src={preloader}/>
    </div>
}